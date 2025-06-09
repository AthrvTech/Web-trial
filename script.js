// Typing animation
const text = ["We Build Web", "AI | Apps | Games", "The Future of Tech"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
  if (count === text.length) count = 0;
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.querySelector('.typing-text').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 100);
  }
})();

// Hamburger toggle
document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('show');
});
