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

            number = this.extractNumberFromWord(words[i]);

            if (number) {
                r.push(number);
            }
        }

        return r;
    },

    /**
     * Extract number from word by this pattern
     *     numbers .|, numbers whitespace | end | anything but number
     */
    extractNumberFromWord: function(text) {
        var methods = ['extractClean', 'extractPostfixed', 'extractPrefixed']
        var n = false;

        // Meklējam pirmo metodi, kura spēj atrast kombināciju
        for (var i = 0; i < methods.length; i++) {
            n = this[methods[i]](text);
            if (n) {
                break;
            }
        }

        return n;
    },

    extractClean: function(word) {
        var re = /^([0-9]+[\.\,]?[0-9]*)$/;
        var m = word.match(re);

        if (m != null && m.length > 1) {
            return {
                group: '__clean__',
                number: parseFloat(m[1].replace(',', '.'))
            }
        }

        return false;
    },

    extractPostfixed: function(word) {
        var re = /^([^0-9]+)([0-9]+[\.\,]?[0-9]*)$/;
        var m = word.match(re);

        if (m != null && m.length > 2) {
            return {
                group: m[1],
                number: parseFloat(m[2].replace(',', '.'))
            }
        }

        return false;
    },

    extractPrefixed: function(word) {
        var re = /^([0-9]+[\.\,]?[0-9]*)([^0-9]+)$/;
        var m = word.match(re);

        if (m != null && m.length > 2) {
            return {
                group: m[2],
                number: parseFloat(m[1].replace(',', '.'))
            }
        }

        return false;
    },

    getNumbers: function() {
        return this.numbers;
    }
}

module.exports = Line;