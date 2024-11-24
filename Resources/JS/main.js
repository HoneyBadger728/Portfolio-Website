// Show the Splash content and hide the About section
function showSplash() {
    document.querySelector('.splash-content').style.opacity = '1';
    document.querySelector('.splash-content').style.visibility = 'visible';
    document.querySelector('.about').classList.add('hidden');
    document.querySelector('.contact').classList.add('hidden');
}

// Show the About section and hide the Splash content
function showAbout() {
    document.querySelector('.splash-content').style.opacity = '0';
    document.querySelector('.splash-content').style.visibility = 'hidden';
    document.querySelector('.about').classList.remove('hidden');
    document.querySelector('.contact').classList.add('hidden');

}

// Show the Contact section and hide the About section
function showContact() {
    document.querySelector('.splash-content').style.opacity = '0';
    document.querySelector('.splash-content').style.visibility = 'hidden';
    document.querySelector('.about').classList.add('hidden');
    document.querySelector('.contact').classList.remove('hidden');
}
