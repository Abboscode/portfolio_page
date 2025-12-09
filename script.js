// Scroll progress bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Improved scroll effect with smooth transitions
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const yPosition = window.scrollY;
            const namePosition = document.getElementById("name-container");
            const avatar = document.getElementById("avatar-container");
            
            if (yPosition > 100) {
                namePosition.style.opacity = '0';
                namePosition.style.transform = 'translateY(-30px)';
                avatar.style.opacity = '1';
                avatar.style.transform = 'translateY(0)';
            } else {
                avatar.style.opacity = '0';
                avatar.style.transform = 'translateY(30px)';
                namePosition.style.opacity = '1';
                namePosition.style.transform = 'translateY(0)';
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// Handle mobile viewport height
function setViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setViewportHeight();
window.addEventListener('resize', setViewportHeight);

// Parallax effect for avatar
window.addEventListener('scroll', () => {
    const avatar = document.getElementById('avatar');
    const scrolled = window.scrollY;
    if (avatar && avatar.style.opacity !== '0') {
        avatar.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});
