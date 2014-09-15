Checkbox = function (boxSource, checkerSource, x, y, onClick, checked, hideBoxWhenChecked) {
	View.Container.call(this);

	this.box = new Sprite(boxSource, x, y);
	this.checker = new Sprite(checkerSource, x, y, 0, {opacity: 0});
	this.onClick = onClick !== undefined ? onClick : function () {};
	this.addChildren(this.box, this.checker);
	this.hideBoxWhenChecked = hideBoxWhenChecked;

	checked = checked !== undefined ? checked : false;

	this.setChecked(checked, 0);

	engine.loops.onRunning.attachFunction(this, this.checkMouse);
};

Checkbox.prototype = Object.create(View.Container.prototype);

Checkbox.prototype.import({
	setChecked: function (checked, animDuration) {
		animDuration = animDuration !== undefined ? animDuration : 200;

		if (checked === undefined) {
			this.checked = !this.checked;
		}
		else if (this.checked === checked) {
			return;
		}
		else {
			this.checked = checked;
		}
		if (this.hideBoxWhenChecked) {
			this.box.animate({opacity: (this.checked ? 0 : 1)}, {duration: animDuration});
		}
		this.checker.animate({opacity: (this.checked ? 1 : 0)}, {duration: animDuration});
	},

	checkMouse: function () {
		if (pointer.shapeIsReleased(MOUSE_TOUCH_ANY, new Rectangle(this.box.x - this.box.offset.x, this.box.y - this.box.offset.y, this.box.width, this.box.height))) {
			if (this.onClick(!this.checked) !== false) {
				this.setChecked();
			}
		}
	},
});
