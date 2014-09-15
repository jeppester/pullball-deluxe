Ball = function (type) {
	View.Collidable.call(this, 'Objects.BallBang', type.vars.x, type.vars.y);
	this.animationSpeed = 0;
	this.speed = new Math.Vector(0, 0);
	this.size = 0;
	this.power = 200;
	this.powerMax = 200;
	this.powerDrain = 60;
	this.deathTimerStarted = false;
	this.instructions = type;
	this.dead = false;
	this.collisionResolution = 4;
};

Ball.prototype = Object.create(View.Collidable.prototype);

Ball.prototype.import({
	spawn: function (callback) {
		this.opacity = 1;
		this.size = 0;
		this.direction = -Math.PI;
		this.imageNumber = 0;
		this.animationSpeed = 0;

		this.animate({size: 1, direction: 0}, {duration: 400, callback: function () {
			var i;

			// Assign object to all controllers
			for (i = 0; i < main.levelController.controllers.length; i++) {
				main.levelController.controllers[i].assign(this);
			}

			engine.currentRoom.loops.onRunning.attachFunction(this, this.doMovement);
			callback();
		}});
	},

	startDeathTimer: function () {
		if (this.deathTimerStarted) {
			return;
		}
		this.deathTimerStarted = true;

		// Create fading numbers
		this.deathTimerText = new View.TextBlock('3', 400, 200, 100, {offset: new Math.Vector(50, 70), font: 'normal 100px sans-serif', color: '#F33', alignment: 'center', opacity: 0});
		this.deathTimerText.animate({opacity: 1},{duration: 200});

		engine.currentRoom.loops.onRunning.schedule(this, function () {
			if (this.deathTimerStarted) {
				this.deathTimerText.string = 2;
			}
		}, 1200);
		engine.currentRoom.loops.onRunning.schedule(this, function () {
			if (this.deathTimerStarted) {
				this.deathTimerText.string = 1;
			}
		}, 2200);
		engine.currentRoom.loops.onRunning.schedule(this, function () {
			if (this.deathTimerStarted) {
				this.die();
				this.deathTimerText.string = 0;
				this.deathTimerText.animate({opacity: 0}, {duration: 200, callback: function () {
					engine.purge(this);
				}});
			}
		}, 3200);

		tutorialView.addChildren(this.deathTimerText);
	},

	stopDeathTimer: function () {
		this.deathTimerStarted = false;
		engine.currentRoom.loops.onRunning.unscheduleByCaller(this);
		this.deathTimerText.animate({opacity: 0}, {duration: 200, callback: function () {
			engine.purge(this);
		}});
	},

	die: function () {
		this.stopAnimations();
		this.dead = true;
		this.animationSpeed = 30;
		this.animationLoops = false;
		this.animate({direction: Math.PI / 2}, {duration: 230, easing: 'quadOut', callback: function () {
			this.opacity = 0;
			main.levelController.resetLevel();
		}});

		engine.currentRoom.loops.onRunning.detachFunction(this, this.doMovement);
	},

	win: function () {
		main.levelController.timeSpend = engine.currentRoom.loops.onRunning.time - main.levelController.startTime;
		this.animate({size: 0, direction: Math.PI}, {duration: 400, easing: 'quadIn', callback: function () {
			main.levelController.onLevelComplete();
		}});

		engine.currentRoom.loops.onRunning.detachFunction(this, this.doMovement);
	},

	updatePower: function () {
		// Set power bar
		main.powerBar.b.x = main.powerBar.a.x - (this.power / this.powerMax * 297);
		main.powerBarSilver.b.x = main.powerBar.a.x - (Math.max(0, Math.min(main.levelController.currentLevel.silverPower - main.levelController.powerSpend, this.power)) / this.powerMax * 297);
		main.powerBarGold.b.x = main.powerBar.a.x - (Math.max(0, Math.min(main.levelController.currentLevel.goldPower - main.levelController.powerSpend, this.power)) / this.powerMax * 297);
	},

	updateTimer: function () {
		var timeSpend;

		timeSpend = engine.currentRoom.loops.onRunning.time - main.levelController.startTime;
		main.timerBarSilver.b.x = main.timerBarSilver.a.x + (Math.max(0, main.levelController.currentLevel.silverTime - timeSpend) / main.levelController.currentLevel.silverTime * 297);
		main.timerBarGold.b.x = main.timerBarSilver.a.x + (Math.max(0, main.levelController.currentLevel.goldTime - timeSpend) / main.levelController.currentLevel.silverTime * 297);
	},

	doMovement: function () {
		var level, p, col, pos, collided, newDir, tries, oldPos, view, oldX, i;

		level = main.levelController.currentLevel;
		oldPos = new Math.Vector(this.x, this.y);

		// Update timers
		if (main.levelController.currentLevel.goldTime) {
			this.updateTimer();
		}

		// Add velocity if mouse is down and there is power available
		p = pointer.isDown(MOUSE_TOUCH_ANY);
		if (p && this.power > 0) {
			this.speed.add(new Math.Vector().setFromDirection(new Math.Vector(this.x, this.y).getDirectionTo(p[0]), engine.convertSpeed(main.ballAccelleration)));

			// Drain power
			if (level.power !== false) {
				this.power = Math.max(0, Math.min(this.powerMax, this.power - engine.convertSpeed(this.powerDrain)));
				this.updatePower();
			}
			main.levelController.powerSpend += engine.convertSpeed(this.powerDrain);

			if (main.indicator === undefined || main.indicator.inactive) {
				// Create new indicator
				main.indicator = new View.Circle(0, 0, 60, '#FFF', '#FFF', 0);
				main.indicator.opacity = 0;
				overlayView.children[0].addChildren(main.indicator);
			}

			// Fade in the indicator
			main.indicator.x = p[0].x - main.indicator.parent.x;
			main.indicator.y = p[0].y - main.indicator.parent.y;
			main.indicator.radius = Math.max(40, main.indicator.radius - engine.convertSpeed(100));
			main.indicator.opacity = Math.min(0.8, main.indicator.opacity + engine.convertSpeed(4));
		}
		else if (main.indicator && !main.indicator.inactive) {
			main.indicator.inactive = true;
			main.indicator.animate({radius: 0, opacity: 0}, {duration: 500, callback: function () {
				engine.purge(this);
			}});
		}

		// Try moving and test if there is a collision
		tries = 0;
		this.x += engine.convertSpeed(this.speed.x);
		this.y += engine.convertSpeed(this.speed.y);

		// Check for collisions with goal signs
		if (this.collidesWith(main.levelController.destinations)) {
			this.win();
			return;
		}

		// Check for collisions with deadly objects
		if (this.collidesWith(main.levelController.deadlies)) {
			this.die();
			return;
		}

		while (col = this.collidesWith(main.levelController.obstacles, true, false)) {
			// Break if there is no collision, or if too many tries have been used (to avoid infinite loop)
			if (col === false || tries > 10) {
				break;
			}
			tries ++;
			pos = col.combinedPosition;

			// Round the position result to make up for the low collision precision
			pos.direction = Math.round(pos.getDirection() / Math.PI * 8) * Math.PI / 8;

			// If a collision has been detected, calculate the speed after the bounce
			if (this.speed.getLength() !== 0) {
				// Find the angle between the collision and the ball
				newDir = pos.direction - ((this.speed.getDirection() - Math.PI) - pos.direction);

				// Set new speed
				this.speed.setFromDirection(newDir, this.speed.getLength() * 0.7);
			}

			// If speed is too slow, just set it to nothing
			if (Math.abs(this.speed.y) < 30) {
				this.speed.y = 0;
			}
			if (Math.abs(this.speed.x) < 6) {
				this.speed.x = 0;
			}

			// If speed is zero, and there is no power left, start death timer
			if (this.power === 0 && this.speed.x === 0 && Math.abs(this.speed.y) < 10) {
				// Start death timer
				this.startDeathTimer();
			}
			else if (this.deathTimerStarted) {
				this.stopDeathTimer();
			}

			// Move the ball back to the old position, and try moving it according to the new speed
			this.moveTo(oldPos.x, oldPos.y);
			this.x += engine.convertSpeed(this.speed.x);
			this.y += engine.convertSpeed(this.speed.y);
		}

		// Check for collision with ceiling
		if (level.ceiling && this.y < 16) {
			this.speed.y = -this.speed.y * 0.8;
			this.y = 16;
		}

		// Check for collisions with walls
		if (level.wallLeft && this.x < 16) {
			this.speed.x = -this.speed.x * 0.8;
			this.x = 16;
		} else if (level.wallRight && this.x > level.width - 16) {
			this.speed.x = -this.speed.x * 0.8;
			this.x = level.width - 16;
		}

		// Check if the ball has fallen out of the room
		if (this.y > 470) {
			this.die();
		}

		// Add gravity
		this.speed.y += engine.convertSpeed(main.gravity);

		// Move the screen to the ball position
		view = engine.cameras[0].captureRegion;
		oldX = view.x;
		view.x = Math.min(level.width - 800, Math.max(0, view.x + (this.x - 400 - view.x) / 10));

		// Move the mouse pointer according to the movement of the view
		if (p) {
			p[0].x += view.x - oldX;
		}

		// Move parallax backgrounds and wall
		main.updateParallax();
	},
});
