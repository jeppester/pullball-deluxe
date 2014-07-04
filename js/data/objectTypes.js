objectTypes = {
	// Obstacles are basically objects with a sprite, an offset, a depth and a group.
	// An obstacle's group determines what happens when the ball collides with it
	// Possible groups are:
	// - obstacles: ball bounces off
	// - deadlies: ball dies, level is restarted
	// - destination: level is completed, next level is started
	Ball: {
		class: 'Ball',
		depth: 0,
		bitmap: 'Objects.Ball',
		offsetX: 26,
		offsetY: 26,
		offsetLvlX: 26,
		offsetLvlY: 26,
	},

	Grass: {
		class: 'Obstacle',
		bitmap: 'Objects.Grass',
		mask: 'Masks.Grass',
		group: 'obstacles',
		depth: 3,
		offsetX: 32,
		offsetY: 7,
		offsetLvlX: 32,
		offsetLvlY: 7
	},

	GrassUpHill: {
		class: 'Obstacle',
		bitmap: 'Objects.GrassUpHill',
		mask: 'Masks.GrassUpHill',
		group: 'obstacles',
		depth: 3,
		offsetX: 32,
		offsetY: 78,
		offsetLvlX: 32,
		offsetLvlY: 78
	},

	GrassDownHill: {
		class: 'Obstacle',
		bitmap: 'Objects.GrassDownHill',
		mask: 'Masks.GrassDownHill',
		group: 'obstacles',
		depth: 3,
		offsetX: 32,
		offsetY: 78,
		offsetLvlX: 32,
		offsetLvlY: 78
	},

	Lian: {
		class: 'Obstacle',
		bitmap: 'Objects.Lian',
		mask: 'Objects.Lian',
		group: 'obstacles',
		depth: 1,
		offsetX: 40,
		offsetY: 108,
		offsetLvlX: 40,
		offsetLvlY: 108
	},

	Bush: {
		class: 'Obstacle',
		bitmap: 'Objects.Bush',
		mask: 'Objects.Bush',
		group: 'obstacles',
		depth: 2,
		offsetX: 63,
		offsetY: 57,
		offsetLvlX: 63,
		offsetLvlY: 57
	},

	Spikes: {
		class: 'Obstacle',
		bitmap: 'Objects.Spikes',
		mask: 'Objects.Spikes',
		group: 'deadlies',
		depth: 4,
		offsetX: 20,
		offsetY: 20,
		offsetLvlX: 20,
		offsetLvlY: 20
	},

	Destination: {
		class: 'Obstacle',
		bitmap: 'Objects.Destination',
		mask: 'Objects.Destination',
		group: 'destinations',
		depth: 1,
		offsetX: 34,
		offsetY: 42,
		offsetLvlX: 34,
		offsetLvlY: 42
	},

	// Controllers are objects with special collision handling
	// Each controller has a canControl-function which returns true if the controller can handle a specific object
	// If a controllable object that passes the canHandle-test collides with the controller, the doControl-function is called with the object as argument
	Trampoline: {
		class: 'Controller',
		bitmap: 'Objects.Trampoline',
		mask: 'Objects.Trampoline',
		offsetX: 47,
		offsetY: 12,
		offsetLvlX: 47,
		offsetLvlY: 12,
		group: 'controllers',
		depth: 1,
		canControl: function (object) {
			return object.implements(Ball);
		},
		doControl: function (object) {
			var peakTime, maxSpeed;

			// Bounce the ball
			if (object.speed.y > 0 && Math.abs(object.x - this.x) < 32) {
				object.speed.y *= -1.1;

				// calculate max speed
				maxSpeed = -Math.sqrt(2 * main.gravity * (object.y - 30));
				//console.log(maxSpeed);
				object.speed.y = Math.max(maxSpeed, object.speed.y);
				//console.log(object.speed.y)
			}
		}
	},
	TurnHV: {
		class: 'Controller',
		bitmap: 'Objects.Controller',
		mask: 'Controllers.Mask',
		opacity: 0,
		offsetX: 8,
		offsetY: 8,
		offsetLvlX: 8,
		offsetLvlY: 8,
		group: 'controllers',
		canControl: function (object) {
			return object.implements(Hedgehog);
		},
		doControl: function (object) {
			// Only turn if necessary
			if ((this.x - object.x) * object.speed.x < 0) {
				return;
			}

			var oldSpeed, oldAnimationSpeed;

			object.speed.x = -object.speed.x;
			object.speed.y = -object.speed.y;
			object.y += engine.convertSpeed(object.speed.y);
			oldAnimationSpeed = this.animationSpeed;
			object.animationSpeed = 0;


			if (object.source === 'Objects.Hedgehog') {
				engine.currentRoom.loops.onRunning.detachFunction(object, object.doMovement);

				object.animate({widthScale: -object.widthScale}, {duration: 400, callback: function () {
					this.animationSpeed = oldAnimationSpeed;
					engine.currentRoom.loops.onRunning.attachFunction(this, this.doMovement);
				}});
			}
			
		}
	},
	Teleport: {
		class: 'Controller',
		bitmap: 'Objects.TeleIn',
		mask: 'Masks.Tele',
		offsetX: 32,
		offsetY: 32,
		offsetLvlX: 32,
		offsetLvlY: 32,
		group: 'controllers',
		depth: 0,
		canControl: function (object) {
			return object.implements(Ball);
		},
		doControl: function (object) {
			var i, dist, tele;

			if (object.dead) {
				return;
			}

			// Check if the portal has a destination
			if (this.destination) {
				// Find the distance from the ball to the teleport
				dist = this.getDistanceTo(object);
				
				// Fade out the ball based on the distance
				object.stopAnimations();
				object.opacity = Math.max(0, (dist - 15) / 30);

				// If the distance is below 15 pixels, teleport the ball to the destination
				if (dist < 15) {
					// Find the destination based on the "this.destination"-var
					for (i = 0; i < main.levelController.controllers.length; i ++) {
						tele = main.levelController.controllers[i];
						if (tele.name === this.destination) {
							// Move the ball and fade it in
							object.moveTo(tele.x, tele.y);
							break;
						}
					}
				}
				
				object.animate({opacity: 1}, {duration: 400});
			}
		}
	},

	Power: {
		class: 'Controller',
		bitmap: 'Powerups.Power',
		mask: 'Masks.Power',
		offsetX: 22,
		offsetY: 22,
		offsetLvlX: 22,
		offsetLvlY: 22,
		group: 'controllers',
		depth: 0,
		canControl: function (object) {
			return object.implements(Ball);
		},
		doControl: function (object) {
			if (object.power < object.powerMax && this.power > 0) {
				this.power -= engine.convertSpeed(60);
				object.power = Math.min(object.powerMax, object.power + engine.convertSpeed(60));
				object.updatePower();

				if (this.power < 0) {
					this.animate({heightScale: 4, opacity: 0}, {duration: 200, callback: function () {
						engine.purge(this);
					}});
				}
				else {
					this.direction = (1 - this.power / this.powerMax) * Math.PI / 2;
				}
			}
		}
	},

	Hedgehog: {
		class: 'Hedgehog',
		bitmap: 'Objects.Hedgehog',
		mask: 'Objects.Hedgehog',
		group: 'deadlies',
		depth: 0,
		offsetX: 38,
		offsetY: 27,
		offsetLvlX: 38,
		offsetLvlY: 27,
		initSpeedX: 100,
		initSpeedY: 0
	},

	HedgehogClimbing: {
		class: 'Hedgehog',
		bitmap: 'Objects.HedgehogHanging',
		mask: 'Objects.HedgehogHanging',
		group: 'deadlies',
		depth: 0,
		offsetX: 21,
		offsetY: 34,
		offsetLvlX: 21,
		offsetLvlY: 34,
		initSpeedX: 0,
		initSpeedY: 100
	},

	HedgehogSwinging: {
		class: 'Hedgehog',
		bitmap: 'Objects.HedgehogHanging',
		mask: 'Objects.HedgehogHanging',
		group: 'deadlies',
		depth: 0,
		offsetX: 20,
		offsetY: -105,
		offsetLvlX: 20,
		offsetLvlY: -105,
		initSpeedX: 0,
		initSpeedY: 0
	},
};