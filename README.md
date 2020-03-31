# About Me Website

A general website that gives people a general overview all about myself! I've used this opportunity to explore various different HTML / CSS / Javascript techniques, even tring to incorporate more advanced aspects like Bootstrap and Boilerplate.

## Contents

The format of the website is split into various sections:

1. Welcome
2. About Me
3. Hobbies
4. Architecture
5. Programming
6. Contact me

### Implementation

Several aspects about this project were extremely difficult

#### Navbar

I originally based the design of the Navbar off a youtube video to ensure it was responsive but also unique in different viewports. However when I converted my page to a Bootstrap format I found that a variety of the features changed (I have since found been reminded that the order to which you link style sheets is crucial). The main problem I had was the leftover transition between the horizontal and vertical navbar during the transition phase. I have stopped this on resize but I have yet to find a way to address clicking maximise / minimise.

#### Carousel

I had difficulties implementing the carousel to be full screen with the W3School / MDB / W3Newbie versions so I finally had to implement my own carousel from scratch, slowly learning about its implementation to get it exactly how I wanted.

#### Parallax

I had some difficulties here trying to get the styling of the image to work. In retrospect I realise that this is due to the ordering of my CSS links.

#### Welcome

After implementing Dev Ed's simply scroll appear technique I finally got to grips with the use of Javascript. I began to implement similar versions and eventualy diverged to write my own Javascript for sliding images. With my effort I got them to have a slight rebound and get them to stagger their starts.

#### Hobbies

Surprisingly, the hardest part was the inital appear of the main image which was incredibly hard to center and maintain the div height at the final size despite window resizing. However once I had done this my Javascript was sufficient to code the gallery popup from scratch, which was inspired by a similar navbar from Online Web Ustaad. The icons were fun to make though, via Illustrator.

#### Architecture

This was much easier thanks to my prior experience with the sliding and appearing functions. The main issue here was changing both the image and the text once the smaller pictures were clicked.

#### Year Abroad

Sadly ran out of time for this chapter so it has since been hidden.

#### Programming

This was actually very difficult and an accidental effect. When attempting to get the lines to slide it I found that I could get a nice resizing effect with them. The main issue was their placement and sizine. How do you ensure they are in the correct space and take up the correct height / width on all screens? A javascript function that ran on a resize of the window was required here. Again, not sure how to address the issue of clicking maximise / minimise.

#### Contact Me

Another page that was more difficult than it appeared. I am having difficultly locating division exactly where I want them on the page (in terms of horizontal and vertical centering). Additionally, I was using the !important function a lot to bypass the CSS of Bootstrap without realising that I needed to reorder my links. This meant that styling the contact me form became quite difficult. 

## Built With

* [Bootstrap](https://getbootstrap.com/) - A front-end component library
* [BoilerPlate](https://html5boilerplate.com/) - A front-end template

## Authors

* **Thomas Corbin** - *Initial work* - [ThomasCorbin22](https://github.com/ThomasCorbin22)

See also the list of [contributors](https://github.com/ThomasCorbin22/thomascorbin22.github.io/graphs/contributors) who participated in this project.

## Acknowledgments

* [Online web ustaad](https://www.youtube.com/watch?v=RHj5bdrfCr8&t=60s) - Build Complete Responsive Website Design using HTML 5 / CSS 3 /JavaScript
* [Online web ustaad](https://www.youtube.com/watch?v=kAGkAJDLYGY) - Top 10 Stunning CSS 3 Effects For Navigation Bar
* [Dev Ed](https://www.youtube.com/watch?v=gXkqy0b4M5g&t=1388s) - Responsive Navigation Bar Tutorial | HTML CSS JAVASCRIPT
* [Dev Ed](https://www.youtube.com/watch?v=C_JKlr4WKKs&t=524s) - Visual effect in vanilla javascript tutorial
* [iEatWebsites](https://www.youtube.com/watch?v=d34GsFz-HkY) - How To Create a Cool Parallax Scrolling Effect For Your Websites
* [MDB](https://mdbootstrap.com/docs/jquery/javascript/carousel/) - A slideshow component for cycling through elements—images or slides of text—like a carousel
* [MDB](https://mdbootstrap.com/docs/jquery/forms/contact/) - Create beautiful contact forms using the Bootstrap framework, PHP and JavaScript
* [W3Newbie](https://www.youtube.com/watch?v=iiUtzrC5BPE) - Bootstrap 4 Full Screen Image Slider - HTML5 and CSS3 Tutorial
* [CleverTechie](https://www.youtube.com/watch?v=TSRtBISvsh4) - How To Create Image Gallery Using HTML, CSS and Javascript | Lightbox Gallery

