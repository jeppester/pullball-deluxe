LevelEditor = function (type) {
	var obj;

	main.levelEditor = this;

	View.Container.call(this);
	this.targetPos = 0;
	this.moving = false;
	this.scrolling = false;
	this.ball = false;
	this.selectedObject = false;
	this.selectedObjectStartTime = false;

	this.currentPortal = 1;
	this.portals = [false, false];

	// Placed objects array
	this.placedObjects = [];
	this.placeMode = true;

	// Create grid
	this.initGrid();

	// Create cursor object (a preview of the selected object)
	this.currentObjectType = objectTypes.Grass;
	this.cursor = new View.Sprite(this.currentObjectType.bitmap, 0, 0, 0, {offset: new Math.Vector(this.currentObjectType.offsetX, this.currentObjectType.offsetY), opacity: 0.6});
	overlayView.children[0].addChildren(this.cursor);

	// Create "numb" area where objects cannot be placed (for menu)
	this.numbArea = new Math.Rectangle(0, 0, 585, 42);

	// Init top menu
	this.initTopMenu();

	// Initialize level
	this.initLevel();

	// Setup controls
	engine.currentRoom.loops.eachFrame.attachFunction(this, this.doControls);
	document.addEventListener('mousewheel', this.doObjectSelection);

	main.paused = true;
};

LevelEditor.prototype = Object.create(View.Container.prototype);

LevelEditor.prototype.import({
	// INIT STUFF
	initLevel: function () {
		if (localStorage && localStorage.pullballEditorLevel) {
			this.loadLevelFromStorage();
		}
		else {
			// Create default empty level object
			this.level = {
				"theme": "GrassLands",
				"ceiling": true,
				"width": 800,
				"power": false,
				"backgroundImage": 'Background2Light',
				"clouds": ['Objects.Cloud'],
				"wallLeft": true,
				"wallRight": true,
				"isCompletable": false,
			};
		}
	},

	initGrid: function () {
		var i, line;

		this.gridX = [];
		this.gridY = [];

		for (i = 8; i <= 800; i += 16) {
			line = new View.Line(new Math.Vector(), new Math.Vector(0, 400), '#FFF', 0.5);
			line.x = i;

			this.gridX.push(line);
		}

		for (i = 8; i <= 400; i += 16) {
			line = new View.Line(new Math.Vector(), new Math.Vector(800, 0), '#FFF', 0.5);
			line.y = i;

			this.gridY.push(line);
		}

		gridView.addChildren.apply(gridView, [].concat(this.gridX, this.gridY));
	},

	initTopMenu: function () {
		this.topMenu = new View.Sprite('Editor.TopMenu', 0, 0, 0, {offset: new Math.Vector(-72, 2)});
		this.btnHide = new MenuButton({
			"bitmap": "UI.ArrowUp",
			"vars":{
				"x": 68,
				"y": 24,
			},
			"loop": engine.currentRoom.loops.eachFrame,
			"onClick": function () {
				if (!main.levelEditor.topMenu.hidden) {
					main.levelEditor.topMenu.animate({y: -50},{duration: 200});
					main.levelEditor.topMenu.hidden = true;
					main.levelEditor.numbArea.width = 85;
					this.animate({direction: -Math.PI},{duration: 200});
				}
				else {
					main.levelEditor.topMenu.animate({y: 0},{duration: 200});
					main.levelEditor.topMenu.hidden = false;
					main.levelEditor.numbArea.width = 585;
					this.animate({direction: 0},{duration: 200});
				}
			}
		});
		this.topMenu.hidden = false;

		overlayView.children[1].insertBelow([this.topMenu, this.btnHide], main.fadeOver);

		this.topMenu.addChildren(
			new MenuButton({
				"bitmap": "Editor.PrevObject",
				"vars":{
					"offset": new Math.Vector(),
					"x": 102,
					"y": 17
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.doObjectSelection({wheelDelta: -1});
				}
			}),
			this.topMenu.preview = new View.Sprite(this.currentObjectType.bitmap, 150, 24),
			new MenuButton({
				"bitmap": "Editor.NextObject",
				"vars":{
					"offset": new Math.Vector(),
					"x": 184,
					"y": 17
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.doObjectSelection({wheelDelta: 1});
				}
			}),
			this.btnClearLevel = new MenuButton({
				"bitmap": "Editor.ClearLevel",
				"vars":{
					"offset": new Math.Vector(),
					"x": 215,
					"y": 7
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					if (confirm('Are you sure you want to remove all objects from the level?')) {
						main.levelEditor.clearLevel();
					}
				}
			}),
			new MenuButton({
				"bitmap": "Editor.ToggleWalls",
				"vars":{
					"offset": new Math.Vector(),
					"x": 265,
					"y": 7
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.toggleWalls();
				}
			}),
			new MenuButton({
				"bitmap": "Editor.ToggleCeiling",
				"vars":{
					"offset": new Math.Vector(),
					"x": 314,
					"y": 7
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.toggleCeiling();
				}
			}),
			new MenuButton({
				"bitmap": "Editor.DecreaseWidth",
				"vars":{
					"offset": new Math.Vector(),
					"x": 363,
					"y": 7
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.decreaseLevelWidth();
				}
			}),
			new MenuButton({
				"bitmap": "Editor.IncreaseWidth",
				"vars":{
					"offset": new Math.Vector(),
					"x": 413,
					"y": 7
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.increaseLevelWidth();
				}
			}),
			this.btnPowerSelector = new MenuButton({
				"bitmap": "Editor.PowerSelector",
				"vars":{
					"offset": new Math.Vector(),
					"x": 464,
					"y": 14,
					onLoaded: function () {
						this.powerShadow = new View.Line(new Math.Vector(0, 0), new Math.Vector(30, 0), '#e75b35', 3);
						this.powerShadow.x = 0;
						this.powerShadow.y = -5;
						this.powerShadow.opacity = 0.4;

						this.powerLine = new View.Line(new Math.Vector(0, 0), new Math.Vector(0, 0), '#e75b35', 2);
						this.powerLine.x = 1;
						this.powerLine.y = -5;

						this.addChildren(this.powerShadow, this.powerLine);
						this.power = 0;
					},
				},
				"loop": engine.currentRoom.loops.eachFrame,
				onClick: function () {
					if (this.power < 200) {
						this.power += 50
					}
					else {
						this.power = 0;
					}

					this.powerLine.b.animate({x: this.power / 200 * 28}, {duration: 200});
					main.levelEditor.level.power = this.power > 0 ? this.power : false;
					main.levelEditor.onObjectsChanged();
				}
			}),
			this.btnTestLevel = new MenuButton({
				"bitmap": "Editor.TestLevel",
				"vars":{
					"offset": new Math.Vector(),
					"x": 508,
					"y": 5
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.testLevel();
				}
			}),
			this.btnSaveLevel = new MenuButton({
				"bitmap": "Editor.SaveLevel",
				"vars":{
					"offset": new Math.Vector(),
					"x": 546,
					"y": 6
				},
				"loop": engine.currentRoom.loops.eachFrame,
				"onClick": function () {
					main.levelEditor.downloadLevel();
				}
			})
		);

		this.updateObjectPreview();
		this.onObjectsChanged();
	},

	// CONTROLS
	doControls: function () {
		var p;

		if (keyboard.isDown(KEY_LEFT)) {
			this.moving || this.moveLeft();
		}
		if (keyboard.isDown(KEY_RIGHT)) {
			this.moving || this.moveRight();
		}

		if (this.placeMode) {
			p = pointer.isPressed(MOUSE_1)
			if (p) {
				p = p[0];
				if (!this.numbArea.copy().move(engine.cameras[0].captureRegion.x, 0).contains(p)) {
					this.placeObject(this.currentObjectType, this.cursor.x, this.cursor.y);
					this.onObjectsChanged();
				}
			}

			if (pointer.isPressed(MOUSE_3)) {
				if (this.selectedObject) {
					this.removeObject(this.selectedObject);
				}
			}

			// Move cursor object
			if (!this.numbArea.copy().move(engine.cameras[0].captureRegion.x, 0).contains(pointer.mouse)) {
				this.cursor.x = Math.round((pointer.mouse.x + 8) / 16) * 16 - 8;
				this.cursor.y = Math.round((pointer.mouse.y + 8) / 16) * 16 - 8;

				if (this.cursor.opacity !== 0.6 && !this.cursor.isAnimated()) {
					this.cursor.animate({opacity: 0.6}, {duration: 200});
				}
			}
			else if (this.cursor.opacity !== 0 && !this.cursor.isAnimated()){

				this.cursor.animate({opacity: 0}, {duration: 200});
			}

			// "Select" closest object for possible deletion
			this.selectClosestObject();

			// Fade selected object
			if (this.selectedObject) {
				this.selectedObject.opacity = 1 + Math.sin((engine.gameTime - this.selectedObjectStartTime) / 500 * Math.PI) / 2;
			}
		}
	},

	// OBJECT PLACEMENT AND REMOVAL
	doObjectSelection: function (e) {
		if (this !== main.levelEditor) {
			main.levelEditor.doObjectSelection.call(main.levelEditor, e);
			return
		}

		if (this.scrolling) {
			return;
		}

		var typeNames, typeName, i;

		typeNames = Object.keys(objectTypes);
		for (i = 0; i < typeNames.length; i ++) {
			typeName = typeNames[i];

			if (objectTypes[typeName] === this.currentObjectType) {
				if (e.wheelDelta < 0) {
					if (i < typeNames.length - 1) {
						this.currentObjectType = objectTypes[typeNames[i+1]];
					}
					else {
						this.currentObjectType = objectTypes[typeNames[0]];
					}
				}
				else {
					if (i > 0) {
						this.currentObjectType = objectTypes[typeNames[i-1]];
					}
					else {
						this.currentObjectType = objectTypes[typeNames[typeNames.length - 1]];
					}
				}

				break;
			}
		}

		this.updateCursorObject();
		this.updateObjectPreview();

		this.scrolling = true;

		this.schedule(function () {
			this.scrolling = false;
		}, 200);
	},

	updateObjectPreview: function () {
		var p, source;

		p = this.topMenu.preview;

		if (this.currentObjectType.bitmap == 'Objects.TeleIn') {
			source = this.currentPortal === 1 ? 'Objects.TeleIn' : 'Objects.TeleOut';
		}
		else {
			source = this.currentObjectType.bitmap
		}

		p.setSource(source);

		p.offset.x = p.clipWidth / 2;
		p.offset.y = p.clipHeight / 2;
		p.width = 50;
		p.height = 50;
		p.widthScale = Math.min(p.widthScale, p.heightScale, 1);
		p.heightScale = Math.min(p.widthScale, p.heightScale, 1);
	},

	updateCursorObject: function () {
		var source;

		if (this.currentObjectType.bitmap == 'Objects.TeleIn') {
			source = this.currentPortal === 1 ? 'Objects.TeleIn' : 'Objects.TeleOut';
		}
		else {
			source = this.currentObjectType.bitmap;
		}

		this.cursor.setSource(source);
		this.cursor.offset.set(this.currentObjectType.offsetX, this.currentObjectType.offsetY);
	},

	placeObject: function (objectType, x, y) {
		var type, instance;

		type = {}
		type.importProperties(objectType);
		if (!type.vars) {
			type.vars = {x: x, y: y, offset: {x: type.offsetX, y: type.offsetY}};
		}

		if (type.class !== 'Ball') {
			instance = new window[type.class](type);

			if (/^Objects\.Tele(In|Out)$/.test(type.bitmap)) {
				if (type.vars.name) {
					if (type.vars.name == 'teleIn') {
						this.portals[0] = instance;
					}
					else {
						this.portals[1] = instance;
					}
				}
				else {
					if (this.currentPortal == 1) {
						type.vars.name = 'teleIn';
						type.vars.destination = 'teleOut';

						if (this.portals[0]) {
							this.removeObject(this.portals[0]);
						}

						this.portals[0] = instance;
					}
					else {
						type.vars.name = 'teleOut';
						type.bitmap = 'Objects.TeleOut';
						instance.setSource('Objects.TeleOut');

						if (this.portals[1]) {
							this.removeObject(this.portals[1]);
						}

						this.portals[1] = instance;
					}
				}

				this.currentPortal = this.currentPortal === 1 ? 2 : 1;
				this.updateObjectPreview();
				this.updateCursorObject();
			}
		}
		else {
			if (this.ball) {
				this.ball.x = type.vars.x;
				this.ball.y = type.vars.y;
			}
			else {
				instance = new window[type.class](type);
				this.ball = instance;
				this.ball.direction = 0;
				this.ball.size = 1;
			}
		}

		if (instance !== undefined) {
			main.depths[type.depth || 0].addChildren(instance);

			// Add instance to placed objects array
			this.placedObjects.push(instance);
		}
	},

	selectClosestObject: function () {
		var oldObject, i, object;

		oldObject = this.selectedObject;
		oldObject.opacity = 1;
		this.selectedObject = false;

		for (i = this.placedObjects.length - 1; i >= 0; i --) {
			object = this.placedObjects[i];

			if (Math.abs(object.x - this.cursor.x) < 20 && Math.abs(object.y - this.cursor.y) < 20) {
				this.selectedObject = object;

				if (this.selectedObject !== oldObject) {
					this.selectedObjectStartTime = engine.gameTime;
				}
				break;
			}
		}
	},

	removeObject: function (object) {
		var i;

		this.placedObjects.splice(this.placedObjects.indexOf(object), 1);

		if (object === this.ball) {
			this.ball = false;
		}

		if (/^Objects\.Tele(In|Out)$/.test(object.source)) {
			if (object.source === 'Objects.TeleIn') {
				this.portals[0] = false;
			}
			else {
				this.portals[1] = false;
			}

			this.currentPortal = this.portals[0] ? 2 : 1;
			this.updateObjectPreview();
			this.updateCursorObject();
		}

		// Remove poles and ropes
		object.rope && engine.purge(object.rope);
		object.pole && engine.purge(object.pole);

		engine.purge(object);
		this.selectClosestObject();

		// Make sure that all grass objects are "updated"
		for (i = 0; i < this.placedObjects.length; i++) {
			object = this.placedObjects[i];

			if (/(Grass|GrassUpHill|GrassDownHill)$/.test(object.source)) {
				object.createBorders();
			}
		}

		this.onObjectsChanged();
	},

	clearLevel: function () {
		var i;

		i = this.placedObjects.length;
		while (i --) {
			this.removeObject(this.placedObjects[i]);
		}
	},

	onObjectsChanged: function () {
		this.btnSaveLevel.disable();
		this.btnSaveLevel.opacity = 0.4;

		if (!this.ball || (!!this.portals[0] + !!this.portals[1]) % 2 !== 0) {
			this.btnTestLevel.disable();
			this.btnTestLevel.opacity = 0.4;
		}
		else {
			this.btnTestLevel.enable();
			this.btnTestLevel.opacity = 1;
		}

		if (!this.placedObjects.length) {
			this.btnClearLevel.disable();
			this.btnClearLevel.opacity = 0.4;
		}
		else {
			this.btnClearLevel.enable();
			this.btnClearLevel.opacity = 1;
		}

		if (this.level) {
			this.saveLevelToStorage();
		}
	},

	openLevel: function (level) {
		this.clearLevel();

		if (typeof level === 'string') {
			level = LevelParser.parseLevel(level);
		}

		this.level = level;

		level.objects.forEach(function (o) {
			main.levelEditor.placeObject(o, o.vars.x, o.vars.y);
		});

		this.btnPowerSelector.power = this.level.power ? this.level.power : 0;
		this.btnPowerSelector.powerLine.b.x = this.level.power / 200 * 28;

		this.onObjectsChanged();
		this.onSettingsChanged();
	},

	serializeLevel: function () {
		var obj, str;

		this.level.objects = this.createObjectsArray();
		delete this.level.isTesting;
		delete this.level.isCompletable;

		str = JSON.stringify(this.level, function(key, value){
			return (typeof value === 'function' ) ? value.toString() : value;
		}, '\t');

		str = str.replace(/"function/g, "function");
		str = str.replace(/\}",/g, '},');
		str = str.replace(/\\n/g, "\n");
		str = str.replace(/\\t/g, "\t");
		str = str.replace(/\\\\/g, '');
		str = str.replace(/\\"/g, '"');

		this.level.isTesting = true;
		this.level.isCompletable = true;

		return str;
	},

	downloadLevel: function (name) {
		var dataString, a;

		name = name || 'level.js';

		dataString = 'data:data/html,' + encodeURIComponent(this.serializeLevel());

		a = document.createElement('a');
		a.href = dataString;
		a.setAttribute('download', name);
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a, document.body);
	},

	loadLevelFromStorage: function () {
		this.openLevel(LevelParser.parseJs(localStorage.pullballEditorLevel));
	},

	saveLevelToStorage: function () {
		localStorage.pullballEditorLevel = this.serializeLevel();
	},

	// "TEST DRIVE"-RELATED FUNCTIONS
	createObjectsArray: function () {
		var objects, object, i;

		objects = [];

		for (i = 0; i < this.placedObjects.length; i ++) {
			object = this.placedObjects[i];
			object.instructions.vars.x = object.x;
			object.instructions.vars.y = object.y;
			objects.push(object.instructions);
		}

		return objects;
	},

	testLevel: function () {
		var obj;

		this.level.objects = this.createObjectsArray();
		this.level.isTesting = true;
		main.paused = false;

		obj = this;
		main.levelController.openLevel(this.level, undefined, function () {
			obj.remove();
		});
	},

	// LEVEL SETTINGS
	increaseLevelWidth: function () {
		this.level.width = Math.min(4000, this.level.width + 160);
		this.onSettingsChanged();
	},

	decreaseLevelWidth: function () {
		this.level.width = Math.max(800, this.level.width - 160);
		this.onSettingsChanged();
	},

	toggleWalls: function () {
		// If walls are enabled, disable them
		if (this.level.wallRight) {
			this.level.wallLeft = false;
			this.level.wallRight = false;
		}
		// If walls are off enable them
		else {
			this.level.wallLeft = true;
			this.level.wallRight = true;
		}

		this.onSettingsChanged();
	},

	toggleCeiling: function () {
		this.level.ceiling = !this.level.ceiling;

		this.onSettingsChanged();
	},

	onSettingsChanged: function () {
		// Set walls
		main.levelController.wallLeft.animate({opacity: this.level.wallLeft * 1}, {duration: 200});
		main.levelController.wallRight.animate({opacity: this.level.wallRight * 1}, {duration: 200});

		// Set ceiling
		main.levelController.ceiling.animate({opacity: this.level.ceiling * 1}, {duration: 200});

		// Set level width (remember to move the view if necessary)
		if (this.level.width !== main.levelController.currentLevel.width) {
			main.levelController.wallRight.animate({x: this.level.width}, {duration: 200});
			main.levelController.currentLevel.width = this.level.width;

			if (this.targetPos > this.level.width - 800) {
				this.targetPos = this.level.width - 800;
				this.moveToPosition();
			}
		}

		this.saveLevelToStorage();
	},

	// VIEW MOVEMENT
	moveLeft: function () {
		this.targetPos = Math.max(0, this.targetPos - 160);
		this.moveToPosition();
	},

	moveRight: function () {
		this.targetPos = Math.min(this.level.width - 800, this.targetPos + 160);
		this.moveToPosition();
	},
	moveToPosition: function () {
		var obj;

		this.moving = true;

		obj = this;
		engine.cameras[0].captureRegion.animate({x: this.targetPos}, {duration: 200, onStep: function () {
			main.updateParallax();
			obj.updateGrid();
		}, callback: function () {
			obj.moving = false;
		}});
	},
	updateGrid: function () {
		var camX;

		camX = engine.cameras[0].captureRegion.x;

		this.gridY.forEach(function (l) {
			l.a.x = camX;
			l.b.x = camX + 800;
		});

		this.gridX.forEach(function (l) {
			if (l.x - camX > 800) {
				l.x -= 800;
			}
			else if (l.x - camX < 0) {
				l.x += 800;
			}
		});
	},

	remove: function () {
		gridView.removeAllChildren();
		engine.purge(this.topMenu, this.cursor, this.btnHide);

		engine.purge(this);

		document.removeEventListener('mousewheel', this.doObjectSelection);
	},
});
