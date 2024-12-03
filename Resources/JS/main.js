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
        document.querySelector('.splash-content').classList.add('hidden');
        document.querySelector('.about').classList.remove('hidden');
        document.querySelector('.contact').classList.add('hidden');
    
    }
    
    // Show the Contact section and hide the About section
    function showContact() {
        document.querySelector('.splash-content').classList.add('hidden');
        document.querySelector('.about').classList.add('hidden');
        document.querySelector('.contact').classList.remove('hidden');
    }
    
const splashH1 = document.querySelector(".splash-content h1");
const splashH2 = document.querySelector(".splash-content h2")
const text1 = splashH1.textContent; 
const text2 = splashH2.textContent;

    function textTypingEffect(element, text, speed, i = 0, callback = null) {
        if (i === 0) {
            element.textContent = "";
        }
        
        element.textContent += text[i]

        if (i === text.length - 1) {
            if (callback) callback();
            return;
        }

        setTimeout(() => textTypingEffect(element, text, speed, i + 1, callback), speed);

    }

    textTypingEffect(splashH1, text1, 100, 0, () => {
        splashH2.classList.add("visible");
        textTypingEffect(splashH2, text2, 40);
             
       
    });