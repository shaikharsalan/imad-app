console.log('Loaded!');

//Change html content
var element = document.getElementById('change_text');
element.innerHTML = 'this text is change by javascript';

//Move element on click 
var img = document.getElementById('dina');
var marginleft = 0;
function moveRight(){
    marginleft = marginleft + 10;
    img.style.marginleft = marginleft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};