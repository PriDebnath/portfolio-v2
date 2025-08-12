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


// dynamic footer border start

function updatePaths() {
  const card = document.getElementById('footer-container');
  const svg = document.querySelector('.border-svg');
  const styles = getComputedStyle(card);

  // Get dimensions and radius
  const width = card.clientWidth;
  const height = card.clientHeight;
  const r = parseFloat(styles.borderRadius);

  // Set viewBox dynamically
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  // Right path
  const rightPath = `
    M${width / 2},${height}
    L${width - r},${height} Q${width},${height} ${width},${height - r}
    L${width},${r} Q${width},0 ${width - r},0
    L${width / 2},0
  `;

  // Left path
  const leftPath = `
    M${width / 2},${height}
    L${r},${height} Q0,${height} 0,${height - r}
    L0,${r} Q0,0 ${r},0
    L${width / 2},0
  `;

  // Apply paths
  document.querySelector('.footer-border-path.right').setAttribute('d', rightPath);
  document.querySelector('.footer-border-path.left').setAttribute('d', leftPath);
}

// Run on load and resize
updatePaths();

window.addEventListener('resize', updatePaths);

const paths = document.querySelectorAll('.footer-border-path');

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

// dynamic footer border end
