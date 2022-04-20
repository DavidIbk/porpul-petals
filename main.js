function navSlide() {
  var burger = document.querySelector(".burger"); //This gets the burger ICON
  var nav = document.querySelector(".nav-links"); //this gets all the nav-links and the button too
  var navLinks = document.querySelectorAll(".nav-links li"); //this gets all the items inside our navbar; the links and the button

  //TOGGLE OUR NAVBAR (I.E. INVOKE DROPDOWN)
  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active"); //this code instructs the browser to add the class, "nav-active" to the nav-links (because it is that class that has transform: translateX(100%) ) when the burger is clicked, therefore bringing the dropdown back onscreen.

    //ANIMATING OUR NAVLINKS INTO THE DROPDOWN (Here we make reference to our @keyframes)
    navLinks.forEach((link, index) => { //This syntax just means that we are creating a function that will apply to each nav-links list item and button. Index = 9 (number of links plus button)
      if (link.style.animation) {
        link.style.animation = "" //if the links already have animation, then we leave them as they are but if they don't, then the code below runs
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards 0.5s"; //Basically, the code here implements the CSS's navLinkFade animation. Just ensure to type it in the way it is. 0.5s stands for the speed with which the links come to the center. forwards makes the links stay (with backwards they disappear after showing). ease has no noticeable function and 1s is the time that pass before the links appear.
      }
    });

    //ANIMATING OUR BURGER ICON UPON BEING CLICKED
    burger.classList.toggle("toggle");

  });



}

navSlide(); //This invokes the function above




const tl = gsap.timeline({defaults: {ease: "power1.out" }});

tl.to('.text', {y:'0%', duration: 2, stagger: 0.5});
tl.to('.slider', {y:'-100%', duration: 1.5, delay: 0.5 });
tl.to('.intro', {y: "-100%", duration: 1}, "-=1");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1 });
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1 }, "-=1");
