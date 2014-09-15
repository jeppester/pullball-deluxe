{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 1280,
	"power": false,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 5400,
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
				"x": 56,
				"y": 184,
				"offset": {
					"x": 26,
					"y": 26
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
				"y": 376,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
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
				"x": 136,
				"y": -8,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 56,
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
				"x": 248,
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
				"x": 360,
				"y": 376,
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
				"x": 360,
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
				"x": 360,
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
				"x": 360,
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
				"x": 360,
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
				"x": 360,
				"y": 120,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 584,
				"y": 376,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
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
				"x": 584,
				"y": 8,
				"offset": {
					"x": 20,
					"y": 20
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
				"y": 200,
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
				"x": 664,
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
				"x": 728,
				"y": 216,
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
				"x": 808,
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
				"x": 808,
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
				"x": 808,
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
				"x": 808,
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
				"x": 808,
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
				"x": 808,
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
				"x": 808,
				"y": 120,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 1192,
				"y": 168,
				"offset": {
					"x": 34,
					"y": 42
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
				"x": 1192,
				"y": 344,
				"offset": {
					"x": 34,
					"y": 42
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
				"x": 1096,
				"y": 248,
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
				"x": 1080,
				"y": 136,
				"offset": {
					"x": 32,
					"y": 7
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
				"x": 1016,
				"y": 200,
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
				"x": 952,
				"y": 200,
				"offset": {
					"x": 32,
					"y": 7
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
				"x": 888,
				"y": 200,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 1016,
				"y": 264,
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
				"x": 1080,
				"y": 264,
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
			"offsetX": 20,
			"offsetY": -105,
			"offsetLvlX": 20,
			"offsetLvlY": -105,
			"initSpeedX": 0,
			"initSpeedY": 0,
			"vars": {
				"x": 952,
				"y": -8,
				"offset": {
					"x": 20,
					"y": -105
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
				"x": 952,
				"y": 200,
				"offset": {
					"x": 20,
					"y": -105
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
				"x": 1192,
				"y": 200,
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
				"x": 1128,
				"y": 200,
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
				"x": 1192,
				"y": 376,
				"offset": {
					"x": 32,
					"y": 7
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
				"x": 1128,
				"y": 440,
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
				"x": 1256,
				"y": 376,
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
				"x": 840,
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
				"x": 840,
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
				"x": 872,
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
				"x": 920,
				"y": 392,
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
				"x": 952,
				"y": 392,
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
				"x": 984,
				"y": 392,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		}
	]
}