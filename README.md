# Landing Page Project
    landing page with dynamically interactive navigation menu

## Table of Contents
    + An auto made dynamic navigation menu based on the sections of the page.
        - every time to add a section to your page you don not need tto it to the navbar, it will be automatically added.
        - I used javascript to create a parent fragment element inside it I created a list item (li) inside that list item I also created an anchor (a) and I used the getAttribute function to get the data attribute that contain the name of each section and added it to the anchor(a tag) then append that parent fragment element to the empty unordered list (ul) placing it in the document. I also set an (href) attribute to every anchor of the list items so I can call these sections by clicking on the anchor of its list item.
       
    + Clicking on a navigation item should scroll to the appropriate section of the page.
        - each list item anchor has an (href) attribute already so what I needed to do is just make sure the scroll will be smoothly done.
        - I used the scroll-behavior property to make the scroll smooth.
        - for the browsers that does not support scroll-behavior property I used a jquery code to animate the scroll with a delay so the scrolling would be abviously smooth.
        - The clicked item will be distinguished from the others by adding an active state to it (add class active) and removing it from the rest.
        - The section scrolled to, will also be distinguished from the others by adding an active state to it (add class your-active-section) and removing it from the rest.

    + Functionality to distinguish the section in view.
        - While navigating through the page, the section that is active in the viewport/closest to the top should be distinguished from the other sections.
        - I made an (isInViewport) function to detect the cordinate of each target section using getBoundingClientRect() function.
        - when a section is completely view in the viewport that would trigger a function that will add an active state to that section (add class your-active-section) and would also add an active state to that section's list item (li).

    + Adding an active state to the navigation item when a section is in the viewport.
        - I used the previous function to do so.

    + Fixed navigation menu.
        - fixed position menu that always be in the top of the page however you scroll up an down.

    + A scroll to top button on the page.
        - By clicking the button you will be brought to the top of the page.
        - only visible when the user scrolls below the fold of the page.
        - I used fontawesome to add some styling to the button.

    + Hide fixed navigation bar while not scrolling.
        - I used jquery to add functionality to scrolling or not scrolling.
        - when not scrolling the navigation menu and the backToTop button will fade out to hide.
        - when scrolling again the navigation menu and the backToTop button will fade in to show.
        - setting all that by a timer. 

    + Responsive design.
        - I used CSS media queries to make it fit for laptops, tablets and mobiles.
        - i used flex box on the navbar.
