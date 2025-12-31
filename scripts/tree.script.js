let leaves = document.getElementById("leaf-box")
if (!leaves) {
  // Exit early if element doesn't exist
  console.warn("Element with id 'leaf-box' not found");
}

if (leaves) {
  let leafIndex = 0
  let createLeaf = (param = {
    top: undefined,
    left: undefined
  }) => {
    let leaf = document.createElement('div')
    leaf.classList.add('leaf')
    leaf.style.top = param.top + "%"
    leaf.style.left = param.left + "%"
    leafIndex++
    leaf.style.animationDelay = leafIndex + "s"
    leaves.appendChild(leaf)
  }
  let fromTop = 10
  // 1st layer leaves
  for (let p = 0; p < 5; p++) {
    createLeaf({
      top: getRandomNumber(-(fromTop), 0),
      left: getRandomNumber(35, 65),
    })
  }


  // 2nd layer leaves

  for (let p = 0; p < 5; p++) {
    createLeaf({
      top: getRandomNumber(0, fromTop),
      left: getRandomNumber(45, 55)
    })
  }


  for (let p = 0; p < 5; p++) {
    createLeaf({
      top: getRandomNumber(fromTop, fromTop * 2),
      left: getRandomNumber(35, 65),
    })
  }


  for (let p = 0; p < 10; p++) {
    createLeaf({
      top: getRandomNumber(fromTop * 2, fromTop * 3),
      left: getRandomNumber(45, 55)
    })
  }



  for (let p = 0; p < 10; p++) {
    createLeaf({
      top: getRandomNumber(fromTop * 3, fromTop * 4),
      left: getRandomNumber(15, 85)
    })
  }

  for (let p = 0; p < 10; p++) {
    createLeaf({
      top: getRandomNumber(fromTop * 4, fromTop * 5),
      left: getRandomNumber(5, 95)
    })
  }


  for (let p = 0; p < 30; p++) {
    createLeaf({
      top: getRandomNumber(fromTop * 5, fromTop * 7),
      left: getRandomNumber(15, 85)
    })
  }


  for (let p = 0; p < 30; p++) {
    createLeaf({
      top: getRandomNumber(fromTop * 7, fromTop * 10),
      left: getRandomNumber(20, 80)
    })
  }
}
