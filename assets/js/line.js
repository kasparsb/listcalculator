function Line(text) {
    this.text = text;

    this.numbers = this.findNumbers();
}

Line.prototype = {
    /**
     * Meklējam visas skaitliskās vērtības textā
     */
    findNumbers: function() {
        var r = [];
        // Sadalam pa vārdiem
        var words = this.text.split(' ');
        var number;

        for (var i = 0; i < words.length; i++) {

            number = this.parseNumber(words[i]);

            if (number) {
                r.push(number);
            }
        }

        return r;
    },

    parseNumber: function(text) {
        text = text.trim();

        // Meklējam skaitlisko vērtību


        number = parseFloat(text);

        if (!isNaN(number)) {
            return {
                group: '',
                number: number
            }
        }

        return false;
    },

    /**
     * Extract number from word by this pattern
     *     numbers .|, numbers whitespace | end | anything but number
     */
    extractNumberFromWord: function(text) {
        var re = /(^|([^0-9])*)([0-9]*)([.|,]*)([0-9]*)($|([^0-9])*$)/;
        text.mach()
    },

    getNumbers: function() {
        return this.numbers;
    }
}

module.exports = Line;