Obstacle = function (type) {
	if (!type.bitmap) {
		this.hidden = true;
	}

	View.Collidable.call(this, type.bitmap || type.mask, undefined, undefined, 0, {mask: loader.getMask(type.mask, this.getTheme())});

	this.offset = type.offset ? type.offset : this.offset;
	if (type.vars) {
		this.importProperties(type.vars, true);
	}
	this.instructions = type;

	// do specific stuff for specific obstacles
	switch (type.bitmap) {
	case 'Objects.Grass':
		this.borderLeftOffset = 0;
		this.borderRightOffset = 0;
		this.borders = {};
		this.createBorders();
		break;
	case 'Objects.GrassUpHill':
		this.borderLeftOffset = 0;
		this.borderRightOffset = -64;
		this.borders = {};
		this.createBorders();
		break;
	case 'Objects.GrassDownHill':
		this.borderLeftOffset = -64;
		this.borderRightOffset = 0;
		this.borders = {};
		this.createBorders();
		break;
	}
};

Obstacle.prototype = Object.create(View.Collidable.prototype);

Obstacle.prototype.import({
	createBorders: function () {
		var i, children, child;

		// Remove existing borders (if there are any)
		this.borders.left && engine.purge(this.borders.left);
		this.borders.right && engine.purge(this.borders.right);

		this.borders = {left:true, right:true};

		children = main.depths[this.instructions.depth].children;
		for (i = 0; i < children.length; i ++) {
			child = children[i];

			if (child !== this && /(Grass|GrassUpHill|GrassDownHill)$/.test(child.source) && Math.abs(this.x - child.x) === 64) {
				// Check left side
				if (this.x - child.x > 0 && child.y + child.borderRightOffset === this.y + this.borderLeftOffset) {
					// Remove current border of other grass element
					engine.purge(child.borders.right);
					child.borders.right = false;
					this.borders.left = false;
				}

				// Check right side
				if (this.x - child.x < 0 && child.y + child.borderLeftOffset === this.y + this.borderRightOffset) {
					// Remove current border of other grass element
					engine.purge(child.borders.left);
					child.borders.left = false;
					this.borders.right = false;
				}
			}
		}

		// Create the necessary borders
		if (this.borders.left) {
			this.borders.left = new View.Sprite('Objects.GrassEndLeft', -32, this.borderLeftOffset);
			this.borders.left.importProperties({
				offset: new Math.Vector(6, 7),
				//direction: -Math.PI,
				//opacity: 0,
				//widthScale: 0
			});
			this.addChildren(this.borders.left);
		}
		if (this.borders.right) {
			this.borders.right = new View.Sprite('Objects.GrassEndRight', 32, this.borderRightOffset);
			this.borders.right.importProperties({
				offset: new Math.Vector(0, 7),
				//direction: -Math.PI,
				//opacity: 0,
				//widthScale: 0
			});
			this.addChildren(this.borders.right);
		}
	}
});
