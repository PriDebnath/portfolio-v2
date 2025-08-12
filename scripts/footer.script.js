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

    const paths = document.querySelectorAll('footer-border-path');
    // Store lengths for each path
    const pathData = Array.from(paths).map(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      return { path, length };
    });
    let progress = 0; // 0 to 1
    const increment = 0.15;
    const card = document.getElementById('footer-container');
    // Click increases border
    card.addEventListener('click', () => {
      progress = Math.min(1, progress + increment);
      updateBorder();
      if (progress === 1) {
        startConfetti();
      }
    });
    // Auto decrease every second
    setInterval(() => {
      if (progress > 0) {
        progress = Math.max(0, progress - 0.05); // decrease slowly
        updateBorder();
      }
    }, 500);
    function updateBorder() {
      pathData.forEach(({ path, length }) => {
        path.style.strokeDashoffset = length * (1 - progress);
      });
    }