

  function createCloudType1(param = {
    height: 60,
    width: 180,
    marginTop: 0,
    translateX: 50,
    top: 1,
    left: 1,
    className
  }) {
    let {
      height,
      width,
      marginTop,
      translateX,
      top,
      left,
      className = "cloud"
    } = param
    // Create main container
    const cloud = document.createElement('div');
    cloud.classList.add(className);

    if (window.innerWidth > 700) {
      height = height * 1.2
      width = width * 1.2
    }


    // cloud.style.height = height + "px" // done in css (cloud.style.css)
    // cloud.style.width = width + "px" // done in css (cloud.style.css)
    cloud.style.top = top + "vh"
    cloud.style.left = left + "vw"
    cloud.style.transform = "translateX(" + translateX + "%"
    cloud.style.animationDuration = Math.round(Math.random * 10) + "s";


    // top cloud
    const topCloud = document.createElement('div');
    topCloud.classList.add('top-cloud');
    topCloud.style.width = getRandomNumber(80, 150) + "%";

    // bottom cloud
    const bottomCloud = document.createElement('div');
    bottomCloud.classList.add('bottom-cloud');
    bottomCloud.style.width = getRandomNumber(80, 150) + "%";
    const bottomCloudChild = document.createElement('div');
    bottomCloudChild.classList.add('bottom-cloud-child');
    bottomCloud.appendChild(bottomCloudChild)


    // mid cloud
    const midCloud = document.createElement('div');
    midCloud.classList.add('mid-cloud');

    // Create mid cloud content
    const midCloudContent = document.createElement('div');
    midCloudContent.classList.add('mid-cloud-content');

    // Create mid cloud content sections
    const leftSvg = document.createElement('div');
    leftSvg.innerHTML = `
           <svg class="svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M140 140H0V139.501C30.9817 135.351 55 105.817 55 70C55 34.1828 30.9817 4.64861 0 0.498825V0H140V140Z" />
           </svg>
   
      `



    const rightSvg = document.createElement('div');
    rightSvg.innerHTML = `
    <svg class="svg" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 140H140L140 139.501C109.018 135.351 85 105.817 85 70C85 34.1828 109.018 4.64861 140 0.49882L140 0H0V140Z" />
    </svg>
`
    const svgBox = document.createElement('div');


    svgBox.classList.add('svg-box');



    // Append elements to mid-cloud-content
    midCloudContent.appendChild(leftSvg);
    midCloudContent.appendChild(svgBox);
    midCloudContent.appendChild(rightSvg);

    // Append mid-cloud-content to mid-cloud
    midCloud.appendChild(midCloudContent);


    // Append all elements to cloud
    cloud.appendChild(topCloud);
    cloud.appendChild(midCloud);
    cloud.appendChild(bottomCloud);

    // Append to document body or another container
    let main = document.getElementById("main")
    main.appendChild(cloud);
  }

  // Call the function to create and add the cloud
  let cloud1 = {
    height: getRandomNumber(30, 50),
    width: getRandomNumber(90, 110),
    marginTop: 5,
    translateX: getRandomNumber(-200, 200),
    top: 15,
    left: 6,
  }
  let cloud2 = {
    height: getRandomNumber(30, 65),
    width: getRandomNumber(90, 120),
    marginTop: 5,
    translateX: getRandomNumber(-200, 200),
    top: 26,
    left: 20,
  }
  let cloud3 = {
    height: getRandomNumber(40, 60),
    width: getRandomNumber(100, 150),
    marginTop: 5,
    translateX: getRandomNumber(-200, 200),
    top: 30,
    left: 75,
    className: "cloud-2"
  }
  /*     */


  setTimeout(() => {
    createCloudType1(cloud1)
    createCloudType1(cloud2)
    createCloudType1(cloud3)
  }, 0)