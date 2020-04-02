const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click', () => {

        //Toggle Nav
        nav.style.transitionDuration = "0.5s";

        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }

            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

    //Smooth on Resize
    window.addEventListener('resize', () => {
        nav.style.transitionDuration = "0s";
    })
    window.addEventListener('blur', () => {
        nav.style.transitionDuration = "0s";
    })
    window.addEventListener('focus', () => {
        nav.style.transitionDuration = "0s";
    })
}

navSlide();

function changeOpacity(input, opacity) {
    const target = document.querySelector(input);
    const currentOpacity = window.getComputedStyle(target).opacity;

    if (currentOpacity < opacity) {
        target.style.opacity = opacity;
    }
}

window.onload = function () {
    changeOpacity(".carousel-overlay-initial", 0.5);
    changeOpacity("h1", 1);
    changeOpacity("header > div > p", 1);
}

function scrollAppear(inputHidden, inputActive) {
    const welcomeText = document.getElementsByClassName(inputHidden);

    for (let element of welcomeText) {

        let introPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (introPosition < screenPosition / 1.25) {
            element.classList.add(inputActive);
        }
    }
}

function scrollAppearWelcome() {
    scrollAppear("text-hidden", "text-active")
}

function scrollAppearCoding() {
    scrollAppear("text-hidden-from-below", "text-active")
}

window.addEventListener('scroll', scrollAppearWelcome);
window.addEventListener('scroll', scrollAppearCoding);

function scrollSlide(start, inter, end) {
    const scrollImg = document.getElementsByClassName(start);

    let introPosition = scrollImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1.5) {
        for (let i = 1; i < scrollImg.length + 1; i++) {
            setTimeout(function () {
                scrollImg[scrollImg.length - i].classList.add(inter);
            }, i * 250);
            setTimeout(function () {
                scrollImg[scrollImg.length - i].classList.add(end);
            }, i * 250 + 1500);
        }
    }
}

function scrollSlideReverse(start, inter, end) {
    const scrollImg = document.getElementsByClassName(start);

    let introPosition = scrollImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1) {
        for (let i = 1; i < scrollImg.length + 1; i++) {
            setTimeout(function () {
                scrollImg[i - 1].classList.add(inter);
            }, i * 250 + 250);
            setTimeout(function () {
                scrollImg[i - 1].classList.add(end);
            }, i * 250 + 1750);
        }
    }
}

function scrollSlideWelcome() {
    scrollSlide("welcome-img-hidden", "welcome-img-inter", "welcome-img-active")
}

function scrollSlideHobbies() {
    scrollSlide("hobbies-list-item-hidden", "hobbies-list-item-inter", "hobbies-list-item-active")
}

function scrollSlideArchitectureLarge() {
    scrollSlide("architecture-img-large-hidden", "architecture-img-large-inter", "architecture-img-large-active")
}

function scrollSlideArchitectureSmall() {
    scrollSlideReverse("architecture-img-small-hidden", "architecture-img-small-inter", "architecture-img-small-active")
}

function scrollSlideHoriontalLine() {
    scrollSlideReverse("hl", "hr-inter", "hr-active")
}

window.addEventListener('scroll', scrollSlideWelcome);
window.addEventListener('scroll', scrollSlideHobbies);
window.addEventListener('scroll', scrollSlideArchitectureLarge);
window.addEventListener('scroll', scrollSlideArchitectureSmall);
window.addEventListener('scroll', scrollSlideHoriontalLine);


function scrollGrow(start, end) {
    const hobbiesImg = document.getElementsByClassName(start);

    let introPosition = hobbiesImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1.5) {
        hobbiesImg[0].classList.add(end);
    }
}

function scrollGrowHobbies() {
    scrollGrow("hobbies-img-hidden", "hobbies-img-active")
}

window.addEventListener('scroll', scrollGrowHobbies);


function setDivHeight() {
    let div = document.getElementById("hobbies-div-img");
    let divWidth = div.offsetWidth;
    let imgWidth = document.getElementsByClassName("hobbies-img-hidden")[0].offsetWidth;
    let imgHeight = document.getElementsByClassName("hobbies-img-hidden")[0].offsetHeight;

    let imgProportion = imgHeight / imgWidth;
    let divHeight = divWidth * imgProportion;

    div.style.minHeight = `${divHeight}px`;
}

setDivHeight();
window.addEventListener('resize', setDivHeight);
window.addEventListener('focus', setDivHeight);

function splatterTimeOpen() {
    let splatterBlack = document.querySelector(".hobbies-popup-splatter");
    let splatterBlackPngs = document.querySelectorAll(".hobbies-popup-splatter img")

    let galleryImg = document.querySelector(".hobbies-popup-img")
    let galleryImgJpgs = document.querySelectorAll(".hobbies-popup-img-line img")

    let clickImg = document.querySelector(".hobbies-img-hidden")
    let clickExit = document.querySelector(".exit")
    let backgroundBlack = document.querySelector(".hobbies-popup-black")
    let delayAmount = 125;


    clickImg.addEventListener('click', () => {
        splatterBlack.classList.toggle('toggleClipPath');
        galleryImg.classList.toggle('toggleClipPath');

        for (let i = 1; i < splatterBlackPngs.length + 1; i++) {
            setTimeout(function () {
                splatterBlackPngs[i - 1].classList.toggle('toggleOpacity')
            }, i * delayAmount);
        }
        setTimeout(function () {
            backgroundBlack.classList.toggle('toggleOpacity');
            clickExit.classList.toggle('toggleOpacity');
        }, (splatterBlackPngs.length * delayAmount) + delayAmount);

        for (let j = 1; j < galleryImgJpgs.length + 1; j++) {
            setTimeout(function () {
                galleryImgJpgs[j - 1].classList.toggle('toggleOpacity');
            }, (j * delayAmount) + ((splatterBlackPngs.length + 1) * delayAmount));
        }
    });
}

function splatterTimeClose() {
    let splatterBlack = document.querySelector(".hobbies-popup-splatter");
    let splatterBlackPngs = document.querySelectorAll(".hobbies-popup-splatter img")

    let galleryImg = document.querySelector(".hobbies-popup-img")
    let galleryImgJpgs = document.querySelectorAll(".hobbies-popup-img-line img")

    let clickExit = document.querySelector(".exit")
    let backgroundBlack = document.querySelector(".hobbies-popup-black")
    let delayAmount = 125;

    clickExit.addEventListener('click', () => {
        for (let j = 1; j < galleryImgJpgs.length + 1; j++) {
            setTimeout(function () {
                galleryImgJpgs[galleryImgJpgs.length - j].classList.toggle('toggleOpacity');
            }, j * delayAmount);
        }

        setTimeout(function () {
            backgroundBlack.classList.toggle('toggleOpacity');
            clickExit.classList.toggle('toggleOpacity');
        }, (galleryImgJpgs.length * delayAmount) + delayAmount);

        for (let i = 1; i < splatterBlackPngs.length + 1; i++) {
            setTimeout(function () {
                splatterBlackPngs[splatterBlackPngs.length - i].classList.toggle('toggleOpacity')
            }, (i * delayAmount) + ((galleryImgJpgs.length + 1) * delayAmount));
        }
        setTimeout(function () {
            galleryImg.classList.toggle('toggleClipPath');
            splatterBlack.classList.toggle('toggleClipPath');
        }, (splatterBlackPngs.length * delayAmount) + ((galleryImgJpgs.length + 2) * delayAmount));
    });
}

splatterTimeOpen()
splatterTimeClose()

function clickChange(title, para1, para2, inputSmallImg) {
    let ptag = document.getElementsByClassName("architecture-text-change");
    let smallImg = document.getElementById(inputSmallImg)
    let largeImg = document.getElementsByClassName("architecture-img-large-hidden");


    smallImg.addEventListener('click', () => {
        ptag[0].innerHTML = title;
        ptag[1].innerHTML = para1;
        ptag[2].innerHTML = para2;

        largeImg[0].src = smallImg.src;
    });
}

let architectureTitle1 = "Sentosa-Brani Masterplan"
let architectureTitle2 = "Shenzhen Bay Avenue East Extension"
let architectureTitle3 = "HKIA Sky Bridge"
let architectureTitle4 = "26-32 High Street, Esher"
let architectureTitle5 = "New Road, Esher"

let architecturePara1a = "Image 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex possimus ipsam impedit perspiciatis magni repudiandae sed, cumque recusandae iure inventore, quaerat tempore explicabo architecto eos unde quo ipsa ullam. Incidunt sint, officiis accusamus aperiam soluta commodi id! Illum, libero hic tempora consequatur, reiciendis quae itaque ducimus soluta tenetur animi, iure quam maxime quod."
let architecturePara2a = "Image 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex possimus ipsam impedit perspiciatis magni repudiandae sed, cumque recusandae iure inventore, quaerat tempore explicabo architecto eos unde quo ipsa ullam. Incidunt sint, officiis accusamus aperiam soluta commodi id! Illum, libero hic tempora consequatur, reiciendis quae itaque ducimus soluta tenetur animi, iure quam maxime quod."
let architecturePara3a = "Image 3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex possimus ipsam impedit perspiciatis magni repudiandae sed, cumque recusandae iure inventore, quaerat tempore explicabo architecto eos unde quo ipsa ullam. Incidunt sint, officiis accusamus aperiam soluta commodi id! Illum, libero hic tempora consequatur, reiciendis quae itaque ducimus soluta tenetur animi, iure quam maxime quod."
let architecturePara4a = "Image 4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex possimus ipsam impedit perspiciatis magni repudiandae sed, cumque recusandae iure inventore, quaerat tempore explicabo architecto eos unde quo ipsa ullam. Incidunt sint, officiis accusamus aperiam soluta commodi id! Illum, libero hic tempora consequatur, reiciendis quae itaque ducimus soluta tenetur animi, iure quam maxime quod."
let architecturePara5a = "Image 5 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur ex possimus ipsam impedit perspiciatis magni repudiandae sed, cumque recusandae iure inventore, quaerat tempore explicabo architecto eos unde quo ipsa ullam. Incidunt sint, officiis accusamus aperiam soluta commodi id! Illum, libero hic tempora consequatur, reiciendis quae itaque ducimus soluta tenetur animi, iure quam maxime quod."

let architecturePara1b = "Image 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odit, quos beatae fuga libero, provident quam quisquam, error eos dolorem nihil! Optio tenetur porro pariatur, dolore non sapiente aliquid voluptates dolores quisquam voluptatum eos nobis ducimus! Architecto, aperiam nesciunt nobis modi mollitia error? Laboriosam quisquam sint eos illum! Aliquam, iure."
let architecturePara2b = "Image 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odit, quos beatae fuga libero, provident quam quisquam, error eos dolorem nihil! Optio tenetur porro pariatur, dolore non sapiente aliquid voluptates dolores quisquam voluptatum eos nobis ducimus! Architecto, aperiam nesciunt nobis modi mollitia error? Laboriosam quisquam sint eos illum! Aliquam, iure."
let architecturePara3b = "Image 3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odit, quos beatae fuga libero, provident quam quisquam, error eos dolorem nihil! Optio tenetur porro pariatur, dolore non sapiente aliquid voluptates dolores quisquam voluptatum eos nobis ducimus! Architecto, aperiam nesciunt nobis modi mollitia error? Laboriosam quisquam sint eos illum! Aliquam, iure."
let architecturePara4b = "Image 4 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odit, quos beatae fuga libero, provident quam quisquam, error eos dolorem nihil! Optio tenetur porro pariatur, dolore non sapiente aliquid voluptates dolores quisquam voluptatum eos nobis ducimus! Architecto, aperiam nesciunt nobis modi mollitia error? Laboriosam quisquam sint eos illum! Aliquam, iure."
let architecturePara5b = "Image 5 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea odit, quos beatae fuga libero, provident quam quisquam, error eos dolorem nihil! Optio tenetur porro pariatur, dolore non sapiente aliquid voluptates dolores quisquam voluptatum eos nobis ducimus! Architecto, aperiam nesciunt nobis modi mollitia error? Laboriosam quisquam sint eos illum! Aliquam, iure."

clickChange(architectureTitle1, architecturePara1a, architecturePara1b, "architecture-img-1");
clickChange(architectureTitle2, architecturePara2a, architecturePara2b, "architecture-img-2");
clickChange(architectureTitle3, architecturePara3a, architecturePara3b, "architecture-img-3");
clickChange(architectureTitle4, architecturePara4a, architecturePara4b, "architecture-img-4");
clickChange(architectureTitle5, architecturePara5a, architecturePara5b, "architecture-img-5");

function setLineDimensions() {
    let div = document.getElementById("column-line-resize");
    let divWidth = div.offsetWidth;
    let divHeight = div.offsetHeight;

    let verticalLine = document.getElementsByClassName("vl");
    let horizontalLine = document.getElementsByClassName("hl");

    let introPosition = horizontalLine[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1.5) {
        for (let element of verticalLine) {
            element.style.height = `${divHeight}px`;
        }

        for (let element of horizontalLine) {
            element.style.width = `${divWidth}px`;
        }
    }
}

window.addEventListener('scroll', setLineDimensions);
window.addEventListener('resize', setLineDimensions);

function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
}

function changeHover(img, path) {
    if (img) {
        img.src = `${path}`;
    }
}

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

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300
});

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

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

function animationOnScroll(element, animationName1, animationName2, animationName3) {
    const node = document.getElementsByClassName(element);

    let introPosition = node[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 2) {
        for (let item of node){
            item.classList.add(animationName1, animationName2, animationName3);
        }
    }
}

function animationOnScrollBlog(){
    animationOnScroll("daily-blog", "animated", "rotateInDownRight")
}

function animationOnScrollContact(){
    animationOnScroll("contact-me", "animated", "bounceIn")
}

window.addEventListener('scroll', animationOnScrollBlog);
window.addEventListener('scroll', animationOnScrollContact);