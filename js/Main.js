// The game's constructor function
Main = function () {
	// Make a global reference to the game object
	main = this;

	// Load helpers
	engine.loadFiles([
		'js/helpers.js',
	]);

	// Load classes
	loader.loadClasses([
		'js/classes/Checkbox.js',
		'js/classes/Ball.js',
		'js/classes/Obstacle.js',
		'js/classes/Hedgehog.js',
		'js/classes/Controller.js',
		'js/classes/LevelController.js',
		'js/classes/LevelParser.js',
		'js/classes/MenuButton.js',
		'js/classes/LevelEditor.js',
		'js/classes/LevelSelector.js',
		'js/classes/LevelSelectorIcon.js',
		'js/classes/LevelCompletionScreen.js',
		'js/classes/Tutorial.js',
	]);

	// Load object type properties
	engine.loadFiles([
		'js/data/objectTypes.js',
		'js/data/tutorials.js',
	]);

	// Create onPaused / onRunning mechanism
	engine.currentRoom.addLoop('onRunning', new Engine.CustomLoop(1, function () {
		return !main.paused;
	}));
	engine.currentRoom.addLoop('onPaused', new Engine.CustomLoop(1, function () {
		return main.paused;
	}));

	this.paused = false;

	// Create layers
	this.depths = [];
	engine.currentRoom.addChildren(
		bgView = new View.Container(),
		gridView = new View.Container(),
		objectsView = new View.Container(
			// Depth for moving objects
			this.depths[0] = new View.Container(),

			// Depths for static objects
			new View.Container(
				this.depths[1] = new View.Container(),
				this.depths[2] = new View.Container(),
				this.depths[3] = new View.Container(),
				this.depths[4] = new View.Container()
			)
		),
		overlayView = new View.Container(
			new View.Container(),
			new View.Container(
				// Create power bars
				this.powerBarBg = new View.Sprite('UI.PowerBar2', 397, 5, 0, {offset: OFFSET_TOP_RIGHT, opacity: 0}),
				this.powerBar = new View.Line(new Math.Vector(366, 18), new Math.Vector(366, 18), '#FFF', 5, 'round'),
				this.powerBarSilver = new View.Line(new Math.Vector(366, 18), new Math.Vector(366, 18), '#d4d4d4', 5, 'round'),
				this.powerBarGold = new View.Line(new Math.Vector(366, 18), new Math.Vector(366, 18), '#ffed36', 5, 'round'),

				// Create timer bars
				this.timerBarBg = new View.Sprite('UI.TimerBar2', 403, 5, 0, {offset: OFFSET_TOP_LEFT, opacity: 0}),
				this.timerBarSilver = new View.Line(new Math.Vector(433, 18), new Math.Vector(433, 18), '#d4d4d4', 5, 'round'),
				this.timerBarGold = new View.Line(new Math.Vector(433, 18), new Math.Vector(433, 18), '#ffed36', 5, 'round'),

				// Create back button
				this.backButton = new MenuButton({
					bitmap: "UI.ArrowPrev",
					mask: "UI.ArrowPrev",
					vars: {
						offset: new Math.Vector(),
						x: 7,
						y: 7
					},
					onClick: function () {},
				}),
				this.restartButton = new MenuButton({
					bitmap: "UI.ArrowRestart",
					mask: "UI.ArrowRestart",
					onClick: function () {},
					vars: {
						offset: new Math.Vector(),
						x: 758,
						y: 6
					}
				}),

				tutorialView = new View.Container(),

				// Create fadeOver
				this.fadeOver = new View.Sprite('UI.LoadScreen', 400, 200)
			)
		)
	);
	this.fadeOver.opacity = 0;
	this.powerBar.opacity = 0;
	this.powerBarSilver.opacity = 0;
	this.powerBarGold.opacity = 0;
	this.timerBarSilver.opacity = 0;
	this.timerBarGold.opacity = 0;


	this.backButton.disable();
	this.backButton.opacity = 0;

	this.restartButton.disable();
	this.restartButton.opacity = 0;

	this.levelController = new LevelController();

	// Global vars
	this.gravity = 400;
	this.ballAccelleration = 1000;

	// Storage object for persistent stuff (completed levels and such)
	if (localStorage.pullball) {
		this.storage = JSON.parse(localStorage.pullball);
	}
	else {
		this.storage = {
			levelStats: {},
			selectedFolder: 0,
			selectedLevel: 0
		};
		this.saveLocalStorage();
	}

	// Load menu
	this.levelController.openLevel('menu.js');

	loader.hideOverlay(function () {});
};

Main.prototype.import({
	getLocalStorage: function () {
		return this.storage;
	},

	saveLocalStorage: function () {
		localStorage.pullball = JSON.stringify(this.storage);
	},

	updateParallax: function () {
		var view = engine.cameras[0].captureRegion;

		overlayView.children[1].x = view.x;
		main.levelController.bg.x = view.x - Math.min(main.levelController.bg.width - engine.canvasResX, view.x / 4);
		main.levelController.mg.x = view.x - view.x / 16;
		main.levelController.fg.x = view.x - Math.min(main.levelController.fg.width - engine.canvasResX, view.x / 2);
	}
});
