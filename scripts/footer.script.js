const duration = getComputedStyle(document.documentElement).getPropertyValue('--fall-duration');

function createFallingStars() {
  let footer = document.querySelector('.footer-container');
  let i = document.createElement('i');
  i.style.height = `${Math.random() * 5 + 2}rem`;
  i.style.width = `0.2rem`;
  i.style.left = `${Math.random() * 150}vw`;
  i.style.background = `linear-gradient(transparent, var(--fall-color))`;
  i.style.animationDuration = `${Math.random() * parseFloat(duration) + 6}s`;
  i.style.animationDelay = `${Math.random() * 10}s`;
  i.style.opacity = `${Math.random()}`;
  footer.appendChild(i);
  /*
  i.addEventListener('animationend', () => {
    i.remove();
  });
  */
}


for (let p = 1; p < 100; p++) {
  setTimeout(() => {
    createFallingStars()
  }, 100)
}

//

// // Improved heart Dragging
// const heart = document.getElementById("heart");

// let isDragging = false;
// let offsetX = 0;
// let startX = 0;

// const startDrag = (event) => {
//   isDragging = true;
//   startX = event.clientX || event.touches[0].clientX;
//   offsetX = startX - heart.offsetLeft;
// };

// const dragMove = (event) => {
//   if (!isDragging) return;

//   let clientX = event.clientX || event.touches[0].clientX;
//   let newX = clientX - offsetX;

//   // Keep the heart within screen bounds
//   newX = Math.max(0, Math.min(window.innerWidth - heart.offsetWidth, newX));
//   heart.style.left = `${newX}px`;
// };

// const stopDrag = () => {
//   isDragging = false;
// };


// //

// heart.addEventListener("mousedown", startDrag);
// heart.addEventListener("touchstart", startDrag);
// document.addEventListener("mousemove", dragMove);
// document.addEventListener("touchmove", dragMove);
// document.addEventListener("mouseup", stopDrag);
// document.addEventListener("touchend", stopDrag);