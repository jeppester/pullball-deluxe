/* THEME FILES
 * This is a theme.json-file, these files are automatically loaded when loading a theme with the loader object.
 * theme-files tells the loader which resources to index and preload.
 *
 * To add a theme resource (an image for instance), simply add it to the below json object
 * For an example, see the example theme in the examples folder
 */

{
	"name":"GrassLand",
	"inherit":["Common"],
	"music":{},
	"sfx":{},
	"images":{
		/* Backgrounds */
		"BackgroundMenu": "png",
		"Background1Light": "png",
		"Background1Dark": "png",

		"Background2Light": "png",
		"Background2Dark": "png",

		"Foreground1Light": "png",
		"Foreground1Dark": "png",

		/* Objects */
		"Objects.Hedgehog": "png; 4 images",
		"Objects.HedgehogHanging": "png;",
		"Objects.HedgehogHanging2": "png;",
		"Objects.HedgehogRope": "png;",
		"Objects.HedgehogRopePole": "png;",
		"Objects.Destination": "png",
		"Objects.Grass": "png",
		"Objects.GrassUpHill": "png",
		"Objects.GrassDownHill": "png",
		"Objects.GrassEndLeft": "png",
		"Objects.GrassEndRight": "png",
		"Objects.Bush": "png",
		"Objects.Spikes": "png",
		"Objects.Lian": "png",
		"Objects.Cloud": "png",

		/* Masks */
		"Masks.Grass": "png",
		"Masks.GrassUpHill": "png",
		"Masks.GrassDownHill": "png",
	}
}
