let root = document.documentElement;
let messagePopupAnimationDuration = getComputedStyle(root)
  .getPropertyValue('--message-popup-animation-stay');
const delay = Number(messagePopupAnimationDuration) || 9000
// console.log(delay);

let me = document.getElementById("me")
let message = document.getElementById("message")
let messageCross = document.getElementById("message-cross")
messageCross.addEventListener('click', () => {
  message.classList.add('message-rotateX-90')
},true)
me.addEventListener('click', () => {
  message.classList.remove('message-rotateX-90')
},true)

let getRandomNumber = (start, end) => {
  let randomNumber = Math.random() * (end - start) + start;
  return Math.round(randomNumber)

}