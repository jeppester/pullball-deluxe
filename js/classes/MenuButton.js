new Class('MenuButton', [View.Collidable], {
	MenuButton: function (type) {
		this.Collidable(type.bitmap || type.mask, undefined, undefined, 0, {mask: loader.getMask(type.mask || type.bitmap, this.getTheme())});

		this.animationDuration = 1;
		if (type.vars) {
			this.importProperties(type.vars, true);
		}
		this.onClick = type.onClick;
		this.loop = type.loop || engine.currentRoom.loops.onRunning;

		if (this.onClick) {
			this.clickBox = new Math.Rectangle(- this.offset.x, -this.offset.y, this.width, this.height);
			this.enable();
		}

		this.instructions = type;
		this.down = false;
		this.startOffset = this.offset.y;

		this.onLoaded && this.onLoaded();
	},
	
	checkClick: function () {
		var box;

		box = this.clickBox.copy().add(this.getRoomPosition());

		if (pointer.shapeIsPressed(MOUSE_TOUCH_ANY, box)) {
			this.down = true;

			this.animate({opacity: 0.8}, {duration: this.animationDuration});
			this.offset.animate({y: this.startOffset - 2}, {duration: this.animationDuration});
		}

		if (pointer.shapeIsReleased(MOUSE_TOUCH_ANY, box)) {
			if (this.down) {
				this.down = false;
				this.animate({opacity: 1}, {duration: this.animationDuration});
				this.offset.animate({y: this.startOffset}, {duration: this.animationDuration});
				this.onClick();
			}
		} else if (pointer.isReleased(MOUSE_TOUCH_ANY)) {
			this.down = false;
			this.animate({opacity: 1}, {duration: this.animationDuration});
			this.offset.animate({y: this.startOffset}, {duration: this.animationDuration});
		}
	},

	disable: function () {
		this.loop.detachFunction(this, this.checkClick);
	},

	enable: function () {
		this.loop.detachFunction(this, this.checkClick);
		this.loop.attachFunction(this, this.checkClick);
	}
});