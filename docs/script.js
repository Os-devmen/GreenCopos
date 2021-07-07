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
  document.body.classList.toggle("light-theme")
});

// menu-animation
const navBtn = document.getElementById("menu-btn-container");
navBtn.addEventListener("click", () =>{
    document.querySelector('.menu-btn').classList.toggle('menu-btn-open')
    document.querySelector('.links-container').classList.toggle('links-container-open')
})

const temaBtn = document.querySelector(".tema-container");
temaBtn.addEventListener("click", () =>{
   temaBtn.classList.toggle('tema-container-on');
})

