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
// +++++++++++++++++++++++ Button Done ++++++++++++++++++++
// ================ Auto Typing Effect =====================
const texts = [
    "Ac Electrician",
    "Dc Electrician"
  ];
  const typingElement = document.getElementById("autoTyped");
  let index = 0;
  let textIndex = 0;
  function getRandomDelay(base) {
    return base + Math.random() * 50; // Add randomness to the delay
  }
  function type() {
    if (index < texts[textIndex].length) {
      typingElement.textContent += texts[textIndex].charAt(index);
      index++;
      setTimeout(type, getRandomDelay(100)); // Randomized typing speed
    } else {
      // Pause before starting to delete
      setTimeout(deleteText, 2000); // Pause before deleting
    }
  }
  function deleteText() {
    if (index > 0) {
      typingElement.textContent = texts[textIndex].substring(0, index - 1);
      index--;
      setTimeout(deleteText, getRandomDelay(50)); // Randomized deletion speed
    } else {
      // Move to the next text
      textIndex = (textIndex + 1) % texts.length; // Cycle through texts
      index = 0; // Reset index for the new text
      setTimeout(type, 500); // Pause before typing the new text
    }
  }
  // Start the typing effect
  type();
