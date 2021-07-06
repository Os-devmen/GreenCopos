// Scroll effect
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('#navbar');
    if (pageYOffset == 0)
        navbar.className = '';
    else
        navbar.className = "nav-down";     
})

// dark-mode
const darkModeBtn = document.querySelector("#theme-btn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
});

