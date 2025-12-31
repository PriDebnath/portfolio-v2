let root = document.documentElement;
let messagePopupAnimationDuration = getComputedStyle(root).getPropertyValue('--message-popup-animation-duration');


let message = document.getElementById("message")

if (message) {
  setTimeout(() => {
    message.style.animation = "none"
  },
    messagePopupAnimationDuration)
}

  let getRandomNumber = (start, end) => {
    let randomNumber = Math.random() * (end - start) + start;
    return Math.round(randomNumber)

  }