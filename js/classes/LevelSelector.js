LevelSelector = function (type, x, y) {
	View.Container.call(
		this,
		new View.Container(),
		new View.Container()
	);

	main.levelSelector = this;

	// Set selected folder and level
	this.currentFolder;
	this.currentLevel;
	this.folderSpacing = 122;
	this.folders = [];
	this.levels = [];
	this.folderSelectorActive = false;
	this.levelSelectorActive = false;

	// Create folders
	this.createFolders();
	this.selectFolder(main.storage.selectedFolder);
	this.selectLevel(main.storage.selectedLevel);

	// Create highlight
	this.children[1].addChildren(
		new View.Sprite('Menu.LevelHighlight', 311, 200, 0, {opacity: 1}),
		new View.Sprite('Menu.LevelHighlight', 526, 200, 0, {opacity: 1}),
		new MenuButton({
			"bitmap": "Menu.Play",
			"mask": "Menu.Play",
			"vars": {
				x: 710,
				y: 200
			},
			"onClick": function () {
				var levelSelector;
				levelSelector = this.parent.parent;

				main.levelController.openEntry(main.levelController.levelList[levelSelector.currentFolder].levels[levelSelector.currentLevel]);
			}
		})
	);
	this.children[1].addChildren(
		new View.Sprite('UI.ArrowNext', 419, 200, 0, {opacity: 1})
		//new View.Sprite('UI.ArrowNext', 634, 200, 0, {opacity: 1})
	);

	engine.currentRoom.loops.onRunning.attachFunction(this, this.doFolderSelector);
	engine.currentRoom.loops.onRunning.attachFunction(this, this.doLevelSelector);
};

LevelSelector.prototype = Object.create(View.Container.prototype);

LevelSelector.prototype.import({
	createFolders: function () {
		var i, folder;

		for (i = 0; i < main.levelController.levelList.length; i++) {
			this.folders.push(new LevelSelectorIcon(main.levelController.levelList[i]));
		}

		// Move folders to right positions
		for (i = 0; i < this.folders.length; i ++) {
			folder = this.folders[i];

			folder.x = 310;
			folder.y = 200 + this.folderSpacing * i;
		}

		this.children[0].addChildren.apply(this.children[0], this.folders);
	},

	createLevels: function () {
		var i, level;

		// Remove all current levels
		for (i = 0; i < this.levels.length; i++) {
			this.levels[i].remove();
		}
		this.levels = [];

		// Create level icons
		for (i = 0; i < main.levelController.levelList[this.currentFolder].levels.length; i++) {
			level = new LevelSelectorIcon(main.levelController.levelList[this.currentFolder].levels[i]);
			this.levels.push(level);
		}

		// Move levels to right positions
		for (i = 0; i < this.levels.length; i ++) {
			level = this.levels[i];

			level.x = 525;
			level.y = 200 + (i - this.currentLevel) * this.folderSpacing;
		}

		this.children[0].addChildren.apply(this.children[0], this.levels);
	},

	doFolderSelector: function () {
		var pointers, x, y, i, folder, dist, goToFolder;

		if (pointers = pointer.shapeIsPressed(MOUSE_TOUCH_ANY, new Math.Rectangle(220, 0, 180, 400))) {
			this.initY = pointers[0].y;
			this.initX = pointers[0].x;
			this.folderSelectorActive = true;
			this.clicking = true;
		}

		if (this.folderSelectorActive && (pointers = pointer.isDown(MOUSE_TOUCH_ANY))) {
			x = pointers[0].x;
			y = pointers[0].y;


			if (new Math.Vector(x, y).getDistance(new Math.Vector(this.initX, this.initY)) > 5) {
				this.clicking = false;
			}

			// Move folders according to the movement
			for (i = 0; i < this.folders.length; i ++) {
				folder = this.folders[i];

				folder.y = 200 + (i - this.currentFolder) * this.folderSpacing + (y - this.initY);
			}
		}

		dist = 10000;
		if (this.folderSelectorActive && (pointers = pointer.isReleased(MOUSE_TOUCH_ANY))) {
			// Find the new selected folder
			for (i = 0; i < this.folders.length; i ++) {
				folder = this.folders[i];

				if (Math.abs(folder.y - (this.clicking ? pointers[0].y : 200)) < dist) {
					goToFolder = i;
					dist = Math.abs(folder.y - (this.clicking ? pointers[0].y : 200));
				}
			}

			this.folderSelectorActive = false;
			this.selectFolder(goToFolder);
		}
	},

	doLevelSelector: function () {
		var pointers, x, y, i, level, dist, goToLevel;

		if (pointers = pointer.shapeIsPressed(MOUSE_TOUCH_ANY, new Math.Rectangle(435, 0, 180, 400))) {
			this.initY = pointers[0].y;
			this.initX = pointers[0].x;
			this.levelSelectorActive = true;
			this.clicking = true;
		}

		if (this.levelSelectorActive && (pointers = pointer.isDown(MOUSE_TOUCH_ANY))) {
			x = pointers[0].x;
			y = pointers[0].y;


			if (new Math.Vector(x, y).getDistance(new Math.Vector(this.initX, this.initY)) > 5) {
				this.clicking = false;
			}

			// Move levels according to the movement
			for (i = 0; i < this.levels.length; i ++) {
				level = this.levels[i];
				level.y = 200 + (i - this.currentLevel) * this.folderSpacing + (y - this.initY);
			}
		}

		dist = 10000;
		if (this.levelSelectorActive && (pointers = pointer.isReleased(MOUSE_TOUCH_ANY))) {
			// Find the new selected folder
			for (i = 0; i < this.levels.length; i ++) {
				level = this.levels[i];
				if (!level.unlocked) {
					continue;
				}

				if (Math.abs(level.y - (this.clicking ? pointers[0].y : 200)) < dist) {
					goToLevel = i;
					dist = Math.abs(level.y - (this.clicking ? pointers[0].y : 200));
				}
			}

			this.levelSelectorActive = false;
			this.selectLevel(goToLevel);
		}
	},

	selectFolder: function (fId) {
		if (this.currentFolder === fId) {
			this.moveFoldersIntoPlace();
			return;
		}

		this.currentFolder = fId;
		this.moveFoldersIntoPlace();

		// Create level icons
		this.currentLevel = 0;
		this.createLevels();
		this.moveLevelsIntoPlace();
	},

	selectLevel: function (lId) {
		this.currentLevel = lId;
		this.moveLevelsIntoPlace();
	},

	moveFoldersIntoPlace: function () {
		for (i = 0; i < this.folders.length; i ++) {
			folder = this.folders[i];
			folder.animate({y: 200 + (i - this.currentFolder) * this.folderSpacing}, {duration: 200});
		}
	},

	moveLevelsIntoPlace: function () {
		for (i = 0; i < this.levels.length; i ++) {
			level = this.levels[i];
			level.animate({y: 200 + (i - this.currentLevel) * this.folderSpacing}, {duration: 200});
		}
	}
});
