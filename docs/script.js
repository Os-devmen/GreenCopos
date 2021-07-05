// Scroll effect
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('#navbar');
    if (pageYOffset == 0)
        navbar.className = '';
    else
        navbar.className = "nav-down";     
})