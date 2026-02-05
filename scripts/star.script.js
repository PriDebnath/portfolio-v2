let main = document.getElementById("main")
if (!main) {
  // Exit early if element doesn't exist
  console.warn("Element with id 'main' not found");
}

if (main) {
  let createType1Star = () => {
    let star = document.createElement('div')
    star.classList.add("star-four")

    let starSvg = `
      <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path d="M50 5 L65 35 L95 40 L75 65 L80 95 L50 80 L20 95 L25 65 L5 40 L35 35 Z"
               fill="snow" stroke="white" stroke-width="5" stroke-linejoin="round"/>
      </svg>
       `
    star.innerHTML = starSvg
    star.style.height = getRandomNumber(1, 8) + "px"
    star.style.top = getRandomNumber(0, 100) + "vh"
    star.style.left = getRandomNumber(0, 100) + "vw"
star.style.animationDelay = getRandomNumber(0, 2000) + "ms"

    main.appendChild(star)
  }

  let createType2Star = () => {
    let star = document.createElement('div')
    star.classList.add("star-five")

    let starSvg = `
      <svg width="100%" height="100%" viewBox="0 0 100 100">
          <path d="M50 5 L65 35 L95 40 L75 65 L80 95 L50 80 L20 95 L25 65 L5 40 L35 35 Z"
           fill="snow" stroke="white" stroke-width="5" stroke-linejoin="round"/>
      </svg>
       `
    star.innerHTML = starSvg
    star.style.height = getRandomNumber(1, 8) + "px"
    star.style.top = getRandomNumber(0, 100) + "vh"
    star.style.left = getRandomNumber(0, 100) + "vw"
star.style.animationDelay = getRandomNumber(0, 2000) + "ms"

    main.appendChild(star)
  }

  let createCircle = () => {
    let circle = document.createElement('div')
    circle.classList.add("star-circle")

    circle.style.height = getRandomNumber(1, 8) + "px"
    circle.style.top = getRandomNumber(0, 100) + "vh"
    circle.style.left = getRandomNumber(0, 100) + "vw"
    circle.style.animationDelay = getRandomNumber(0, 2000) + "ms"

    main.appendChild(circle)
  }

  for (let p = 0; p <= 4; p++) {
    setTimeout(() => {
      createType1Star()
    }, 10)
  }

  for (let p = 0; p <= 4; p++) {
    setTimeout(() => {
      createType2Star()
    }, 0)
  }

  for (let p = 0; p <= 15; p++) {
    setTimeout(() => {
      createCircle()
    }, 0)
  }
}