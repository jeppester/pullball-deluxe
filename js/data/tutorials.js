tutorials = {
	movement: {
		text: 'Movement',
		background: 'Tutorials.Movement',
		onFinished: function () {
			var text, check;

			main.levelController.destCopy = main.levelController.destinations;
			main.levelController.destinations = [];

			text = new View.TextBlock('Now try moving the ball around', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
			text.animate({opacity: 1}, {duration: 300});
			tutorialView.addChildren(text);
			
			check = function () {
				if (main.levelController.powerSpend > 100) {
					engine.currentRoom.loops.onRunning.detachFunction(this, check);

					text.animate({opacity: 0}, {duration: 200, callback: function () {
						engine.purge(this);
					}});

					text = new View.TextBlock('Great job!', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
					text.animate({opacity: 1}, {duration: 200});
					tutorialView.addChildren(text);

					engine.currentRoom.loops.onRunning.schedule(main.levelController, function () {
						text.animate({opacity: 0}, {duration: 300, callback: function () {
							engine.purge(this);
						}});
						tutorialView.addChildren(
							new Tutorial(tutorials.winning)
						);
					}, 2000);
				}
			}

			engine.currentRoom.loops.onRunning.attachFunction(main.levelController.ball, check);
		}
	},
	winning: {
		text: 'Winning',
		background: 'Tutorials.Winning',
		onFinished: function () {
			var text, goal;

			text = new View.TextBlock('Now hit the goal sign to advance to next level', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
			text.animate({opacity: 1}, {duration: 300});
			tutorialView.addChildren(text);

			engine.currentRoom.loops.onRunning.schedule(main.levelController, function () {
				text.animate({opacity: 0}, {duration: 1000, callback: function () {
					engine.purge(this);
				}});
				
				// Add goal sign to level
				goal = new Obstacle({"vars":{"offset":{"x":34,"y":42}, "opacity":0, "x":800, "y":352}, "class":"Obstacle","bitmap":"Objects.Destination","mask":"Objects.Destination","group":"destinations","depth":1});
				goal.animate({opacity: 1}, {duration: 1000});
				main.levelController.destinations.push(goal);
				main.depths[1].addChildren(goal);
			}, 3000);
		},
	},
	platforms: {
		text: 'Platforms',
		background: 'Tutorials.Platforms',
		onFinished: function () {
			var text, goal;

			text = new View.TextBlock('Now hit the goal sign to advance to next level', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
			text.animate({opacity: 1}, {duration: 300});
			tutorialView.addChildren(text);

			engine.currentRoom.loops.onRunning.schedule(main.levelController, function () {
				text.animate({opacity: 0}, {duration: 1000, callback: function () {
					engine.purge(this);
				}});
			}, 3000);
		},
	},
	spikes: {
		text: 'Threats',
		background: 'Tutorials.Spikes',
		onFinished: function () {
			var text, goal;

			text = new View.TextBlock('Now get the ball safely to the goal sign', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
			text.animate({opacity: 1}, {duration: 300});
			tutorialView.addChildren(text);

			engine.currentRoom.loops.onRunning.schedule(main.levelController, function () {
				text.animate({opacity: 0}, {duration: 1000, callback: function () {
					engine.purge(this);
				}});
			}, 3000);
		},
	},
	power: {
		text: 'Power',
		background: 'Tutorials.Power',
		onFinished: function () {
			var text, goal;

			text = new View.TextBlock('Now complete the level without running out of power', 400, 200, 400, {opacity: 0, lineHeight: 60, offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#e75b35'}),
			text.animate({opacity: 1}, {duration: 300});
			tutorialView.addChildren(text);

			engine.currentRoom.loops.onRunning.schedule(main.levelController, function () {
				text.animate({opacity: 0}, {duration: 1000, callback: function () {
					engine.purge(this);
				}});
			}, 3000);
		},
	}
}