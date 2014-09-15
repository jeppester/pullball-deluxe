LevelController = function () {
	this.levelQueue = [];
	this.levelLoaded = false;
	this.tries = 0;
	this.startTime = 0;
	this.powerSpend = 0;

	engine.ajaxRequest('getLevels.php', '', false, function (data) {
		this.levelList = JSON.parse(data);
	}, this);

	// create ceiling and walls
	this.ceiling = new View.Sprite('UI.Ceiling', 0, 0, 0, {offset: new Math.Vector(0,0), opacity: 0});
	this.ceiling.width = 800;

	this.wallLeft = new View.Sprite('UI.Ceiling', 0, 400, -Math.PI / 2, {offset: new Math.Vector(), opacity: 0});
	this.wallLeft.width = 400;

	this.wallRight = new View.Sprite('UI.Ceiling', 800, 0, Math.PI / 2, {offset: new Math.Vector(), opacity: 0});
	this.wallRight.width = 400;

	overlayView.children[1].insertBelow(this.ceiling, main.fadeOver);
	overlayView.children[0].addChildren(this.wallLeft, this.wallRight);

	// Create parallax background
	this.bg = new View.Sprite('Background1Light', 0, 0, 0, {offset: new Math.Vector(0,0)});
	this.mg = new View.Container();
	this.fg = new View.Sprite('Foreground1Light', 0, 0, 0, {offset: new Math.Vector(0,0), opacity: 0.7});

	bgView.addChildren(this.bg, this.mg, this.fg);
};

LevelController.prototype.import({
	onLevelComplete: function () {
		if (!this.currentLevel.isTesting) {
			this.completionScreen = new LevelCompletionScreen(function () {
				// Go to next level
				main.levelController.closeLevel(function () {
					var levels = this.levelList[this.currentLevelEntry.fId].levels;

					// If the current level is the last in the folder
					if (this.currentLevelEntry.lId + 1 === levels.length) {
						main.storage.selectedFolder = this.currentLevelEntry.fId;
						main.storage.selectedLevel = this.currentLevelEntry.lId;
						main.saveLocalStorage();
						this.openLevel('levels.js');
					}
					// Open next level in folder
					else {
						this.openEntry(levels[this.currentLevelEntry.lId + 1]);
					}
				});
			});

			// Show level completed screen
			overlayView.children[1].addChildren(this.completionScreen);
			this.completionScreen.checkSaveStats();
		}
		else {
			// Go back to editor
			this.openLevel('editor.js', undefined, function () {
				// Enable save button
				main.levelEditor.btnSaveLevel.enable();
				main.levelEditor.btnSaveLevel.opacity = 1;
			});
		}
	},

	getCurrentLevelStats: function () {
		index = this.levelList[this.currentLevelEntry.fId].folderName + '/' + this.currentLevelEntry.fileName;
		if (!main.storage.levelStats.hasOwnProperty(index)) {
			main.storage.levelStats[index] = {
				completed: false,
				tries: 0,
				bestTime: 0,
				powerAward: 0,
				timeAward: 0
			};
			main.saveLocalStorage();
		}

		return main.storage.levelStats[index];
	},

	closeLevel: function (callback) {
		var objects;

		//objectsView.children[1].setDrawCache(false);

		// Find all level objects
		objects = [].concat(main.depths[0].children, main.depths[1].children, main.depths[2].children, main.depths[3].children, main.depths[4].children, tutorialView.children);

		engine.currentRoom.loops.onRunning.unscheduleAll();

		main.fadeOver.animate({opacity: 1}, {duration: 500, callback: function () {
			objects.forEach(function(o) {
				engine.purge(o);
			});
		}});

		// Animate out any indicator
		if (main.indicator && !main.indicator.inactive) {
			main.indicator.inactive = true;
			main.indicator.animate({radius: 0, opacity: 0}, {duration: 500, callback: function () {
				engine.purge(this);
			}});
		}

		// Run callback
		engine.currentRoom.loops.onRunning.schedule(this, function () {
			this.levelLoaded = false;
			callback.call(this);
		}, 800);
	},

	resetLevel: function () {
		this.openLevel(this.currentLevel, this.currentLevelEntry);
	},

	openEntry: function (entry) {
		this.openLevel('levels/' + this.levelList[entry.fId].folderName + '/' + entry.fileName, entry);
	},

	openLevel: function (level, levelEntry, onLevelOpened) {
		if (typeof level === 'string') {
			level = LevelParser.parseLevel(level);
		}

		// If a level is loaded, close it
		if (this.levelLoaded) {
			this.closeLevel(function () {
				main.levelController.openLevel(level, levelEntry, onLevelOpened);
			});
			return;
		}

		this.onLevelOpened = onLevelOpened || function () {};

		var i, obj, objects, cloud, y;

		// If the same level was already loaded, set the number of tries
		if (level === this.currentLevel) {
			this.tries ++;
		}
		else {
			this.tries = 0;
		}

		this.obstacles = [];
		this.deadlies = [];
		this.destinations = [];
		this.controllers = [];

		// Background
		this.bg.setSource(level.backgroundImage ? level.backgroundImage : 'Background1Light');
		this.fg.setSource(level.foregroundImage ? level.foregroundImage : 'Foreground1Light');

		// Create clouds if clouds are enabled
		this.mg.removeAllChildren();
		if (level.clouds) {
			for (i = 0 + Math.random() * 200; i < (level.width - 800) / 16 + 800; i += 100 + Math.random() * 150) {
				y = 50 + Math.random() * 100;
				cloud = new View.GameObject(level.clouds[Math.floor(Math.random() * level.clouds.length)], i, y, 0, {size: 1 - (150 - y) / 200, heightScale: 1 - Math.random() * 0.2, speed: new Math.Vector(7 + Math.random() * 3, 0)});
				cloud.loop.attachFunction(cloud, function () {
					if (this.x > (main.levelController.currentLevel.width - 800) / 16 + 800 + this.width / 2) {
						this.x = -this.width / 2;
					}
				});
				cloud.opacity = level.cloudOpacity ? level.cloudOpacity : 1;
				this.mg.addChildren(cloud);
			}
		}

		main.fadeOver.animate({opacity: 0}, {duration: 500});

		this.currentLevel = level;
		this.currentLevelEntry = levelEntry || false;

		// Top buttons
		main.backButton.disable();
		main.backButton.opacity = 0;
		main.backButton.loop = engine.currentRoom.loops.onRunning;
		main.restartButton.disable();
		main.restartButton.opacity = 0;
		main.restartButton.loop = engine.currentRoom.loops.onRunning;

		if (level.isMenu) {
			switch (level.file) {
			case 'levels.js':
				main.backButton.enable();
				main.backButton.opacity = 1;
				main.backButton.onClick = function () {
					main.storage.selectedFolder = main.levelSelector.currentFolder;
					main.storage.selectedLevel = main.levelSelector.currentLevel;
					main.saveLocalStorage();
					delete main.levelSelector;
					main.levelController.openLevel('menu.js');
				};
				break;
			case 'editor.js':
				main.backButton.loop = engine.currentRoom.loops.eachFrame;
				main.backButton.enable();
				main.backButton.opacity = 1;

				main.backButton.onClick = function () {
					main.paused = false;
					main.levelController.openLevel('menu.js', undefined, function () {
						main.levelEditor.remove();
						delete main.levelEditor;
					});
				};
				break;
			}
		}
		else if (level.isTesting) {
			main.backButton.enable();
			main.backButton.opacity = 1;
			main.backButton.onClick = function () {
				main.levelController.openLevel('editor.js');
			};

			main.restartButton.enable();
			main.restartButton.opacity = 1;
			main.restartButton.onClick = function () {
				main.levelController.resetLevel();
			};
		}
		else {
			main.backButton.enable();
			main.backButton.opacity = 1;
			main.backButton.onClick = function () {
				main.levelController.openLevel('levels.js');
			};

			main.restartButton.enable();
			main.restartButton.opacity = 1;
			main.restartButton.onClick = function () {
				main.levelController.resetLevel();
			};

			main.storage.selectedFolder = this.currentLevelEntry.fId;
			main.storage.selectedLevel = this.currentLevelEntry.lId;
			main.saveLocalStorage();
		}

		// Show or hide the ceiling and walls depending on the levels settings
		this.wallRight.x = level.width;
		this.ceiling.opacity = level.ceiling ? 1 : 0;
		this.wallLeft.opacity = level.wallLeft ? 1 : 0;
		this.wallRight.opacity = level.wallRight ? 1 : 0;

		// Level objects
		delete this.ball;
		for (i = 0; i < level.objects.length; i ++) {
			obj = level.objects[i];

			instance = new window[obj.class](obj);

			instance.opacity = obj.opacity !== undefined ? obj.opacity : 1;

			if (obj.group) {
				this[obj.group].push(instance);
			}
			else if (obj.class === 'Ball') {
				this.ball = instance;
				this.ball.power = level.power || 200;
			}
			main.depths[obj.depth || 0].addChildren(instance);
		}

		// Power bar
		if (level.power !== false) {
			this.powerSpend = 0;
			main.powerBarBg.opacity = 1;
			main.powerBar.opacity = 1;
			main.powerBarSilver.opacity = 1;
			main.powerBarGold.opacity = 1;
			this.ball.updatePower(false);
		}
		else {
			main.powerBarBg.opacity = 0;
			main.powerBar.opacity = 0;
			main.powerBarSilver.opacity = 0;
			main.powerBarGold.opacity = 0;
		}

		// Timer bar
		if (level.goldTime && level.silverTime) {
			main.levelController.startTime = engine.currentRoom.loops.onRunning.time;
			main.timerBarBg.opacity = 1;
			main.timerBarSilver.opacity = 1;
			main.timerBarGold.opacity = 1;
			this.ball.updateTimer(false);
		}
		else {
			main.timerBarBg.opacity = 0;
			main.timerBarSilver.opacity = 0;
			main.timerBarGold.opacity = 0;
		}

		this.levelLoaded = true;

		this.onLevelOpened();
		this.startLevel();
	},

	startLevel: function () {
		var x, time, stats;

		if (this.tries > 0 || this.currentLevel.isMenu) {
			engine.cameras[0].captureRegion.x = 0;
			overlayView.children[1].x = 0;
			this.bg.x = 0;
			this.mg.x = 0;
			this.fg.x = 0;
			time = 0;
		}
		else {
			x = this.currentLevel.width - engine.canvasResX;
			time = 500 + (x * 1.5);

			engine.cameras[0].captureRegion.x = x;
			main.updateParallax();

			engine.currentRoom.loops.onRunning.schedule(this, function () {
				engine.cameras[0].captureRegion.animate({x: 0}, {duration: time, onStep: main.updateParallax});
			}, 1000);
		}

		// Add a try to the level stats
		if (!this.currentLevel.isMenu && !this.currentLevel.isTesting) {
			stats = this.getCurrentLevelStats();
			if (!stats.completed) {
				stats.tries ++;
				main.saveLocalStorage();
			}
		}

		engine.currentRoom.loops.onRunning.schedule(this, function () {
			this.ball.spawn(function () {
				main.levelController.deadlies.forEach(function (d) {
					if (d.onLevelStart) {
						d.onLevelStart();
					}
				});

				main.levelController.startTime = engine.currentRoom.loops.onRunning.time;
				main.levelController.powerSpend = 0;

				if (main.levelController.currentLevel.tutorial && main.levelController.tries === 0) {
					tutorialView.addChildren(
						new Tutorial(tutorials[main.levelController.currentLevel.tutorial])
					);
				}
			});
		}, 1000 + time);
	},
});
