$(document).ready(function () {
    $(".icon-map").mouseover(function () {
        changeHover(this, "images/contact-me/location-hover-01.png")
    }).mouseout(function () {
        changeHover(this, "images/contact-me/location-01.png")
    });
    $(".icon-phone").mouseover(function () {
        changeHover(this, "images/contact-me/phone-hover-01.png")
    }).mouseout(function () {
        changeHover(this, "images/contact-me/phone-01.png")
    });
    $(".icon-envelope").mouseover(function () {
        changeHover(this, "images/contact-me/email-hover-01.png")
    }).mouseout(function () {
        changeHover(this, "images/contact-me/email-01.png")
    });
})

window.onload = function () {
    changeOpacity(".carousel-overlay-initial", 0.5);
    changeOpacity("h1", 1);
    changeOpacity("header > div > p", 1);
}

navSlide();
setDivHeight();
splatterTimeOpen()
splatterTimeClose()

window.addEventListener('scroll', scrollAppearWelcome);
window.addEventListener('scroll', scrollAppearCoding);
window.addEventListener('scroll', scrollSlideWelcome);
window.addEventListener('scroll', scrollSlideHobbies);
window.addEventListener('scroll', scrollSlideArchitectureLarge);
window.addEventListener('scroll', scrollSlideArchitectureSmall);
window.addEventListener('scroll', scrollSlideHoriontalLine);
window.addEventListener('scroll', scrollGrowHobbies);
window.addEventListener('resize', setDivHeight);
window.addEventListener('focus', setDivHeight);
window.addEventListener('scroll', setLineDimensions);
window.addEventListener('resize', setLineDimensions);
window.addEventListener('scroll', animationOnScrollBlog);
window.addEventListener('scroll', animationOnScrollContact);
window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        button.style = "display: none ";
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

clickChange(architectureTitle1, architecturePara1a, architecturePara1b, "architecture-img-1");
clickChange(architectureTitle2, architecturePara2a, architecturePara2b, "architecture-img-2");
clickChange(architectureTitle3, architecturePara3a, architecturePara3b, "architecture-img-3");
clickChange(architectureTitle4, architecturePara4a, architecturePara4b, "architecture-img-4");
clickChange(architectureTitle5, architecturePara5a, architecturePara5b, "architecture-img-5");

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

// // Change Navbar to be transparent
// const navBar = document.querySelector('#navbar');
// window.addEventListener('scroll', function() {
//     if (window.scrollY > 100) {
//         navBar.style.backgroundColor = "transparent";
//     }
//     if (window.scrollY <= 100) {
//         navBar.style.backgroundColor = "#282e34";
//     }
// })