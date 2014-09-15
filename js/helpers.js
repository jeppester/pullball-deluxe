Object.prototype.importProperties = function (from, copyIfPossible) {
    var i;

    for (i in from) {
        if (from.hasOwnProperty(i)) {
            if (i === undefined) {continue; }

            if (!copyIfPossible || typeof from[i] !== 'object') {
                this[i] = from[i];
            }
            else {
                if (from[i].copy) {
                    this[i] = from[i].copy();
                }
                else if (from[i].clone) {
                    this[i] = from[i].clone();
                }
                else {
                    this[i] = from[i];
                }
            }
        }
    }
};
