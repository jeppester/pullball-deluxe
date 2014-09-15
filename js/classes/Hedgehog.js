Hedgehog = function (type) {
	Obstacle.call(this, type);
	this.animationSpeed = 0;

	// If climbing hedgehog, create rope
	if (this.source ==='Objects.HedgehogHanging' && this.offset.y === 34) {
		this.rope = new View.Line(new Math.Vector(this.x, 0), new Math.Vector(this.x, this.y), "#8e4b2a", 1.5); //new Sprite('Objects.HedgehogRope', this.x, 0, 0, {offset: new Vector(4, 0)});
		objectsView.children[type.depth].addChildren(this.rope);

		//this.rope.targetOpacity = 0.6;
		//this.rope.opacity = 0;

		this.adjustRopeLength();
	}
	// If swinging hedgehog, create different rope
	else if (this.source ==='Objects.HedgehogHanging' && this.offset.y === -105) {
		this.rope = new View.Line(new Math.Vector(this.x, this.y), new Math.Vector(this.x, this.y), "#8e4b2a", 1.5); //Sprite('Objects.HedgehogRope', this.x, this.y, 0, {offset: new Vector(2, 0)});

		this.pole = new View.Sprite('Objects.HedgehogRopePole', this.x, this.y);

		objectsView.children[type.depth].addChildren(this.rope, this.pole);
		this.swingTime = 2000;
		this.swingWidth = Math.PI / 4;

		// set hedgehog and rope to initial position
		this.targetDir = -this.swingWidth;
		this.rope.b = this.rope.a.copy().add(new Math.Vector(0, 115).rotate(this.targetDir));
		this.direction = -this.swingWidth;

		//this.rope.targetOpacity = 0.6;
		//this.rope.opacity = 0;
		/*this.pole.importProperties({
			direction: -Math.PI,
			opacity: 0,
			widthScale: 0
		});*/
	}
};

Hedgehog.prototype = Object.create(Obstacle.prototype);

Hedgehog.prototype.import({
	onLevelStart: function () {
		var i;

		engine.currentRoom.loops.onRunning.attachFunction(this, this.doMovement);

		if (this.source ==='Objects.HedgehogHanging' && this.offset.y === 34) {
			engine.currentRoom.loops.onRunning.attachFunction(this, this.adjustRopeLength);
		}
		if (this.source ==='Objects.HedgehogHanging' && this.offset.y === -105) {
			this.startTime = engine.currentRoom.loops.onRunning.time;
			engine.currentRoom.loops.onRunning.attachFunction(this, this.swing);
		}

		this.animationSpeed = 30;
		this.speed = new Math.Vector(this.instructions.initSpeedX, this.instructions.initSpeedY);

		// Assign object to all controllers
		for (i = 0; i < main.levelController.controllers.length; i++) {
			main.levelController.controllers[i].assign(this);
		}
	},

	doMovement: function () {
		var controller;

		this.x += engine.convertSpeed(this.speed.x);
		this.y += engine.convertSpeed(this.speed.y);
	},

	adjustRopeLength: function () {
		this.rope.b.y = this.y;
	},

	swing: function () {
		var curDir;

		// Calculate current direction
		curDir = Math.sin((engine.currentRoom.loops.onRunning.time - this.startTime) / this.swingTime * Math.PI * 2 - Math.PI / 2) * this.swingWidth;

		// Set current direction
		this.direction = curDir;
		this.rope.b = this.rope.a.copy().add(new Math.Vector(0, 115).rotate(this.direction));
	},
});
