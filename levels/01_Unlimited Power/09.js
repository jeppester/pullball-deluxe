{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 1440,
	"power": false,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 7300,
	"silverTime": 11000,
	"objects": [
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
				"x": 56,
				"y": 312,
				"offset": {
					"x": 32,
					"y": 78
				}
			}
		},
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
				"y": 24,
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
				"x": 296,
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
				"x": 408,
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
				"x": 424,
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
				"x": 440,
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
				"x": 456,
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
				"x": 472,
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
				"x": 536,
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
				"x": 520,
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
				"x": 552,
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
				"x": 568,
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
				"x": 504,
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
				"x": 536,
				"y": 152,
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
				"x": 536,
				"y": 136,
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
				"x": 536,
				"y": 24,
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
				"x": 600,
				"y": 24,
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
				"x": 472,
				"y": 24,
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
				"x": 712,
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
				"x": 728,
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
				"x": 744,
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
				"x": 760,
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
				"x": 776,
				"y": 264,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 808,
				"y": 312,
				"offset": {
					"x": 63,
					"y": 57
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
				"x": 760,
				"y": 376,
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
				"x": 824,
				"y": 376,
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
				"x": 888,
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
				"x": 696,
				"y": 440,
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
				"x": 952,
				"y": 440,
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
				"x": 808,
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
				"x": 872,
				"y": 200,
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
				"x": 600,
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
				"x": 632,
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
				"x": 616,
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
				"x": 648,
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
				"x": 664,
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
				"y": 72,
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
				"x": 968,
				"y": 392,
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
				"y": 392,
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
				"y": 392,
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
				"x": 952,
				"y": 360,
				"offset": {
					"x": 34,
					"y": 42
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
				"x": 952,
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
				"x": 1048,
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
				"x": 1080,
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
				"x": 1112,
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
				"x": 1144,
				"y": 216,
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
				"x": 1160,
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
				"x": 1160,
				"y": 120,
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
				"x": 1304,
				"y": 40,
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
				"x": 1368,
				"y": 104,
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
				"x": 1432,
				"y": 168,
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
				"x": 1144,
				"y": 232,
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
				"x": 1208,
				"y": 232,
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
				"x": 1272,
				"y": 232,
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
				"x": 1432,
				"y": 328,
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
				"x": 1368,
				"y": 392,
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
				"x": 1160,
				"y": 392,
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
				"x": 1224,
				"y": 392,
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
				"x": 1288,
				"y": 392,
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
				"x": 1352,
				"y": 392,
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
				"x": 1416,
				"y": 392,
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
				"x": 1032,
				"y": 376,
				"offset": {
					"x": 38,
					"y": 27
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
				"x": 1288,
				"y": 376,
				"offset": {
					"x": 38,
					"y": 27
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
				"x": 1336,
				"y": 376,
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
				"x": 984,
				"y": 376,
				"offset": {
					"x": 8,
					"y": 8
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
				"x": 280,
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
				"x": 264,
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
				"x": 296,
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
				"x": 280,
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
				"x": 280,
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
				"x": 296,
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
				"x": 264,
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
				"x": 280,
				"y": 88,
				"offset": {
					"x": 20,
					"y": 20
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
				"x": 408,
				"y": 56,
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
				"x": 424,
				"y": 56,
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
				"x": 488,
				"y": 56,
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
				"x": 552,
				"y": 56,
				"offset": {
					"x": 32,
					"y": 7
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
		}
	]
}