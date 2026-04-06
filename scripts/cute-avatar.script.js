const headDecoratorsImg = document.querySelector('[aria-label="head-decorator-img"]');
const decoratorsImg = document.querySelector('[aria-label="decorator-img"]');
const buttonContainerDecorator = document.querySelector('[aria-label="decorators-button-container"]');
const buttonContainerHeadDecorator = document.querySelector('[aria-label="head-decorators-button-container"]');

const inactiveAllHeadDecoratorButtons = () => {
  const buttons = document.querySelectorAll('[aria-label="head-decorators-button-container"] button');
  buttons.forEach((pri) => {
    pri.classList.remove('active')
  })
}

const inactiveAllDecoratorButtons = () => {
  const buttons = document.querySelectorAll('[aria-label="decorators-button-container"] button');
  buttons.forEach((pri) => {
    pri.classList.remove('active')
  })
}

const handleAllDecoratorsBox = (event, img, type) => {
  img.classList.add("decorator");

  const btn = event.target;
  const ariaLabel = btn.getAttribute("aria-label");

  if (!ariaLabel || !/decorator-\d+/.test(ariaLabel)) return;

  if (type == "decorators") {
    inactiveAllDecoratorButtons()
  } else if (type == "head-decorators") {
    inactiveAllHeadDecoratorButtons()
  }

  btn.classList.add('active')
  // remove previous animation classes
  img.classList.remove(
    "anim-bounce",
    "anim-slide",
    "anim-rotate",
    "anim-hair"
  );

  // animate out
  img.classList.add("animate-out");

  setTimeout(() => {
    // change image
    img.src = "assets/images/cute-avatar/" + ariaLabel + ".png";

    // choose animation type
    if (ariaLabel.includes("heart") || ariaLabel.includes("flower")) {
      img.classList.add("anim-bounce");
    } else if (ariaLabel.includes("headphone")) {
      img.classList.add("anim-slide");
    } else if (ariaLabel.includes("cap")) {
      img.classList.add("anim-rotate");
    } else if (ariaLabel.includes("hair") || ariaLabel.includes("pony")) {
      img.classList.add("anim-hair");
    }

    // animate in
    img.classList.remove("animate-out");
    img.classList.add("animate-in");
  }, 200);
};

buttonContainerDecorator.addEventListener("click", (event) => {
  handleAllDecoratorsBox(event, decoratorsImg, "decorators")
});
buttonContainerHeadDecorator.addEventListener("click", (event) => {
  handleAllDecoratorsBox(event, headDecoratorsImg, "head-decorators")
});

const charector = document.querySelector('[aria-label="charector"]');

/*
 */