new Class('Tutorial', [View.Sprite], {
	Tutorial: function (type) {
		this.Sprite(type.background, 400, 184);

		// pause game, and fade out buttons
		main.paused = true;
		main.restartButton.animate({opacity: 0.5}, {duration: 400, loop: engine.currentRoom.loops.eachFrame});
		main.backButton.animate({opacity: 0.5}, {duration: 400, loop: engine.currentRoom.loops.eachFrame});


		this.onFinished = type.onFinished || function () {};

		this.addChildren(
			this.cover1 = new View.Sprite('Tutorials.Cover1', -217, 0),
			this.cover2 = new View.Sprite('Tutorials.Cover2', 0, 0),
			this.cover3 = new View.Sprite('Tutorials.Cover3', 217, 0),
			this.text = new View.TextBlock(type.text, 0, -3, 400, {offset: OFFSET_MIDDLE_CENTER, alignment: ALIGNMENT_CENTER, font: 'bold 60px Verdana, sans-serif', color: '#FFF'}),
			this.nextButton = new MenuButton({bitmap: 'UI.MediumArrowNext', mask: 'UI.MediumArrowNext', loop: engine.currentRoom.loops.onPaused, onClick: function () {
				this.parent.showNext();
			}, vars: {x: 0, y: 130}})
		);

		this.children.concat(this).forEach(function () {
			this.opacity = 0;
			this.animate({opacity: 1},{duration: 400});
		});

		this.progress = 0;
	},

	showNext: function () {
		if (this.progress < 3) {
			if (this.text.opacity !== 0) {
				this.text.animate({opacity: 0}, {duration: 300});
			}

			this.nextButton.disable();
			this['cover' + (this.progress + 1)].animate({opacity: 0}, {duration: 300, callback: function () {
				this.parent.progress ++;
				this.parent.nextButton.enable();
			}});
		}
		else {
			this.remove();
		}
	},

	remove: function () {
		this.children.concat(this).forEach(function () {
			if (this.disable) {
				this.disable();
			}

			this.animate({opacity: 0},{duration: 400});
		});

		this.schedule(function () {
			engine.purge(this);

			// Start game again
			main.paused = false;
			main.restartButton.animate({opacity: 1}, {duration: 400});
			main.backButton.animate({opacity: 1}, {duration: 400});

			this.onFinished();
		}, 500);
	}
});