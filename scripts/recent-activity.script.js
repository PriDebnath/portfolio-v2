//
const types = {
    drew: 'drew',
    wrote: 'wrote',
    read: 'read',
};

// Check URL parameters on page load
window.addEventListener('load', () => {
    const url = window.location.hash.slice(1)
    const urlParams = new URLSearchParams(url)

    const section = urlParams.get('section');

    if (types[section]) {
        const cardId = 'rc-card-' + section;
        const cardElement = document.getElementById(cardId);
        if (cardElement) {
            cardElement.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => openRecentActivityModal(section, cardId), 1000);
        }
    }
});

// wrote
let fetchedBlog = false
const rcCardWroteId = "rc-card-wrote"
const cardWrote = document.getElementById(rcCardWroteId)
let MEDIUM_BLOG_API = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pritam-debnath'

// drew
const rcCardDrewId = "rc-card-drew"
const cardDrew = document.getElementById(rcCardDrewId)
const drawings = [
    'assets/images/drawings/waiting-for-the-dummy.png',
    'assets/images/drawings/getting-a-call-from-the-dummy.png',
    'assets/images/drawings/talking-to-the-dummy.png',
    'assets/images/drawings/chilled-nimi.png',
    'assets/images/drawings/shy-nimi.png',
    'assets/images/drawings/neutral-nimi.png',
    'assets/images/drawings/Before-Dance-framed.png',
    'assets/images/drawings/Before-Dawn-framed.png',
    'assets/images/drawings/Before-Ritual-framed.png',
    'assets/images/drawings/in-love.png',
    'assets/images/drawings/in-pain.png',
    'assets/images/drawings/in-promise.png',
    'assets/images/drawings/in-winter.png',
    'assets/images/drawings/in-monsoon.png',
    'assets/images/drawings/in-summer.png',
    'assets/images/drawings/her-birthday-gift.png',
    'assets/images/drawings/one-holds-the-flower.png',
    'assets/images/drawings/one-holds-the-feeling.png',
    'assets/images/drawings/bird.jpg',
    'assets/images/drawings/bunny.jpg',
    'assets/images/drawings/!angry-bird.jpg',
    'assets/images/drawings/owl-duo.png',
    // 'assets/images/drawings/moody-girl.png',

]
// read
const rcCardReadId = "rc-card-read"
const cardRead = document.getElementById(rcCardReadId)
const readings = [
    {
        name: "Show Your Work",
        by: "Austin Kleon"
    },
    {
        name: "The Four Agreements",
        by: "DON MIGUEL Rui"
    },
    {
        name: "Her eyes",
        by: "God"
    }
    ,
    {
        name: "The Art Of Being Alone",
        by: "Renuka Gavrani"
    },
    {
        name: "Can Love Happen Twice?",
        by: "Ravinder Singh"
    },
    {
        name: "I Too Had a Love Story",
        by: "Ravinder Singh"
    },
    {
        name: "The Art of Loving",
        by: "Erich Fromm"
    },
    {
        name: "Master Your Emotions",
        by: "Thibaut Meurisse"
    },
    {
        name: "Atomic Habits",
        by: "James Clear"
    },
    {
        name: "As a Man Thinketh",
        by: "James Allen"
    }
    ,
    {
        name: "Exactly What to Say",
        by: "Phil Jones"
    },
    {
        name: "The Gifts of Imperfection",
        by: "Brené Brown"
    },
    {
        name: "Who Moved My Cheese?",
        by: "Spencer Johnson"
    }
    ,
    {
        name: "The Subtle Art of Not Giving a F*ck",
        by: "Mark Manson"
    },
    {
        name: "Men Are from Mars, Women Are from Venus",
        by: "John Gray"
    },

    {
        name: "The Complete Adventures Of Feluda - Vol I",
        by: "Satyajit Ray"
    },
    {
        name: "How to Win Friends and Influence People",
        by: "Dale Carnegie"
    }

]

//
function openRecentActivityModal(type, cardId) {
    const prefix = "Pieces I recently "

    // Update URL when opening drawings
    window.location.hash = `section=${type}`;

    const modalTitle = prefix + type;
    
    // Use generic openModal from reuseable with custom callback
    openModal(modalTitle, () => {
        let card = document.getElementById(cardId)
        if (card) {
            card.classList.add("rc-card-active")
        }
        
        if (types.wrote == type) {
            fetchBlog()
        } else if (types.drew == type) {
            displayDrawings()
        } else if (types.read == type) {
            displayReadings()
        }
    });
}

// Custom close handler for recent activity - adds cleanup before closing
function closeRecentActivityModal() {
    // Remove active class from cards
    let cards = document.querySelectorAll('.rc-card')
    for (const card of cards) {
        card.classList.remove("rc-card-active")
    }
    
    // Use generic closeModal from reuseable
    closeModal();
}

// Setup custom close handlers after DOM is ready
function setupRecentActivityCloseHandlers() {
    // Ensure modal elements are initialized
    if (!modalElements.closeBtn || !modalElements.modalOverlay) {
        initModalElements();
    }

    // Use the replaceCloseHandler function from reuseable
    if (typeof replaceCloseHandler === 'function') {
        replaceCloseHandler(closeRecentActivityModal);
    }

    // Override click outside handler
    if (modalElements.modalOverlay) {
        modalElements.modalOverlay.onclick = function(event) {
            if (event.target === this) {
                closeRecentActivityModal();
            }
        };
    }
}

// Initialize after DOM is ready and reuseable script has loaded
function initializeRecentActivityModal() {
    // Wait for reuseable to initialize
    if (typeof initModalElements === 'function' && typeof replaceCloseHandler === 'function') {
        setupRecentActivityCloseHandlers();
    } else {
        // Retry after a short delay if reuseable hasn't loaded yet
        setTimeout(initializeRecentActivityModal, 50);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeRecentActivityModal);
} else {
    // DOM already ready, but wait for reuseable to initialize
    setTimeout(initializeRecentActivityModal, 0);
}

function showSpinner(){
        // // Create and show loader
    // const loader = document.createElement('div');
    // loader.id = 'medium-loader';
    // loader.style.cssText = `
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     height: 200px;
    //     width: 100%;
    // `;
    
    // const spinner = document.createElement('div');
    // spinner.style.cssText = `
    //     width: 40px;
    //     height: 40px;
    //     border: 4px solid rgba(255, 255, 255, 0.3);
    //     border-top-color: var(--body-text-color);
    //     border-radius: 50%;
    //     animation: spin 1s linear infinite;
    // `;
    
    // // Add spinner animation if not already in style
    // if (!document.getElementById('loader-style')) {
    //     const style = document.createElement('style');
    //     style.id = 'loader-style';
    //     style.textContent = `
    //         @keyframes spin {
    //             to { transform: rotate(360deg); }
    //         }
    //     `;
    //     document.head.appendChild(style);
    // }
    
    // loader.appendChild(spinner);
    // modalElements.contentBox.appendChild(loader);
}

function showBlogSkeleton() {
    const wrapper = document.createElement('div');
    wrapper.id = 'blog-skeleton';

    for (let i = 0; i < 8; i++) {
        const line = document.createElement('div');
        line.className = 'skeleton skeleton-line';
        if (i % 2 === 0) line.classList.add('short');
        wrapper.appendChild(line);
    }

    modalElements.contentBox.appendChild(wrapper);
}


function fetchBlog() {
    if (!modalElements.contentBox) initModalElements();
    modalElements.contentBox.innerHTML = ''
    modalElements.contentBox.className = 'writing-container'
    

        showBlogSkeleton();

    //
    fetch(MEDIUM_BLOG_API).then((res) => {
        return res.json()
    }).then((data) => {
        fetchedBlog = true
        //// Remove loader and clear content box
        modalElements.contentBox.innerHTML = '';
        
        
        //// console.log({ data })
        let items = data.items
        items.forEach((item, index) => {
            let contentElement = document.createElement('a')
            contentElement.href = item.link
            contentElement.classList.add('rc-text-element')
            let itemTitle = (index + 1) + ". " + item.title
            // console.log({itemTitle});
            
            fadeTypingAnimation(contentElement,
                itemTitle
                , 100);
            modalElements.contentBox.appendChild(contentElement)
        });

    }).catch((err) => {
        // Remove loader and clear content on error
        modalElements.contentBox.innerHTML = '';
        // console.log({ err })
    }).finally(() => {

        // Add see more link
        const seeMore = document.createElement('a');
        seeMore.href = 'https://medium.com/@pritam-debnath';
        seeMore.target = '_blank';
        seeMore.style.textAlign = 'center';
        seeMore.style.marginTop = 'auto';
        seeMore.style.padding = '1rem';
        seeMore.style.color = 'var(--body-text-color)';
        seeMore.textContent = 'See more...';
        modalElements.contentBox.appendChild(seeMore);
    })
}

function displayReadings() {
    if (!modalElements.contentBox) initModalElements();
    modalElements.contentBox.innerHTML = ''
    modalElements.contentBox.className = ' '
    //

    //
    readings.forEach((item, index) => {
        let contentElementBox = document.createElement('div')
        let contentElement = document.createElement('span')
        contentElement.classList.add('rc-text-element')
        contentElement.style.padding = '0.125rem 0'
        fadeTypingAnimation(contentElement,
            item.name
            , 100);

        //   
        let contentByElement = document.createElement('span')
        contentByElement.classList.add('rc-text-by-element')
        contentByElement.style.padding = '0 0 1.125rem 0'
        fadeTypingAnimation(contentByElement,
            "by " + item.by
            , 100);
        //
        contentElementBox.appendChild(contentElement)
        contentElementBox.appendChild(contentByElement)

        modalElements.contentBox.appendChild(
            contentElementBox)
    })


}

// Fullscreen viewer function
function createFullscreenViewer(imageUrl) {
    const viewer = document.createElement('div');
    viewer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.decoding = "async";
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '×';
    // closeBtn.classList.add('close-btn');
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        padding: 10px;
        z-index: 10001;
    `;

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(viewer);
    });

    viewer.addEventListener('click', (e) => {
            document.body.removeChild(viewer);
    });

    viewer.appendChild(img);
    viewer.appendChild(closeBtn);
    document.body.appendChild(viewer);
}

function displayDrawings() {
  if (!modalElements.contentBox) initModalElements();

  modalElements.contentBox.innerHTML = '';
  modalElements.contentBox.className = 'drawing-container';

  drawings.forEach((drawing) => {

    // BOX
    const drawingContainer = document.createElement('div');
    const drawingBox = document.createElement('div');
    drawingBox.classList.add('drawing-box', 'skeleton');

    // IMAGE
    const drawingImg = document.createElement('img');
    drawingImg.loading = 'lazy';
    drawingImg.src = drawing;
    drawingImg.classList.add('drawing-img', 'show-img-skeleton');
    drawingImg.style.cursor = 'pointer';

    drawingImg.addEventListener('click', () =>
      createFullscreenViewer(drawing)
    );

    // 🔑 Skeleton removal on load
    drawingImg.addEventListener('load', () => {
      drawingImg.classList.add('img-loaded');

      setTimeout(() => {
        drawingBox.classList.remove('skeleton');
      }, 0);
    });

    drawingBox.appendChild(drawingImg);

    // TEXT
    const drawingP = document.createElement('p');
    drawingP.classList.add('drawing-p');

    const fileNameChunk = drawing.split('/');
    const fileNameWithEx = fileNameChunk.pop();
    const indexOfDot = fileNameWithEx.indexOf('.');
    const fileNameWithHypen = fileNameWithEx.substring(0, indexOfDot);
    const fileName = fileNameWithHypen
      .replaceAll('-', ' ')
      .replaceAll('framed', '');

    fadeTypingAnimation(drawingP, fileName, 100);
    drawingContainer.appendChild(drawingBox);
drawingContainer.appendChild(drawingP)
    modalElements.contentBox.appendChild(drawingContainer);
  });

  // SEE MORE
  const seeMore = document.createElement('a');
  seeMore.href = 'https://in.pinterest.com/PriDebnath/';
  seeMore.target = '_blank';
  seeMore.style.textAlign = 'center';
  seeMore.style.marginTop = 'auto';
  seeMore.style.padding = '1rem';
  seeMore.style.color = 'var(--body-text-color)';
  seeMore.textContent = 'See more...';

  modalElements.contentBox.appendChild(seeMore);
}

// event listener
if (cardDrew) {
    cardDrew.addEventListener("click", (e) => {
        openRecentActivityModal(types.drew, rcCardDrewId)
    })
}

if (cardWrote) {
    cardWrote.addEventListener("click", (e) => {
        openRecentActivityModal(types.wrote, rcCardWroteId)
    })
}

if (cardRead) {
    cardRead.addEventListener("click", (e) => {
        openRecentActivityModal(types.read, rcCardReadId)
    })
}
