export default function Menu() {
 const hamburger= document.getElementById ("hamburger");
 const nav= document.querySelector(".nav");
 hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
 }
)
const navLinks =document.querySelectorAll(".nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});
}