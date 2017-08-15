console.log('Loaded!');

//Change html content
var element = document.getElementById('change_text');
element.innerHTML = 'this text is change by javascript';

//Move element on click 
var img = document.getElementById('dina');
img.onClick = function(){
    img.style.marginleft = '100px';
}