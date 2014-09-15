{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 960,
	"power": false,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 5000,
	"silverTime": 8000,
	"objects": [
		{
			"class": "Ball",
			"depth": 0,
			"bitmap": "Objects.Ball",
			"offsetX": 26,
			"offsetY": 26,
			"offsetLvlX": 26,
			"offsetLvlY": 26,
			"vars": {
				"x": 104,
				"y": 152,
				"offset": {
					"x": 26,
					"y": 26
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Bush",
			"mask": "Objects.Bush",
			"group": "obstacles",
			"depth": 2,
			"offsetX": 63,
			"offsetY": 57,
			"offsetLvlX": 63,
			"offsetLvlY": 57,
			"vars": {
				"x": 184,
				"y": 328,
				"offset": {
					"x": 63,
					"y": 57
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Bush",
			"mask": "Objects.Bush",
			"group": "obstacles",
			"depth": 2,
			"offsetX": 63,
			"offsetY": 57,
			"offsetLvlX": 63,
			"offsetLvlY": 57,
			"vars": {
				"x": 8,
				"y": 328,
				"offset": {
					"x": 63,
					"y": 57
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 104,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 104,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 136,
				"y": 104,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 136,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 168,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 200,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 232,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 264,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 296,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 328,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 360,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 136,
				"y": 136,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 136,
				"y": 168,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 136,
				"y": 200,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 72,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 40,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 72,
				"y": 8,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 248,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 216,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 184,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 152,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 120,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 88,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 56,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 24,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 72,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 104,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 40,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 8,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 136,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 168,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 200,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 232,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 8,
				"y": 264,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": 280,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 40,
				"y": -8,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.GrassUpHill",
			"mask": "Masks.GrassUpHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 168,
				"y": 200,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.GrassUpHill",
			"mask": "Masks.GrassUpHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 232,
				"y": 136,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 232,
				"y": 72,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 168,
				"y": 72,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 152,
				"y": 72,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Lian",
			"mask": "Objects.Lian",
			"group": "obstacles",
			"depth": 1,
			"offsetX": 40,
			"offsetY": 108,
			"offsetLvlX": 40,
			"offsetLvlY": 108,
			"vars": {
				"x": 456,
				"y": 232,
				"offset": {
					"x": 40,
					"y": 108
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 456,
				"y": 120,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Hedgehog",
			"bitmap": "Objects.Hedgehog",
			"mask": "Objects.Hedgehog",
			"group": "deadlies",
			"depth": 0,
			"offsetX": 38,
			"offsetY": 27,
			"offsetLvlX": 38,
			"offsetLvlY": 27,
			"initSpeedX": 100,
			"initSpeedY": 0,
			"vars": {
				"x": 456,
				"y": 104,
				"offset": {
					"x": 38,
					"y": 27
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 520,
				"y": 120,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 584,
				"y": 120,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Controller",
			"mask": "Controllers.Mask",
			"opacity": 0,
			"offsetX": 8,
			"offsetY": 8,
			"offsetLvlX": 8,
			"offsetLvlY": 8,
			"group": "controllers",
			"canControl": function (object) {
			return object instanceof Hedgehog
		},
			"doControl": function (object) {
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
			
		},
			"vars": {
				"x": 616,
				"y": 104,
				"offset": {
					"x": 8,
					"y": 8
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Controller",
			"mask": "Controllers.Mask",
			"opacity": 0,
			"offsetX": 8,
			"offsetY": 8,
			"offsetLvlX": 8,
			"offsetLvlY": 8,
			"group": "controllers",
			"canControl": function (object) {
			return object instanceof Hedgehog
		},
			"doControl": function (object) {
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
			
		},
			"vars": {
				"x": 424,
				"y": 104,
				"offset": {
					"x": 8,
					"y": 8
				}
			}
		},
		{
			"class": "Hedgehog",
			"bitmap": "Objects.HedgehogHanging",
			"mask": "Objects.HedgehogHanging",
			"group": "deadlies",
			"depth": 0,
			"offsetX": 20,
			"offsetY": -105,
			"offsetLvlX": 20,
			"offsetLvlY": -105,
			"initSpeedX": 0,
			"initSpeedY": 0,
			"vars": {
				"x": 680,
				"y": -40,
				"offset": {
					"x": 20,
					"y": -105
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.GrassDownHill",
			"mask": "Masks.GrassDownHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 648,
				"y": 184,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 712,
				"y": 184,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Destination",
			"mask": "Objects.Destination",
			"group": "destinations",
			"depth": 1,
			"offsetX": 34,
			"offsetY": 42,
			"offsetLvlX": 34,
			"offsetLvlY": 42,
			"vars": {
				"x": 520,
				"y": 184,
				"offset": {
					"x": 34,
					"y": 42
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 456,
				"y": 216,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 520,
				"y": 216,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Hedgehog",
			"bitmap": "Objects.HedgehogHanging",
			"mask": "Objects.HedgehogHanging",
			"group": "deadlies",
			"depth": 0,
			"offsetX": 21,
			"offsetY": 34,
			"offsetLvlX": 21,
			"offsetLvlY": 34,
			"initSpeedX": 0,
			"initSpeedY": 100,
			"vars": {
				"x": 712,
				"y": 232,
				"offset": {
					"x": 21,
					"y": 34
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Controller",
			"mask": "Controllers.Mask",
			"opacity": 0,
			"offsetX": 8,
			"offsetY": 8,
			"offsetLvlX": 8,
			"offsetLvlY": 8,
			"group": "controllers",
			"canControl": function (object) {
			return object instanceof Hedgehog
		},
			"doControl": function (object) {
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
			
		},
			"vars": {
				"x": 712,
				"y": 104,
				"offset": {
					"x": 8,
					"y": 8
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Controller",
			"mask": "Controllers.Mask",
			"opacity": 0,
			"offsetX": 8,
			"offsetY": 8,
			"offsetLvlX": 8,
			"offsetLvlY": 8,
			"group": "controllers",
			"canControl": function (object) {
			return object instanceof Hedgehog
		},
			"doControl": function (object) {
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
			
		},
			"vars": {
				"x": 712,
				"y": 392,
				"offset": {
					"x": 8,
					"y": 8
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.GrassDownHill",
			"mask": "Masks.GrassDownHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 584,
				"y": 280,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 648,
				"y": 280,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 712,
				"y": 280,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Bush",
			"mask": "Objects.Bush",
			"group": "obstacles",
			"depth": 2,
			"offsetX": 63,
			"offsetY": 57,
			"offsetLvlX": 63,
			"offsetLvlY": 57,
			"vars": {
				"x": 920,
				"y": 328,
				"offset": {
					"x": 63,
					"y": 57
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 344,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 472,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 584,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 696,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.Trampoline",
			"mask": "Objects.Trampoline",
			"offsetX": 47,
			"offsetY": 12,
			"offsetLvlX": 47,
			"offsetLvlY": 12,
			"group": "controllers",
			"depth": 1,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 808,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 472,
				"y": 312,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 552,
				"y": 232,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 616,
				"y": 296,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 664,
				"y": 296,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 744,
				"y": 296,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 232,
				"y": 296,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 248,
				"y": 344,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 616,
				"y": 120,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 728,
				"y": 200,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Lian",
			"mask": "Objects.Lian",
			"group": "obstacles",
			"depth": 1,
			"offsetX": 40,
			"offsetY": 108,
			"offsetLvlX": 40,
			"offsetLvlY": 108,
			"vars": {
				"x": 904,
				"y": 88,
				"offset": {
					"x": 40,
					"y": 108
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.GrassDownHill",
			"mask": "Masks.GrassDownHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 296,
				"y": 136,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 360,
				"y": 136,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Obstacle",
			"bitmap": "Objects.Grass",
			"mask": "Masks.Grass",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 7,
			"offsetLvlX": 32,
			"offsetLvlY": 7,
			"vars": {
				"x": 424,
				"y": 136,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		}
	]
}