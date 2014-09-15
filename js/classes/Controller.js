Controller = function (type) {
	Obstacle.call(this, type);
	this.canControl = type.canControl;
	this.doControl = type.doControl;
	this.controlledObjects = [];

	engine.currentRoom.loops.onRunning.attachFunction(this, this.checkCollisions);

	switch (type.bitmap) {
	case 'Objects.TeleIn':
	case 'Objects.TeleOut':
		engine.currentRoom.loops.onRunning.schedule(this, this.fadeRotate, Math.random() * 2000);
		break;
	case 'Powerups.Power':
		engine.currentRoom.loops.onRunning.attachFunction(this, this.hover);
		if (!this.power) {
			this.power = 120;
			this.powerMax = 120;
		}
		this.startY = this.y;
		this.startPeriod = Math.random() * Math.PI * 2;
		this.hover();
		break;
	}
};

Controller.prototype = Object.create(Obstacle.prototype);

Controller.prototype.import({
	assign: function (object) {
		if (this.canControl(object)) {
			this.controlledObjects.push(object);
		}
	},

	checkCollisions: function () {
		var col, i;

		if (col = this.collidesWith(this.controlledObjects, false, true)) {
			for (i = 0; i < col.objects.length; i ++) {
				this.doControl(col.objects[i]);
			}
		}
	},

	fadeRotate: function () {
		this.animate({widthScale: 1.1, opacity: 0.9}, {duration: 500, callback: function () {
			this.animate({widthScale: 1, opacity: 1}, {duration: 500});
		}});
		this.animate({direction: this.direction + Math.PI / 2}, {duration: 2000, easing: 'linear', callback: function () {
			this.fadeRotate();
		}});
	},

	hover: function () {
		this.y = this.startY + 2.5 * Math.sin((this.startPeriod - engine.currentRoom.loops.onRunning.time) / 2000 * Math.PI * 2);
	},
});
