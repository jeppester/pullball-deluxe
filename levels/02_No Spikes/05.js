{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 1280,
	"power": 150,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 17500,
	"silverTime": 25000,
	"goldPower": 165,
	"silverPower": 250,
	"objects": [
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
				"x": 488,
				"y": 104,
				"offset": {
					"x": 40,
					"y": 108
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
				"y": 216,
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
				"x": 392,
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
				"x": 328,
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
				"x": 264,
				"y": 216,
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
				"x": 248,
				"y": 152,
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
				"x": 200,
				"y": 216,
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
				"x": 8,
				"y": 296,
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
				"x": 72,
				"y": 360,
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
				"x": 136,
				"y": 424,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 296,
				"y": 248,
				"offset": {
					"x": 40,
					"y": 108
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
			"bitmap": "Objects.GrassUpHill",
			"mask": "Masks.GrassUpHill",
			"group": "obstacles",
			"depth": 3,
			"offsetX": 32,
			"offsetY": 78,
			"offsetLvlX": 32,
			"offsetLvlY": 78,
			"vars": {
				"x": 488,
				"y": 408,
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
				"x": 552,
				"y": 344,
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
				"x": 616,
				"y": 280,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 648,
				"y": 232,
				"offset": {
					"x": 40,
					"y": 108
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
				"x": 856,
				"y": 232,
				"offset": {
					"x": 40,
					"y": 108
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
				"x": 648,
				"y": 152,
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
				"x": 856,
				"y": 152,
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
				"x": 680,
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
				"x": 744,
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
				"x": 808,
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
				"x": 872,
				"y": 216,
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
				"x": 760,
				"y": -8,
				"offset": {
					"x": 40,
					"y": 108
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
				"x": 760,
				"y": 200,
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
				"x": 920,
				"y": 216,
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
				"x": 984,
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
				"x": 1048,
				"y": 216,
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
				"x": 1176,
				"y": 152,
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
				"x": 1016,
				"y": 152,
				"offset": {
					"x": 63,
					"y": 57
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
				"x": 1240,
				"y": 88,
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
				"x": 1304,
				"y": 24,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 1144,
				"y": 264,
				"offset": {
					"x": 40,
					"y": 108
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
				"x": 776,
				"y": 264,
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
				"x": 776,
				"y": 296,
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
				"x": 840,
				"y": 296,
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
				"x": 856,
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
				"x": 920,
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
				"x": 984,
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
				"x": 1048,
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
				"x": 1112,
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
				"x": 1176,
				"y": 376,
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
				"x": 1256,
				"y": 152,
				"offset": {
					"x": 40,
					"y": 108
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
				"x": 376,
				"y": 200,
				"offset": {
					"x": 26,
					"y": 26
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Powerups.Power",
			"mask": "Masks.Power",
			"offsetX": 22,
			"offsetY": 22,
			"offsetLvlX": 22,
			"offsetLvlY": 22,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 296,
				"y": 360.84628750157486,
				"offset": {
					"x": 22,
					"y": 22
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Powerups.Power",
			"mask": "Masks.Power",
			"offsetX": 22,
			"offsetY": 22,
			"offsetLvlX": 22,
			"offsetLvlY": 22,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 1224,
				"y": 40.81704432077659,
				"offset": {
					"x": 22,
					"y": 22
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
				"x": 1256,
				"y": 392,
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
				"x": 1240,
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
				"x": 1304,
				"y": 376,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Powerups.Power",
			"mask": "Masks.Power",
			"offsetX": 22,
			"offsetY": 22,
			"offsetLvlX": 22,
			"offsetLvlY": 22,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 1256,
				"y": 312.8531922318644,
				"offset": {
					"x": 22,
					"y": 22
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
				"x": 584,
				"y": 104,
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
				"x": 520,
				"y": 104,
				"offset": {
					"x": 32,
					"y": 7
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Powerups.Power",
			"mask": "Masks.Power",
			"offsetX": 22,
			"offsetY": 22,
			"offsetLvlX": 22,
			"offsetLvlY": 22,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 520,
				"y": 72.84984883096165,
				"offset": {
					"x": 22,
					"y": 22
				}
			}
		},
		{
			"class": "Controller",
			"bitmap": "Powerups.Power",
			"mask": "Masks.Power",
			"offsetX": 22,
			"offsetY": 22,
			"offsetLvlX": 22,
			"offsetLvlY": 22,
			"group": "controllers",
			"depth": 0,
			"canControl": function (object) {
			return object instanceof Ball
		},
			"doControl": function (object) {
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
		},
			"vars": {
				"x": 680,
				"y": 200.8176155328835,
				"offset": {
					"x": 22,
					"y": 22
				}
			}
		}
	]
}