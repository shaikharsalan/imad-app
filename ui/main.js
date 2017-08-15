console.log('Loaded!');

//Change html content
var element = document.getElementById('change_text');
element.innerHTML = 'this text is change by javascript';

//Move element on click 
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,50);
};