var slideIndex = 0;
var timeout;
function carousel() {
    plusDivs(1);
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentSlide(n) {
    slideIndex = n;
    showDivs(n);
}

function showDivs(n) {
    clearTimeout(timeout);
    var i;
    var x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("highlightDot");
    if (n > x.length) 
    {
        slideIndex = 1
    }
    if (n < 1) 
    {
        slideIndex = x.length;
    } 

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    x[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    timeout = setTimeout(carousel, 7000); // Change image every 7 seconds
}