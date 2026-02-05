let root = document.documentElement;
let messagePopupAnimationDuration = getComputedStyle(root)
  .getPropertyValue('--message-popup-animation-stay');
const delay = Number(messagePopupAnimationDuration) || 9000
// console.log(delay);

let message = document.getElementById("message")
if (message) {
  setTimeout(() => {
    message.style.animation = "none"
  }, delay)
}

let getRandomNumber = (start, end) => {
  let randomNumber = Math.random() * (end - start) + start;
  return Math.round(randomNumber)

}