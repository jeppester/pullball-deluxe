new Class('LevelParser', {
	parseLevel: function (url) {
		var type, level;

		// Find level type
		type = url.match(/([^\.]*)$/)[1];

		// Load file data
		engine.ajaxRequest(url, undefined, false, function (data) {
			data += "\n//# sourceURL=/" + url;

			switch (type) {
			case 'lvl':
				level = LevelParser.prototype.parseLvl(data);
				level.file = url;
				break;
			case 'js':
				level = LevelParser.prototype.parseJs(data);
				level.file = url;
				break;
			}
		});

		return level;
	},

	parseJs: function (data) {
		var level;

		try {
			eval('level = ' + data);
		}
		catch (e) {
			throw new Error(e);
		}

		return level;
	},

	parseLvl: function(data) {
		var offsets, i, variables, lines, line, level, obj, variable;

		// Function for parsing a line with an object
		function parseObject(line) {
			var lineData, object;

			lineData = line.split(/\s+/);
			object = {vars: {}};
			switch (lineData[0]) {
			case 'master_grass':
			case '0':
				level.theme = 'GrassLands';
				return;
			case 'obj_bold':
			case '1':
				object.importProperties(objectTypes.Ball);
				break;
			case 'obj_graes':
			case '3':
				object.importProperties(objectTypes.Grass);
				break;
			case 'obj_busk':
			case '5':
				object.importProperties(objectTypes.Bush);
				break;
			case 'obj_maal':
			case '6':
				object.importProperties(objectTypes.Destination);
				break;
			case 'obj_kraft':
			case '7':
				object.importProperties(objectTypes.Power);
				object.vars.power = 120;
				object.vars.powerMax = 120;
				break;
			case 'obj_lian':
			case '8':
				object.importProperties(objectTypes.Lian);
				break;
			case 'obj_pigge':
			case '9':
				object.importProperties(objectTypes.Spikes);
				break;
			case 'obj_pindsvin':
			case '10':
				object.importProperties(objectTypes.Hedgehog);
				break;
			case 'obj_turn':
			case '11':
				object.importProperties(objectTypes.TurnHV);
				break;
			// Trampolin
			case 'obj_trampolin':
			case '16':
				object.importProperties(objectTypes.Trampoline);
				break;
			// Teleport in
			case 'obj_tele_ind':
			case '20':
				object.importProperties(objectTypes.Teleport);
				object.vars.name = 'teleIn';
				object.vars.destination = 'teleOut';
				break;
			// Teleport out
			case 'obj_tele_ud':
			case '21':
				object.importProperties(objectTypes.Teleport);
				object.bitmap = 'Objects.TeleOut';
				object.vars.name = 'teleOut';
				break;
			// Climbing hedgehog
			case 'obj_pindsvin_v':
			case '27':
				object.importProperties(objectTypes.HedgehogClimbing);
				break;
			// Swinging hedgehog
			case 'obj_pindsvin_pendul':
			case '28':
				object.importProperties(objectTypes.HedgehogSwinging);
				break;
			// Uphill left grass 
			case 'obj_graes_skraa_v':
				object.importProperties(objectTypes.GrassDownHill);
				break;
			// Uphill right grass 
			case 'obj_graes_skraa_h':
				object.importProperties(objectTypes.GrassUpHill);
				break;
			default:
				console.log('Unknown object:', lineData[0], lineData[1], lineData[2]);
				return;
			}

			object.vars.importProperties({
				offset: new Math.Vector(object.offsetLvlX, object.offsetLvlY),
				x: lineData[1] * 1,
				y: lineData[2] * 1
			});

			level.objects.push(object);
		}
		// Function for parsing a line containing a variable
		function parseVariable(line) {
			var lineData;

			lineData = line.split(": ");

			switch (lineData[0]) {
			case 'width':
				level.width = lineData[1] * 1;
				break;
			case 'goldPower':
				level.goldPower = lineData[1] * 1;
				break;
			case 'silverPower':
				level.silverPower = lineData[1] * 1;
				break;
			case 'goldTime':
				level.goldTime = lineData[1] * 1;
				break;
			case 'silverTime':
				level.silverTime = lineData[1] * 1;
				break;
			case 'loft':
				level.ceiling = lineData[1] * 1 ? true : false;
				break;
			case 'kraft':
				level.power = lineData[1] * 1;
				if (level.power === 0) {
					level.power = false;
				}
				break;
			case 'wallLeft':
				level.wallLeft = (lineData[1] * 1 == true);
				break;
			case 'wallRight':
				level.wallRight = (lineData[1] * 1 == true);
				break;
			case 'background':
				level.backgroundImage = lineData[1];
				break;
			case 'foreground':
				level.foregroundImage = lineData[1];
				break;
			case 'tutorial':
				level.tutorial = lineData[1];
				break;
			}
		}

		// Create empty level (and default settings)
		level = {
			objects: [],
			theme: "GrassLands",
			ceiling: true,
		};

		// Parse each line separately
		lines = data.split(/\r\n|\r|\n/);
		for (i = 0; i < lines.length; i ++) {
			line = lines[i];

			if (line === ' - variables - ') {
				variables = true;
				continue;
			}

			if (!variables) {
				parseObject(line);
			}
			else {
				parseVariable(line);
			}

		}

		if (level.theme === "GrassLands") {
			level.clouds = ['Objects.Cloud'];

			if (/Dark$/.test(level.backgroundImage)) {
				level.cloudOpacity = 0.7;
			}
		}
		
		// throw new Error('Testing');

		return level;
	},
});