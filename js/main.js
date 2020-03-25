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
    changeOpacity(".color-overlay-initial", 0.5);
    changeOpacity("h1", 1);
    changeOpacity("header > div > p", 1); 
}

function scrollAppear(){
    const welcomeText = document.getElementsByClassName("welcome-text-hidden");

    for (let element of welcomeText){
    
        let introPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight;

        if (introPosition < screenPosition / 1.5){        
            element.classList.add("welcome-text-appear");
        } 
    }
}

window.addEventListener('scroll', scrollAppear)

function scrollSlide(){
    const welcomeImg = document.getElementsByClassName("welcomeImg-hidden");
    
    let introPosition = welcomeImg[0].getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    let shiftRight = () => {
        for (let element of welcomeImg) {
            element.classList.add("welcomeImg-inter");
        }
    };

    let shiftLeft = () => {
        for (let element of welcomeImg) {
            element.classList.add("welcomeImg-final");
        }
    }; 

    if (introPosition < screenPosition / 1.5){ 
        shiftRight()
        setTimeout(shiftLeft(), 3000);
    }
}

window.addEventListener('scroll', scrollSlide)