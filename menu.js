{
	"objects":[
		// Logo
		{"vars":{"offset": new Math.Vector(), "x": 28, "y": 42 }, "class": "Obstacle", "bitmap": "Menu.Logo", "mask": "Menu.Logo", "group": "obstacles", "depth":4 },
		
		// Play button
		{
			"vars":{
				"offset": new Math.Vector(),
				"x": 51,
				"y": 165
			},
			"class": "MenuButton",
			"bitmap": "Menu.PlayNow",
			"mask": "Menu.PlayNow",
			"group": "obstacles",
			"depth":1,
			"onClick": function () {
				main.levelController.openEntry(main.levelController.levelList[main.storage.selectedFolder].levels[main.storage.selectedLevel]);
			}
		},

		// Level button
		{
			"vars":{
				"offset": new Math.Vector(),
				"x": 51,
				"y": 215
			},
			"class": "MenuButton",
			"bitmap": "Menu.Levels",
			"mask": "Menu.Levels",
			"group": "obstacles",
			"depth":1,
			"onClick": function () {
				main.levelController.openLevel('levels.js');
			}
		},
		
		// Editor button
		{
			"vars":{
				"offset": new Math.Vector(),
				"x": 51,
				"y": 265
			},
			"class": "MenuButton",
			"bitmap": "Menu.Editor",
			"mask": "Menu.Editor",
			"group": "obstacles",
			"depth":1,
			"onClick": function () {
				main.levelController.openLevel('editor.js');
			}
		},

		// Grass
		{"vars":{"offset":{"x":32,"y":7},"x":96,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":160,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":224,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":288,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":352,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":416,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":480,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":544,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":608,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":672,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":736,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":800,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":864,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":32,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},
	
		// Ball
		{"vars":{x: 400, y: 200}, class: 'Ball', depth: 0, bitmap: 'Objects.Ball', offsetX: 26, offsetY: 26, offsetLvlX: 26, offsetLvlY: 26},
	],
	"theme": "GrassLands",
	"ceiling": true,
	"backgroundImage": 'BackgroundMenu',
	"width": 800,
	"clouds": ['Objects.Cloud'],
	"power": false,
	"wallLeft": true,
	"wallRight": true,
	"isMenu": true,
}