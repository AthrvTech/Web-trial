// Typing Animation
const text = "Quantum is Progressing...";
let index = 0;
function typeEffect() {
  const el = document.querySelector('.typed-text');
  if (index < text.length) {
    el.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Hamburger Menu Toggle
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}
