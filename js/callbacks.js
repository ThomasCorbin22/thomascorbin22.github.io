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
