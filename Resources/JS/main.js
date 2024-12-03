const navLinks = document.querySelector('.nav-links');
const navbarToggle = document.querySelector('.mobile-navbar-toggle');

    navbarToggle.addEventListener("click", () => {

        const visibility = navLinks.getAttribute("data-visible");

        if (visibility === "false") {
            navLinks.setAttribute("data-visible", true);
            navbarToggle.setAttribute("aria-expanded", true);
        } else if (visibility === "true") {
            navLinks.setAttribute("data-visible", false);
            navbarToggle.setAttribute("aria-expanded", false);
        }
    });


    // Show the Splash content and hide the About section

    function showSplash() {
        document.querySelector('.splash-content').classList.remove('hidden');
        document.querySelector('.about').classList.add('hidden');
        document.querySelector('.contact').classList.add('hidden');
    }
    
    // Show the About section and hide the Splash content
    function showAbout() {
        document.querySelector('.splash-content').classList.add('hidden')
        document.querySelector('.about').classList.remove('hidden');
        document.querySelector('.contact').classList.add('hidden');
    
    }
    
    // Show the Contact section and hide the About section
    function showContact() {
        document.querySelector('.splash-content').classList.add('hidden')
        document.querySelector('.about').classList.add('hidden');
        document.querySelector('.contact').classList.remove('hidden');
    }
    
    

