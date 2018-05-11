var img = document.querySelectorAll('img');



var i;
var popup = document.getElementById('js--img-popup');
var popupImg = document.getElementById('js--popup-img');
for(i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
        console.log(i);
        var popup = document.getElementById('js--img-popup');
        var popupImg = document.getElementById('js--popup-img');
        popup.style.display = 'block';
        popup.style.opacity = '1';
        popup.style.transform = 'scale(1)';
        console.log(this.src);
        console.log(popupImg);
        popupImg.src = this.src;
    });
}

document.getElementById('js--popup-close').addEventListener('click', function() {
    popup.style.display = 'none';
    popup.style.opacity = '0';
    popup.style.transform = 'scale(.7)';
});