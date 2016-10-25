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

function sumGroups() {
    var groups = {};

    for (var i = 0; i < lines.length; i++) {
        numbers = lines[i].getNumbers();

        numbers.forEach(function(number){
            number.group = number.group.toLowerCase();
            if (typeof groups[number.group] == 'undefined') {
                groups[number.group] = 0;
            }

            groups[number.group] += number.number;
        })        
    }

    var r = [];
    for (var g in groups) {
        if (groups.hasOwnProperty(g)) {
            r.push(groups[g]+(g == '__clean__' ? '' : g));
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
    },

    getSums: function() {
        return sumGroups();
    }
}