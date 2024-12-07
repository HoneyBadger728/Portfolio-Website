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
        document.querySelector('.projects').classList.add('hidden');
        document.querySelector('.contact').classList.add('hidden');
    }
    
    // Show the About section and hide the Splash content
    function showAbout() {
        document.querySelector('.splash-content').classList.add('hidden');
        document.querySelector('.about').classList.remove('hidden');
        document.querySelector('.projects').classList.add('hidden');
        document.querySelector('.contact').classList.add('hidden');
    
    }

    // Show the Projects section and hide others
    function showProjects() {
        document.querySelector('.splash-content').classList.add('hidden');
        document.querySelector('.about').classList.add('hidden');
        document.querySelector('.projects').classList.remove('hidden');
        document.querySelector('.contact').classList.add('hidden');
        
    }
    
    // Show the Contact section and hide the About section
    function showContact() {
        document.querySelector('.splash-content').classList.add('hidden');
        document.querySelector('.about').classList.add('hidden');
        document.querySelector('.projects').classList.add('hidden');
        document.querySelector('.contact').classList.remove('hidden');
    }

    // Select all nav links
const activeNavLink = document.querySelectorAll('.nav-links a');

activeNavLink.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'active' class from all links
        activeNavLink.forEach(nav => nav.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
    });
});

    
    const splashH1 = document.querySelector(".splash-content h1");
    const splashH2 = document.querySelector(".splash-content h2");
    const text1 = splashH1.textContent; 
    const text2 = splashH2.textContent;
    
    function textTypingEffect(element, text, speed, initialDelay = 0, i = 0, callback = null) {
        if (i === 0) {
            element.textContent = ""; // Clear content before starting
        }
    
        // Delay before starting the typing effect
        setTimeout(() => {
            element.textContent += text[i];
    
            if (i === text.length - 1) {
                if (callback) callback(); // Trigger the callback if provided
                return;
            }
    
            // Recursive call to continue typing
            setTimeout(() => textTypingEffect(element, text, speed, 0, i + 1, callback), speed);
        }, initialDelay); // Delay before the first character starts
    }
    
    // Set a delay for the first typing effect
    const initialDelayH1 = 1200; // 2-second delay for the H1 element
    const initialDelayH2 = 1200; // 1-second delay for the H2 element
    
    textTypingEffect(splashH1, text1, 100, initialDelayH1, 0, () => {
        splashH2.classList.add("visible"); // Make H2 visible
        textTypingEffect(splashH2, text2, 50, initialDelayH2); // Add delay for H2 as well
    });
    