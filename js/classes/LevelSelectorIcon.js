LevelSelectorIcon = function (entry) {
	var caller, hash, folder, i, levelsCompleted, levelsTotal, stats;

	View.Container.call(this);
	this.entry = entry;

	folder = this.entry.folderName ? this.entry : main.levelController.levelList[this.entry.fId];

	this.levelsCount = 0;
	this.silverTimeCount = 0;
	this.goldTimeCount = 0;
	this.silverPowerCount = 0;
	this.goldPowerCount = 0;
	this.completedCount = 0;
	this.fullyCompletedCount = 0;

	for (i in main.storage.levelStats) {
		if (main.storage.levelStats.hasOwnProperty(i)) {
			if (new RegExp('^' + folder.folderName + '\\/').test(i)) {
				stats = main.storage.levelStats[i];

				this.completedCount +=  stats.completed * 1;
				this.fullyCompletedCount += (stats.fullyCompleted ? 1: 0);

				this.goldPowerCount += (stats.powerAward === 2 || stats.fullyCompleted) * 1;
				this.silverPowerCount += (stats.powerAward >= 1 || stats.fullyCompleted) * 1;

				this.goldTimeCount += (stats.timeAward === 2 || stats.fullyCompleted) * 1;
				this.silverTimeCount += (stats.timeAward >= 1 || stats.fullyCompleted) * 1;
			}
		}
	}

	this.levelsCount = folder.levels.length;

	if (this.entry.fileName) {
		// Check if level is unlocked
		hash = folder.folderName + '/' + this.entry.fileName;
		this.stats = main.storage.levelStats[hash];
		this.unlocked = this.entry.lId < this.completedCount + 3 || folder.folderName === '10_Custom';
	}
	else {
		// Check if folder has been partially or fully completed
		this.stats = {
			completed: this.levelsCount === this.completedCount,
			powerAward: 0,
			timeAward: 0,
			fullyCompleted: this.levelsCount === this.fullyCompletedCount,
		};

		if (this.levelsCount === this.goldPowerCount) {
			this.stats.powerAward = 2;
		}
		else if (this.levelsCount === this.silverPowerCount) {
			this.stats.powerAward = 1;
		}

		if (this.levelsCount === this.goldTimeCount) {
			this.stats.timeAward = 2;
		}
		else if (this.levelsCount === this.silverTimeCount) {
			this.stats.timeAward = 1;
		}
	}

	// Load preview image and show it
	if (this.entry.screenShot && (this.entry.folderName || this.unlocked)) {
		caller = this;

		if (this.entry.folderName) {
			loader.loadExternalResource('Folder.' + this.entry.fId, 'levels/' + this.entry.screenShot, function () {
				caller.makeThumb('Folder.' + caller.entry.fId);
			});
		}
		else {
			loader.loadExternalResource('Level.' + this.entry.fId + '.' + this.entry.lId, 'levels/' + folder.folderName + '/' + this.entry.screenShot, function () {
				caller.makeThumb('Level.' + caller.entry.fId + '.' + caller.entry.lId);
			});
		}
	}
	else if (this.entry.folderName || this.unlocked) {
		this.makeThumb('Menu.LevelThumb');
	}
	else {
		this.makeThumb('Menu.LevelLocked');
	}
};

LevelSelectorIcon.prototype = Object.create(View.Container.prototype);

LevelSelectorIcon.prototype.import({
	makeThumb: function (thumbNail) {
		var shadow, thumb, text, text2, lock, awards;

		this.addChildren(
			shadow = new View.Sprite('Menu.LevelShadow', 3, 3, 0, {opacity: 0}),
			thumb = new View.Sprite(thumbNail, 5, 0, 0, {opacity: 0}),
			text = new View.TextBlock((this.entry.fileName || this.entry.folderName).replace(/^\d*_/, '').replace(/\.(lvl|js)$/, ''), 5, 57, 160, {opacity: 0, font: "16px Verdana, Arial", color: '#fff', offset: new Math.Vector(82, 15)})
		);

		if (this.entry.folderName) {
			text2 = new View.TextBlock(this.completedCount + '/' + this.levelsCount, 5, 57, 160, {opacity: 0, alignment: 'right', font: "16px Verdana, Arial", color: '#fff', offset: new Math.Vector(82, 15)});
			this.addChildren(text2);
			text2.animate({opacity: 1}, {duration: 500});
		}
		else if (!this.unlocked) {
			this.addChildren(
				lock = new View.Sprite('Menu.Lock', 0, 0, 0, {size: 0})
			);

			lock.animate({size: 1}, {duration: 500});
		}

		awards = [];
		if (this.stats) {

			if (this.stats.fullyCompleted) {
				awards.push(new View.Sprite('Menu.StarGold', 0, 0, 0, {size: 0}));
			}
			else {
				if (this.stats.completed) {
					awards.push(new View.Sprite('Menu.StarSilver', 0, 0, 0, {size: 0}));
				}
				if (this.stats.powerAward) {
					awards.push(new View.Sprite('Menu.Power' + (this.stats.powerAward === 2 ? 'Gold' : 'Silver'), -50, 0, 0, {size: 0}));
				}
				if (this.stats.timeAward) {
					awards.push(new View.Sprite('Menu.Clock' + (this.stats.timeAward === 2 ? 'Gold' : 'Silver'), 50, 0, 0, {size: 0}));
				}
			}
		}

		thumb.animate({x: 0, opacity: 1}, {duration: 500, callback: function () {
			shadow.animate({opacity: 0.2}, {duration: 300});

			if (awards.length) {
				this.addChildren.apply(this, awards);

				awards.forEach(function (a) {
					a.animate({size: 1}, {duration: 300});
				});
			}
		}});
		text.animate({x: 0, opacity: 1}, {duration: 500});

	},

	remove: function () {
		this.children.forEach(function (c) {
			c.animate({opacity: 0}, {duration: 400});
		});

		this.animate({size: 1.1}, {duration: 400, callback: function () {
			engine.purge(this);
		}});
	}
});
