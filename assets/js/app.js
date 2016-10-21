var Input = require('./input');
var Lines = require('./lines');

Input.init();
Input.onChange(function(content){
    Lines.setText(content);

    document.querySelector('.calculator__results').innerHTML = Lines.getSum();
})