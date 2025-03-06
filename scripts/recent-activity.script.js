//
let contentBox = document.getElementById('rc-content-box')
let closeBtn = document.getElementById('close-btn')
// wrote
let fetchedBlog = false
const rcCardWroteId = "rc-card-wrote"
const cardWrote = document.getElementById(rcCardWroteId)
let MEDIUM_BLOG_API = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pritam-debnath'
// drew
const rcCardDrewId = "rc-card-drew"
const cardDrew = document.getElementById(rcCardDrewId)
const drawings = [
    'assets/images/drawings/one-holds-the-flower.png',
    'assets/images/drawings/one-holds-the-feeling.png',
    'assets/images/drawings/bird.jpg',
    'assets/images/drawings/bunny.jpg',
    'assets/images/drawings/her-birthday-gift.png',
    'assets/images/drawings/owl-duo.png',
    'assets/images/drawings/moody-girl.png',

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
function openModal(type, cardId) {
    const prefix = "Pieces I recently "

    document.getElementById("modalTitle").innerText = prefix + type;
    document.getElementById("modalOverlay").classList.add("show");
    document.getElementById("modal").classList.add("show");

    let card = document.getElementById(cardId)
    card.classList.add("rc-card-active")
    if (type == 'wrote') {
        // if (fetchedBlog == false) {
        fetchBlog()
        // } else {
        //     console.log("Already fetched blogs")
        // }
    } else if (type == 'drew') {
        displayDrawings()
    } else if (type == 'read') {
        displayReadings()
    }

}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("show");
    document.getElementById("modal").classList.remove("show");
    let cards = document.querySelectorAll('.rc-card')
    for (const card of cards) {
        card.classList.remove("rc-card-active")
    }
}
closeBtn.addEventListener('click', closeModal)

// Close modal when clicking outside of it
document.getElementById("modalOverlay").onclick = function (event) {
    if (event.target === this) {
        closeModal();
    }
};



function fetchBlog() {
    contentBox.innerHTML = ''
    contentBox.className = 'writing-container'
    //
    fetch(MEDIUM_BLOG_API).then((res) => {
        return res.json()
    }).then((data) => {
        fetchedBlog = true
        //
        console.log({ data })
        let items = data.items
        items.forEach((item, index) => {
            let contentElement = document.createElement('a')
            contentElement.href = item.link
            contentElement.classList.add('rc-text-element')
            let itemTitle = (index + 1) + ". " + item.title
            fadeTypingAnimation(contentElement,
                itemTitle
                , 100);
            contentBox.appendChild(contentElement)
        })

    }).catch((err) => {
        console.log({ err })
    })
}

function displayReadings() {
    contentBox.innerHTML = ''
    contentBox.className = ' '
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

        contentBox.appendChild(
            contentElementBox)
    })


}

function displayDrawings() {
    contentBox.innerHTML = ''
    contentBox.className = 'drawing-container'
    drawings.forEach((drawing, index) => {
        // let drawingContainer = document.createElement('div')
        // drawingContainer.classList.add('drawing-container')
        //
        let drawingBox = document.createElement('div')
        drawingBox.classList.add('drawing-box')
        //
        let drawingImg = document.createElement('img')
        drawingImg.loading = "lazy"
        drawingImg.src = drawing
        drawingImg.classList.add('drawing-img')
        drawingBox.appendChild(drawingImg)
        //
        let drawingP = document.createElement('p')
        drawingP.classList.add('drawing-p')
        const fileNameChunk = drawing.split('/')
        const fileNameWithEx = fileNameChunk.pop()
        const indexOfDot = fileNameWithEx.indexOf(".")
        const fileNameWithHypen = fileNameWithEx.substring(0, indexOfDot)
        const fileName = fileNameWithHypen.replaceAll("-", " ")

        fadeTypingAnimation(drawingP,
            fileName
            , 100);
        drawingBox.appendChild(drawingP)
        //
        // drawingContainer.appendChild(drawingBox)
        //
        contentBox.appendChild(drawingBox)

    })

}


// event listener
cardDrew.addEventListener("click", (e) => {
    openModal("drew", rcCardDrewId)
})

cardWrote.addEventListener("click", (e) => {
    openModal("wrote", rcCardWroteId)
})

cardRead.addEventListener("click", (e) => {
    openModal("read", rcCardReadId)
})
