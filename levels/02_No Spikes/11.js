{
	"theme": "GrassLands",
	"ceiling": true,
	"width": 960,
	"power": 150,
	"backgroundImage": "Background2Light",
	"clouds": [
		"Objects.Cloud"
	],
	"wallLeft": true,
	"wallRight": true,
	"goldTime": 12000,
	"silverTime": 18000,
	"goldPower": 150,
	"silverPower": 225,
	"objects": [
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
				"x": 600,
				"y": 200,
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
			"doControl": 		function (object) {
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
				"x": 696,
				"y": 216,
				"offset": {
					"x": 32,
					"y": 32
				},
				"name": "teleIn",
				"destination": "teleOut"
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
				"x": 568,
				"y": 312,
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
				"x": 696,
				"y": 328,
				"offset": {
					"x": 34,
					"y": 42
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
				"x": 696,
				"y": 408,
				"offset": {
					"x": 63,
					"y": 57
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
				"x": 152,
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
				"x": 536,
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
				"x": 472,
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
				"x": 408,
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
				"x": 408,
				"y": 328,
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
				"x": 344,
				"y": 328,
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
				"x": 280,
				"y": 328,
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
				"x": 216,
				"y": 328,
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
				"x": 152,
				"y": 264,
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
				"x": 152,
				"y": 200,
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
				"x": 40,
				"y": 376,
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
				"x": 312,
				"y": 312,
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
				"x": 408,
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
				"x": 344,
				"y": 200,
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
				"x": 344,
				"y": 169.21507309429344,
				"offset": {
					"x": 22,
					"y": 22
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
				"x": 344,
				"y": 72,
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
				"x": 216,
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
				"x": 424,
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
				"x": 536,
				"y": 424,
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
				"x": 40,
				"y": 168,
				"offset": {
					"x": 26,
					"y": 26
				}
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
			"doControl": 		function (object) {
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
				"x": 888,
				"y": 72,
				"offset": {
					"x": 32,
					"y": 32
				},
				"name": "teleOut"
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
				"x": 808,
				"y": 88,
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
				"x": 776,
				"y": 200,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 920,
				"y": 166.35279787621803,
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
				"x": 856,
				"y": 166.3479522620777,
				"offset": {
					"x": 22,
					"y": 22
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
				"x": 840,
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
				"x": 952,
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
				"x": 936,
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
				"x": 872,
				"y": 408,
				"offset": {
					"x": 32,
					"y": 78
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
				"x": 536,
				"y": 310.3894473554042,
				"offset": {
					"x": 22,
					"y": 22
				}
			}
		}
	]
}