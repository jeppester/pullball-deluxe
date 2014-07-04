new Class('LevelCompletionScreen', [View.Container], {
	LevelCompletionScreen: function (onNext) {
		this.Container();
		this.x = 400;
		this.justCompleted = false;
		this.oldPowerAwardLevel = 0;
		this.oldTimeAwardLevel = 0;
		this.oldFullyCompleted = false;
		this.newTimeAwardLevel = 0;
		this.newPowerAwardLevel = 0;
		this.newFullyCompleted = false;

		this.completionAward = false;
		this.powerAward = false;
		this.timeAward = false;

		this.awardSpacing = 140;

		this.onNext = onNext;

		main.backButton.disable();
		main.backButton.animate({opacity: 0.5}, {duration: 200});
		main.restartButton.disable();
		main.restartButton.animate({opacity: 0.5}, {duration: 200});

		// Animate out any indicator
		if (main.indicator && !main.indicator.inactive) {
			main.indicator.inactive = true;
			main.indicator.animate({radius: 0, opacity: 0}, {duration: 500, callback: function () {
				engine.purge(this);
			}});
		}
	},

	checkSaveStats: function () {
		// Save stats to local storage
		var c, stats, time, newTimeAward, newPowerAward;

		c = main.levelController;
		stats = c.getCurrentLevelStats();
		if (stats.completed) {
			// Update stats if new completion was better
			stats.bestTime = stats.bestTime < time ? stats.bestTime : c.timeSpend;
			stats.bestPower = stats.bestPower < c.powerSpend ? stats.bestPower : c.powerSpend;
		}
		else {
			// Save stats
			stats.completed = true;
			this.justCompleted = true;
			stats.bestTime = c.timeSpend;
			stats.bestPower = c.powerSpend;
		}

		console.log(c.powerSpend, c.timeSpend);

		// Save old stats
		this.oldTimeAwardLevel = stats.timeAward;
		this.oldPowerAwardLevel = stats.powerAward;
		this.oldFullyCompleted = stats.fullyCompleted;

		// Check for new time awards
		if (c.timeSpend <= c.currentLevel.goldTime && stats.timeAward < 2) {
			stats.timeAward = 2;
		}
		else if (c.timeSpend <= c.currentLevel.silverTime && stats.timeAward < 1) {
			stats.timeAward = 1;
		}

		// Check for new power awards
		if (c.powerSpend <= c.currentLevel.goldPower && stats.powerAward < 2) {
			stats.powerAward = 2;
		}
		else if (c.powerSpend <= c.currentLevel.silverPower && stats.powerAward < 1) {
			stats.powerAward = 1;
		}

		// Check if the level has been fully completed
		if ((stats.powerAward === 2 || !c.currentLevel.goldPower) && (stats.timeAward === 2 || !c.currentLevel.goldTime)) {
			stats.fullyCompleted = true;
		}

		main.saveLocalStorage();
		this.newPowerAwardLevel = stats.powerAward;
		this.newTimeAwardLevel = stats.timeAward;
		this.newFullyCompleted = stats.fullyCompleted;

		this.show();
	},

	show: function () {
		// Create objects
		this.createButtons();
		this.createCurrentAwards(function () {
			// Animate in new awards, if there are any
			this.createNewAwards(function () {
				// Upgrade awards, if any awards have been improved
				this.upgradeAwards(function () {
					// If both power and time awards are gold, upgrade to gold star
					this.checkUpgradeToGoldStar(function () {
						// Enable the buttons when all animations have ended
						this.enableButtons();
					})
				});
			});
		});
	},

	createButtons: function () {
		this.buttons = [
			new MenuButton({
				bitmap: "UI.BigArrowPrev",
				mask: "UI.BigArrowPrev",
				onClick: function () {
					this.disable();
					main.storage.selectedFolder = main.levelController.currentLevelEntry.fId;
					main.storage.selectedLevel = main.levelController.currentLevelEntry.lId;
					main.levelController.openLevel('levels.js');
					this.parent.remove();
				},
				vars: {
					x: -80,
					y: 320
				}
			}),
			new MenuButton({
				bitmap: "UI.BigArrowRestart",
				mask: "UI.BigArrowRestart",
				onClick: function () {
					this.disable();
					main.levelController.resetLevel();
					this.parent.remove();
				},
				vars: {
					x: 0,
					y: 320
				}
			}),
			new MenuButton({
				bitmap: "UI.BigArrowNext",
				mask: "UI.BigArrowNext",
				onClick: function () {
					this.disable();
					this.parent.onNext();
					this.parent.remove();
				},
				vars: {
					x: 80,
					y: 320
				}
			}),
		];

		this.addChildren.apply(this, this.buttons);

		this.buttons.forEach(function () {
			this.disable();
			this.widthScale = 0.5;
			this.opacity = 0; 
		});
	},

	enableButtons: function () {
		this.buttons.forEach(function () {
			this.enable();
			this.animate({opacity: 1, widthScale: 1},{duration: 500});
		});
	},

	createCurrentAwards: function (callback) {
		if (!this.justCompleted) {
			this.completionAward = new View.Sprite('Menu.BigStar' + (this.oldFullyCompleted ? 'Gold' : 'Silver'), 0, 200, 0, {opacity: 0});
			this.completionAward.animate({opacity: 1}, {duration: 1000});
			this.addChildren(this.completionAward);
			this.awardCountCurrent ++;
		}

		if (this.oldPowerAwardLevel > 0 && !this.oldFullyCompleted) {
			this.powerAward = new View.Sprite('Menu.BigPower' + (this.oldPowerAwardLevel > 1 ? 'Gold' : 'Silver'), -this.awardSpacing, 200, 0, {opacity: 0, offset: new Math.Vector(82.5, 42)});
			this.powerAward.animate({opacity: 1}, {duration: 1000});
			this.addChildren(this.powerAward);
		}

		if (this.oldTimeAwardLevel > 0 && !this.oldFullyCompleted) {
			this.timeAward = new View.Sprite('Menu.BigClock' + (this.oldTimeAwardLevel > 1 ? 'Gold' : 'Silver'), this.awardSpacing, 200, 0, {opacity: 0});
			this.timeAward.animate({opacity: 1}, {duration: 1000});
			this.addChildren(this.timeAward);
		}

		this.schedule(callback, 1000);
	},

	createNewAwards: function (callback) {
		// If there are no new awards, run callback and return
		if (this.justCompleted === false && this.oldPowerAwardLevel === this.newPowerAwardLevel && this.oldTimeAwardLevel === this.newTimeAwardLevel) {
			callback.call(this);
			return;
		}

		var addQueue;

		addQueue = [];

		// If just completed, animate in a silver star
		if (this.justCompleted) {
			addQueue.push('Star' + (this.newFullyCompleted && this.newPowerAwardLevel === 0 && this.newTimeAwardLevel === 0 ? 'Gold' : 'Silver'));
		}

		// If the power award is new, animate it in
		if (this.oldPowerAwardLevel === 0 && this.newPowerAwardLevel > 0) {
			addQueue.push('Power' + (this.newPowerAwardLevel === 1 ? 'Silver' : 'Gold'));
		}

		// If the time award is new, animate it in
		if (this.oldTimeAwardLevel === 0 && this.newTimeAwardLevel > 0) {
			addQueue.push('Clock' + (this.newTimeAwardLevel === 1 ? 'Silver' : 'Gold'));
		}

		this.processNewAwards(addQueue, callback);
	},

	processNewAwards: function (queue, callback) {
		if (queue.length === 0) {
			callback.call(this);
			return;
		}

		addEntry = queue.shift();

		switch (addEntry.match(/^(Star|Power|Clock)/)[1]) {
			case 'Star':
				this.completionAward = new View.Sprite('Menu.Big' + addEntry, 0, 200, 0, {size: 0});
				this.completionAward.animate({size: 1}, {duration: 1000});
				this.addChildren(this.completionAward);
				break;

			case 'Power':
				this.powerAward = new View.Sprite('Menu.Big' + addEntry, -this.awardSpacing, 200, 0, {size: 0, offset: new Math.Vector(82.5, 42)});
				this.powerAward.animate({size: 1}, {duration: 1000});
				this.insertBelow(this.powerAward, this.completionAward);
				break;

			case 'Clock':
				this.timeAward = new View.Sprite('Menu.Big' + addEntry, this.awardSpacing, 200, 0, {size: 0});
				this.timeAward.animate({size: 1}, {duration: 1000});
				this.insertBelow(this.timeAward, this.completionAward);
				break;
		}

		this.schedule(function () {
			main.levelController.completionScreen.processNewAwards(queue, callback);
		}, 1000);
	},

	upgradeAwards: function (callback) {
		if (this.oldPowerAwardLevel + this.newPowerAwardLevel !== 3 && this.oldTimeAwardLevel + this.newTimeAwardLevel !== 3) {
			callback.call(this);
			return;
		}

		if (this.oldPowerAwardLevel === 1 && this.newPowerAwardLevel === 2) {
			this.powerAward.animate({widthScale: 0}, {duration: 500, callback: function () {
				this.setSource('Menu.BigPowerGold');
				this.animate({widthScale: 1}, {duration: 500});
			}});
		}

		if (this.oldTimeAwardLevel === 1 && this.newTimeAwardLevel === 2) {
			this.timeAward.animate({widthScale: 0}, {duration: 500, callback: function () {
				this.setSource('Menu.BigClockGold');
				this.animate({widthScale: 1}, {duration: 500});
			}});
		}

		this.schedule(function () {
			callback.call(this);
		}, 1000);
	},

	checkUpgradeToGoldStar: function (callback) {
		if (this.newPowerAwardLevel !== 2 || this.newTimeAwardLevel !== 2 || this.oldTimeAwardLevel + this.oldPowerAwardLevel === 4) {
			callback.call(this);
			return;
		}

		this.powerAward.animate({x: 0}, {duration: 500, easing: 'quadIn'});
		this.timeAward.animate({x: 0}, {duration: 500, easing: 'quadIn'});

		this.schedule(function () {
			var oldStar;

			oldStar = this.completionAward;
			this.completionAward = new View.Sprite('Menu.BigStarGold', 0, 200, 0, {size: 0.5});
			this.completionAward.animate({size: 1}, {duration: 500});
			this.insertBelow(this.completionAward, oldStar);

			[oldStar, this.powerAward, this.timeAward].forEach(function () {
				this.animate({size: 1.3, opacity: 0}, {duration: 500, easing: 'quadOut', callback: function () {
					engine.purge(this);
				}});
			});
		}, 500);

		//console.log('Animate to gold star');

		this.schedule(callback, 1000);
	},

	remove: function () {
		this.children.forEach(function () {
			if (this.disable) {
				this.disable();
			}

			this.animate({opacity: 0},{duration: 400});
		});

		/*main.backButton.enable();
		main.backButton.animate({opacity: 1}, {duration: 200});
		main.restartButton.enable();
		main.restartButton.animate({opacity: 1}, {duration: 200});*/


		this.schedule(function () {
			engine.purge(this);
		}, 500);
	}
});