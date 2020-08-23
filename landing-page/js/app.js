/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
const allSections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

for(let i = 0; i < allSections.length; i++){
    // create a list item for each section
    const newItem = document.createElement('li');
    // create an anchor for each section
    const listLink = document.createElement('a');
    // set navigation links content
    listLink.textContent = allSections[i].getAttribute('data-nav');
    // set href attribute for scrolling to the target section later
    listLink.href = '#' + allSections[i].id;

    newItem.appendChild(listLink);

    fragment.appendChild(newItem);
}
const headerList = document.getElementById('navbar__list');
headerList.appendChild(fragment);


// Set navigation links and sections as active when clicking on nav links
const navbar = document.querySelector('.navbar__menu');
const a = navbar.querySelectorAll('a');
a.forEach(function(element){
    // when clicked on any list item
	element.addEventListener('click', function(){
        // iterating over every list item to remove the active state
		for(let i = 0; i < a.length; i++){
            a[i].classList.remove('active');
            allSections[i].classList.remove('your-active-class');
        }
        // add active state to the clicked nav link and the targeted section
        this.classList.add('active')
        const hrefSectionAttr = this.getAttribute('href');
        const activeSectionId = hrefSectionAttr.replace('#','');

        const sectionIt = document.getElementById(activeSectionId)
        sectionIt.classList.add('your-active-class');
        

	})

})

// trigger a function when a section touches the top of the viewport

function isInViewport(element) {
    // get the coordinates of the target element
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


allSections.forEach(function(section){
    document.addEventListener('scroll', function () {
        for(let i = 0; i < allSections.length; i++){
            //removing the active state from the other sections
            a[i].classList.remove('active');
            allSections[i].classList.remove('your-active-class');

            //checking whether a section is in the viewport
            if( isInViewport(allSections[i]) ){
                // adding active state to the section in the viewport and its nav item
                a[i].classList.add('active');
                allSections[i].classList.add('your-active-class');
            }
		}
    });

});

// scroll to top button functionality

const topButton = document.getElementById('top_button');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



$(window).scroll(function() {
    //detect the element you want to show
    $("#hide_nav").fadeIn(500);
    $(topButton).fadeIn(500);
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        // after user scroll for the first time start the function if user didn't
       // after 1 second the it hide the nav with id demo
        console.log("Haven't scrolled in 2second!");
     //hide the navbar if user not scrolling
     $("#hide_nav").fadeOut(500);
     $(topButton).fadeOut(500);
    }, 2000));
    
});
