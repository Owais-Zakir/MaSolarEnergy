let buttonToggle = () => {
  let header = document.querySelector("#hide");
  let button = document.getElementById("menu-button").classList,
    isopened = "is-opened";
  let isOpen = button.contains(isopened);
  if (isOpen) {
    button.remove(isopened);
  } else {
    button.add(isopened);
  }
  header.classList.toggle("active");
};
const texts = ["Ac Electrician", "Dc Electrician"];
const typingElement = document.getElementById("autoTyped");
let index = 0;
let textIndex = 0;
function getRandomDelay(base) {
  return base + Math.random() * 50;
}
function type() {
  if (index < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(index);
    index++;
    setTimeout(type, getRandomDelay(100));
  } else {
    setTimeout(deleteText, 2000);
  }
}
function deleteText() {
  if (index > 0) {
    typingElement.textContent = texts[textIndex].substring(0, index - 1);
    index--;
    setTimeout(deleteText, getRandomDelay(50));
  } else {
    textIndex = (textIndex + 1) % texts.length;
    index = 0;
    setTimeout(type, 500);
  }
}
type();
document.getElementById('shareBtn').onclick = function() {
  if (navigator.share) {
      navigator.share({
          title: 'MA Solar Energy',
          text: 'Check out My Website',
          url: 'https://owais-zakir.github.io/MaSolarEnergy/'
      })
      .then(() => console.log('Share successful!'))
      .catch((error) => console.error('Error sharing:', error));
  } else {
      alert('Sharing not supported on this browser. Please copy the link: https://owais-zakir.github.io/MaSolarEnergy/');
  }
};