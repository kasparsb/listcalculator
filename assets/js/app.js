var Input = require('./input');
var Lines = require('./lines');

var results = document.querySelector('.calculator__results');

Input.init();
Input.onChange(function(content){
    Lines.setText(content);

    results.innerHTML = Lines.getSums().join(' ');
})