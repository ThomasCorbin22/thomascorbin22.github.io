// Function to change the navbar to a burger on smaller screens
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

// Change opacity of a selected element
function changeOpacity(input, opacity) {
    const target = document.querySelector(input);
    const currentOpacity = window.getComputedStyle(target).opacity;

    if (currentOpacity < opacity) {
        target.style.opacity = opacity;
    }
}

// Make an element appear on scroll
function scrollAppear(inputHidden, inputActive) {
    const welcomeText = document.getElementsByClassName(inputHidden);

    for (let element of welcomeText) {

        let toTopOfWindow = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (toTopOfWindow < windowHeight / 1.25) {
            element.classList.add(inputActive);
        }
    }
}

// Make elements slide into the screen on scroll
function scrollSlide(start, inter, end) {
    const scrollImg = document.getElementsByClassName(start);

    let toTopOfWindow = scrollImg[0].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (toTopOfWindow < windowHeight / 1.5) {
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

// Make elements slide into the screen on scroll on reverse order
function scrollSlideReverse(start, inter, end) {
    const scrollImg = document.getElementsByClassName(start);

    let toTopOfWindow = scrollImg[0].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (toTopOfWindow < windowHeight / 1) {
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

// Make element grow on scroll
function scrollGrow(start, end) {
    const hobbiesImg = document.getElementsByClassName(start);

    let toTopOfWindow = hobbiesImg[0].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (toTopOfWindow < windowHeight / 1.5) {
        hobbiesImg[0].classList.add(end);
    }
}

// Set div height of scrollGrow element to be at max size (so the div doesnt resize, just the image)
function setDivHeight() {
    let div = document.getElementById("hobbies-div-img");
    let divWidth = div.offsetWidth;
    let imgWidth = document.getElementsByClassName("hobbies-img-hidden")[0].offsetWidth;
    let imgHeight = document.getElementsByClassName("hobbies-img-hidden")[0].offsetHeight;

    let imgProportion = imgHeight / imgWidth;
    let divHeight = divWidth * imgProportion;

    div.style.minHeight = `${divHeight}px`;
}

// Filling the screen with black and making the carousel of images
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
        splatterBlack.classList.toggle('toggle-clip-path');
        galleryImg.classList.toggle('toggle-clip-path');

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

// Closing the spattertime carousel
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
            galleryImg.classList.toggle('toggle-clip-path');
            splatterBlack.classList.toggle('toggle-clip-path');
        }, (splatterBlackPngs.length * delayAmount) + ((galleryImgJpgs.length + 2) * delayAmount));
    });
}

// Change image and text on click
function clickChange(title, sub, para1, para2, inputSmallImg) {
    let ptag = document.getElementsByClassName("architecture-text-change");
    let smallImg = document.getElementById(inputSmallImg)
    let largeImg = document.getElementsByClassName("architecture-img-large-hidden");


    smallImg.addEventListener('click', () => {
        ptag[0].innerHTML = title;
        ptag[1].innerHTML = sub;
        ptag[2].innerHTML = para1;
        ptag[3].innerHTML = para2;

        largeImg[0].src = smallImg.src;
    });
}

// Resize the horizontal and vertical rules based on 
function setLineDimensions() {
    let div = document.getElementById("column-line-resize");
    let divWidth = div.offsetWidth - 30;
    let divHeight = div.offsetHeight;

    let verticalLine = document.getElementsByClassName("vl");
    let horizontalLine = document.getElementsByClassName("hl");

    let toTopOfWindow = horizontalLine[0].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (toTopOfWindow < windowHeight / 1.5) {
        for (let element of verticalLine) {
            element.style.height = `${divHeight}px`;
        }

        for (let element of horizontalLine) {
            element.style.width = `${divWidth}px`;
        }
    }
}

// Validate form to make sure we get proper values.
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

// Make animate CSS start on scroll
function animationOnScroll(element, animationName1, animationName2, screenWidth) {
    const node = document.getElementsByClassName(element);

    let toTopOfWindow = node[0].getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (toTopOfWindow < windowHeight / 2 && screen.width > screenWidth) {
        for (let item of node) {
            item.classList.add(animationName1, animationName2);
        }
    }
}

// Callback functions for event listeners
function scrollAppearWelcome() {
    scrollAppear("text-hidden", "text-active")
}

function scrollAppearCoding() {
    scrollAppear("text-hidden-from-below", "text-active")
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


function scrollGrowHobbies() {
    scrollGrow("hobbies-img-hidden", "hobbies-img-active")
}

function animationOnScrollBlog() {
    animationOnScroll("daily-blog", "animated", "rotateInDownRight", 577)
}

function animationOnScrollContact() {
    animationOnScroll("contact-me", "animated", "bounceIn", 0)
}