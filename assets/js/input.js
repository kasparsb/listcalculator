var _ = require('underscore');

var onChangeCb, input;

function setEvents() {
    input.addEventListener('input', _.debounce(handleChange, 100));
}

function handleChange() {
    if (onChangeCb) {        
        onChangeCb(input.value);
    }
}

module.exports = {
    init: function() {
        input = document.querySelector('.calculator__textarea');
        setEvents();
    },
    onChange: function(cb) {
        onChangeCb = cb;
    }
}