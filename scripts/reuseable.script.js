let getRandomNumber = (start, end) => {
  let randomNumber = Math.random() * (end - start) + start;
  return Math.round(randomNumber)
}


////
const img = ".show-img-skeleton"
document.querySelectorAll(img)
  .forEach(img => {
    img.addEventListener("load", () => {
      img.classList.add("img-loaded");
      setTimeout(() => {
        img.parentElement.classList.remove("img-box-skeleton");
      }, 0);
    });
  });


// function fadeTypingAnimation(element, text, speed = 150) {
//   element.innerHTML = ''; // Clear previous content
//   let i = 0;

//   function type() {
//     if (i < text.length) {
//       let span = document.createElement('span');

//       // Preserve spaces correctly
//       span.innerHTML = text[i] === ' ' ? '&nbsp;' : text[i];

//       span.classList.add('fade-letter');
//       element.appendChild(span);

//       // Add fade effect
//       setTimeout(() => {
//         span.style.opacity = 1;
//       }, 50);

//       i++;
//       setTimeout(type, speed);
//     } else {
//       element.style.borderRight = "none"; // Remove cursor effect
//     }
//   }

//   type();
// }


function fadeTypingAnimation(element, text, speed = 150) {
  // console.log({text});
  
  element.innerHTML = ''; // Clear previous content
  let words = text.split(' '); // Split text into words
  let i = 0;
  let j = 0;

  function typeWord() {
    if (i < words.length) {
      let wordSpan = document.createElement('span'); // Wrap each word
      wordSpan.classList.add('fade-word');
      element.appendChild(wordSpan);

      function typeLetter() {
        if (j < words[i].length) {
          let letterSpan = document.createElement('span');
          letterSpan.classList.add('fade-letter');
          letterSpan.style.opacity = '0'; // Start hidden
          letterSpan.innerText = words[i][j]; // Add letter
          wordSpan.appendChild(letterSpan);

          setTimeout(() => {
            letterSpan.style.opacity = '1'; // Fade in
          }, 50);

          j++;
          setTimeout(typeLetter, speed);
        } else {
          j = 0; // Reset letter index for next word
          i++;
          wordSpan.innerHTML += '&nbsp;'; // Add space after word
          setTimeout(typeWord, speed); // Type next word
        }
      }

      typeLetter(); // Start typing the first letter of the word
    } else {
      element.style.borderRight = 'none'; // Remove cursor effect
    }
  }

  typeWord();
}

// Modal functionality - common elements and functions
let modalElements = {
  contentBox: null,
  modalOverlay: null,
  modal: null,
  modalTitle: null,
  closeBtn: null
};

// Initialize modal elements
function initModalElements() {
  modalElements.contentBox = document.getElementById('rc-content-box');
  modalElements.modalOverlay = document.getElementById('modalOverlay');
  modalElements.modal = document.getElementById('modal');
  modalElements.modalTitle = document.getElementById('modalTitle');
  modalElements.closeBtn = document.getElementById('close-btn');
}

// Generic function to open modal
function openModal(title, onOpenCallback = null) {
  if (!modalElements.modalOverlay || !modalElements.modal || !modalElements.modalTitle) {
    initModalElements();
  }

  if (title) {
    modalElements.modalTitle.innerText = title;
  }

  modalElements.modalOverlay.classList.add('show');
  modalElements.modal.classList.add('show');

  // Call custom callback if provided
  if (onOpenCallback && typeof onOpenCallback === 'function') {
    onOpenCallback();
  }
}

// Generic function to close modal
function closeModal(onCloseCallback = null) {
  if (!modalElements.modalOverlay || !modalElements.modal) {
    initModalElements();
  }

  modalElements.modalOverlay.classList.remove('show');
  modalElements.modal.classList.remove('show');

  // Clear URL parameter when closing
  history.replaceState(null, '', window.location.pathname + window.location.search);

  // Call custom callback if provided
  if (onCloseCallback && typeof onCloseCallback === 'function') {
    onCloseCallback();
  }
}

// Store original close handler for potential removal
let defaultCloseHandler = closeModal;

// Setup modal event listeners (close button and click outside)
function setupModalListeners() {
  if (!modalElements.closeBtn || !modalElements.modalOverlay) {
    initModalElements();
  }

  // Close button handler
  if (modalElements.closeBtn) {
    defaultCloseHandler = closeModal;
    modalElements.closeBtn.addEventListener('click', defaultCloseHandler);
  }

  // Click outside to close
  if (modalElements.modalOverlay) {
    modalElements.modalOverlay.onclick = function (event) {
      if (event.target === this) {
        closeModal();
      }
    };
  }
}

// Function to replace close handler (for scripts that need custom cleanup)
function replaceCloseHandler(customHandler) {
  if (!modalElements.closeBtn) {
    initModalElements();
  }

  if (modalElements.closeBtn && defaultCloseHandler) {
    modalElements.closeBtn.removeEventListener('click', defaultCloseHandler);
    modalElements.closeBtn.addEventListener('click', customHandler);
    defaultCloseHandler = customHandler;
  }
}

// Initialize modal on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    initModalElements();
    setupModalListeners();
  });
} else {
  initModalElements();
  setupModalListeners();
}