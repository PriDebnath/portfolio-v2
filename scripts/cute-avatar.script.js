const buttonContainer = document.querySelector('[aria-label="head-decorators-button-container"]');
const headDecoratorsImg = document.querySelector('[aria-label="head-decorator-img"]');

const inactiveAllButtons = ()=>{
const buttons = document.querySelectorAll('[aria-label="head-decorators-button-container"] button');
buttons.forEach((pri)=>{
    pri.classList.remove('active')
})
}

const handleHeadDecoratorsBox = (event) => {
  headDecoratorsImg.classList.add("decorator");

  const btn = event.target;
  const ariaLabel = btn.getAttribute("aria-label");

  if (!ariaLabel || !/decorator-\d+/.test(ariaLabel)) return;

  inactiveAllButtons()
  btn.classList.add('active')
  // remove previous animation classes
  headDecoratorsImg.classList.remove(
    "anim-bounce",
    "anim-slide",
    "anim-rotate",
    "anim-hair"
  );

  // animate out
  headDecoratorsImg.classList.add("animate-out");

  setTimeout(() => {
    // change image
    headDecoratorsImg.src ="assets/images/cute-avatar/" + ariaLabel + ".png";

    // choose animation type
    if (ariaLabel.includes("heart") || ariaLabel.includes("flower")) {
      headDecoratorsImg.classList.add("anim-bounce");
    } else if (ariaLabel.includes("headphone")) {
      headDecoratorsImg.classList.add("anim-slide");
    } else if (ariaLabel.includes("cap")) {
      headDecoratorsImg.classList.add("anim-rotate");
    } else if (ariaLabel.includes("hair") || ariaLabel.includes("pony")) {
      headDecoratorsImg.classList.add("anim-hair");
    }

    // animate in
    headDecoratorsImg.classList.remove("animate-out");
    headDecoratorsImg.classList.add("animate-in");
  }, 200);
};

buttonContainer.addEventListener("click", handleHeadDecoratorsBox);

const charector = document.querySelector('[aria-label="charector"]');

/*
 */