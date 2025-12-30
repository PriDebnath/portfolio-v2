const cursor = document.querySelector('.cursor');


function moveCursor(x, y) {
  setTimeout(() => {

    cursor.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
  }, 0)
}


document.addEventListener('mousemove', (e) => {
  moveCursor(e.clientX, e.clientY);
});


document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0]; // Get first touch point
  moveCursor(touch.clientX, touch.clientY);
}, { passive: true });