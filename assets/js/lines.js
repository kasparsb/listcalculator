var Line = require('./line');

var lines = [];

/**
 * Sadalām tekstu pa rindām
 */
function divideByTextLines(content) {
    return content.split(/[\r\n]+/g);
}

function updateLines(text) {
    lines = [];
    
    var textLines = divideByTextLines(text);

    for (var i = 0; i < textLines.length; i++) {
        lines.push(new Line(textLines[i]));
    }
}

function sumLinesNumbers() {
    var numbers, r = 0;
    for (var i = 0; i < lines.length; i++) {
        numbers = lines[i].getNumbers();

        for (var j = 0; j < numbers.length; j++) {
            r += numbers[j].number;
        }
    }
    return r;
}

module.exports = {
    setText: function(text) {
        updateLines(text);
    },

    /**
     * Atgriež visu līnijā atrasto skaitļu summu
     */
    getSum: function() {
        return sumLinesNumbers();
    }
}