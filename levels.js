{
	"objects":[
		// Levels sign
		/*{
			"vars":{
				"offset": new Math.Vector(),
				"x": 51,
				"y": 180
			},
			"class": "Obstacle",
			"bitmap": "Menu.Levels",
			"mask": "Menu.Levels",
			"group": "obstacles",
			"depth":1
		},*/

		// Separators
		{"vars":{"offset": new Math.Vector(), "x": 201, "y": 0}, "class": "Obstacle", "bitmap": "Menu.LevelsBackground", "mask": "Menu.LevelsBackground", "group": "obstacles", "depth":1 },
		{"vars":{"offset": new Math.Vector(), "x": 193, "y": -15 }, "class": "Obstacle", "bitmap": "Menu.VerticalSeparator2", "mask": "Menu.VerticalSeparator2", "group": "obstacles", "depth":1 },
		//{"vars":{"offset": new Math.Vector(), "x": 410, "y": -15 }, "class": "Obstacle", "bitmap": "Menu.VerticalSeparator", "mask": "Menu.VerticalSeparator", "group": "obstacles", "depth":1 },
		{"vars":{"offset": new Math.Vector(20, 430), "x": 618, "y": -15, "size": -1}, "class": "Obstacle", "bitmap": "Menu.VerticalSeparator2", "mask": "Menu.VerticalSeparator2", "group": "obstacles", "depth":1 },
		
		// Level selector (will add additional arrows and play button)
		{
			"vars":{
				"offset": new Math.Vector(),
				"x": 0,
				"y": 0
			},
			"class": "LevelSelector",
			"depth": 1
		},

		// Grass
		{"vars":{"offset":{"x":32,"y":7},"x":96,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":160,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":224,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":288,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":352,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":416,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":480,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":544,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":608,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":672,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":736,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":800,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":864,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},{"vars":{"offset":{"x":32,"y":7},"x":32,"y":392},"class":"Obstacle","bitmap":"Objects.Grass","mask":"Masks.Grass","group":"obstacles","depth":3},
	
		// Ball
		{"vars":{x: 50, y: 350}, class: 'Ball', depth: 0, bitmap: 'Objects.Ball', offsetX: 26, offsetY: 26, offsetLvlX: 26, offsetLvlY: 26},
	],
	"theme": "GrassLands",
	"ceiling": true,
	"width": 800,
	"power": false,
	"backgroundImage": 'Background2Light',
	"clouds": ['Objects.Cloud'],
	"wallLeft": true,
	"wallRight": true,
	"isMenu": true,
}