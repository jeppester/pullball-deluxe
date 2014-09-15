{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 1120,
	"power": false,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 15000,
	"silverTime": 23000,
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
				"x": 72,
				"y": 216,
				"offset": {
					"x": 26,
					"y": 26
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
				"x": 72,
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
				"x": 120,
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
				"x": 152,
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
				"x": 168,
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
				"x": 184,
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
				"x": 200,
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
				"x": 232,
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
				"x": 264,
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
				"x": 296,
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
				"x": 328,
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
				"x": 392,
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
				"x": 424,
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
				"x": 456,
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
				"x": 488,
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
				"x": 504,
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
				"x": 520,
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
				"x": 536,
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
				"x": 568,
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
			"bitmap": "Objects.Spikes",
			"mask": "Objects.Spikes",
			"group": "deadlies",
			"depth": 4,
			"offsetX": 20,
			"offsetY": 20,
			"offsetLvlX": 20,
			"offsetLvlY": 20,
			"vars": {
				"x": 184,
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
				"x": 216,
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
				"x": 248,
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
				"x": 280,
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
				"x": 312,
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
				"x": 344,
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
				"x": 376,
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
				"x": 408,
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
				"x": 440,
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
				"x": 472,
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
				"x": 504,
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
				"x": 536,
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
				"x": 120,
				"y": 88,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 24,
				"y": 88,
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
				"x": 88,
				"y": 88,
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
				"x": 568,
				"y": 88,
				"offset": {
					"x": 20,
					"y": 20
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
				"y": 184,
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
				"x": 536,
				"y": 232,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 232,
				"y": 328,
				"offset": {
					"x": 34,
					"y": 42
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
				"x": 456,
				"y": 360,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 232,
				"y": 408,
				"offset": {
					"x": 63,
					"y": 57
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
				"x": 376,
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
				"x": 344,
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
				"x": 312,
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
				"x": 296,
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
				"x": 264,
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
				"x": 328,
				"y": 184,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 680,
				"y": 328,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 696,
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
				"x": 680,
				"y": 376,
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
				"x": 616,
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
				"x": 648,
				"y": 184,
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
				"y": 184,
				"offset": {
					"x": 32,
					"y": 7
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
				"x": 600,
				"y": 104,
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
				"x": 744,
				"y": 88,
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
				"x": 808,
				"y": 88,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.TeleIn",
			"mask": "Masks.Tele",
			"offsetX": 32,
			"offsetY": 32,
			"offsetLvlX": 32,
			"offsetLvlY": 32,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
				return object instanceof Ball
			},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 824,
				"y": 200,
				"offset": {
					"x": 32,
					"y": 32
				},
				"name": "teleIn",
				"destination": "teleOut"
			}
		},
		{
			"class": "Controller",
			"bitmap": "Objects.TeleOut",
			"mask": "Masks.Tele",
			"offsetX": 32,
			"offsetY": 32,
			"offsetLvlX": 32,
			"offsetLvlY": 32,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
			},
			"vars": {
				"x": 424,
				"y": 232,
				"offset": {
					"x": 32,
					"y": 32
				},
				"name": "teleOut"
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
				"x": 856,
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
				"x": 888,
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
				"x": 904,
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
				"x": 904,
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
				"x": 904,
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
				"x": 888,
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
				"x": 856,
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
				"x": 824,
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
				"x": 792,
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
				"x": 760,
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
				"x": 744,
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
				"x": 728,
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
				"x": 760,
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
				"x": 776,
				"y": 392,
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
				"x": 840,
				"y": 392,
				"offset": {
					"x": 47,
					"y": 12
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
				"x": 744,
				"y": 248,
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
				"x": 808,
				"y": 248,
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
				"x": 872,
				"y": 248,
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
				"x": 936,
				"y": 248,
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
				"x": 1000,
				"y": 248,
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
				"x": 1096,
				"y": 104,
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
				"x": 1032,
				"y": 104,
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
				"x": 936,
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
				"x": 968,
				"y": 392,
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
				"x": 1032,
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
				"x": 920,
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
				"x": 984,
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
				"x": 952,
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
				"x": 920,
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
				"x": 648,
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
				"x": 616,
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
				"x": 600,
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
				"x": 152,
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
				"x": 184,
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
				"x": 216,
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
				"x": 248,
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
				"x": 280,
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
				"x": 312,
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
				"x": 344,
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
				"x": 376,
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
				"x": 408,
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
				"x": 440,
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
				"x": 472,
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
				"x": 504,
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
				"x": 536,
				"y": 104,
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
				"x": 344,
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
				"x": 952,
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
				"x": 984,
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
				"x": 1016,
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
				"x": 712,
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
				"x": 680,
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
				"x": 648,
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
				"x": 616,
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
				"x": 584,
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
				"x": 568,
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
				"x": 760,
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
				"x": 792,
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
				"x": 824,
				"y": 88,
				"offset": {
					"x": 20,
					"y": 20
				}
			}
		}
	]
}