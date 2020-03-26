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
            if (link.style.animation){
                link.style.animation = '';
            }
            
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
            }
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });

    //Smooth on Resize
    window.addEventListener('resize', () => {
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

window.onload = function() {
    changeOpacity(".carousel-overlay-initial", 0.5);
    changeOpacity("h1", 1);
    changeOpacity("header > div > p", 1); 
}

function scrollAppear(){
    const welcomeText = document.getElementsByClassName("welcome-text-hidden");

    for (let element of welcomeText){
    
        let introPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (introPosition < screenPosition / 1.5){        
            element.classList.add("welcome-text-active");
        } 
    }
}

window.addEventListener('scroll', scrollAppear);

function scrollSlide(start, inter, end){
    const scrollImg = document.getElementsByClassName(start);
    
    let introPosition = scrollImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1.5){ 
        for (let i = 1; i < scrollImg.length + 1; i++) {
            setTimeout(function(){
                scrollImg[scrollImg.length - i].classList.add(inter);
           }, i * 250);
            setTimeout(function(){
                scrollImg[scrollImg.length - i].classList.add(end);
           }, i * 250 + 1500);
        }
    }
}

function scrollSlideWelcome() {
    scrollSlide("welcome-img-hidden", "welcome-img-inter", "welcome-img-active")
}

function scrollSlideHobbies() {
    scrollSlide("hobbies-list-item-hidden", "hobbies-list-item-inter", "hobbies-list-item-active")
}

window.addEventListener('scroll', scrollSlideWelcome);
window.addEventListener('scroll', scrollSlideHobbies);

function scrollGrow(start, end){
    const hobbiesImg = document.getElementsByClassName(start);
        
    let introPosition = hobbiesImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (introPosition < screenPosition / 1.5){    
        hobbiesImg[0].classList.add(end);
    }
}

function scrollGrowHobbies(){
    scrollGrow("hobbies-img-hidden", "hobbies-img-active")
}

window.addEventListener('scroll', scrollGrowHobbies);


function setDivHeight(){
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
window.addEventListener('minimized', setDivHeight);

function splatterTime(){
    let splatterParent = document.getElementsByClassName("hobbies-splatter-parent")
}