// not used in the project


function createCloudType2(param = {
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

    cloud.style.height = height + "px"
    cloud.style.width = width + "px"
    cloud.style.marginTop = marginTop + "px"
    cloud.style.top = top + "vh"
    cloud.style.left = left + "vw"
    cloud.style.transform = "translateX(" + translateX + "%"
    cloud.style.animationDuration = Math.round(Math.random * 10) + "s";


    //  cloud one, three, five

    const cloud1 = document.createElement('div');
    const cloud3 = document.createElement('div');
    const cloud5 = document.createElement('div');


    cloud1.classList.add('top-cloud');
    cloud3.classList.add('bottom-cloud');
    cloud5.classList.add('bottom-cloud');



    cloud1.style.width = getRandomNumber(80, 150) + "%";
    cloud3.style.width = getRandomNumber(80, 150) + "%";
    cloud5.style.width = getRandomNumber(80, 150) + "%";



    const bottomCloudChild = document.createElement('div');
    bottomCloudChild.classList.add('bottom-cloud-child');
    cloud3.appendChild(bottomCloudChild)
    cloud5.appendChild(bottomCloudChild)



    //cloud two and cloud four (svgs)
    const cloud2 = document.createElement('div');
    const cloud4 = document.createElement('div');
    cloud2.classList.add('mid-cloud');
    cloud4.classList.add('mid-cloud');


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

    // Append mid-cloud-content to cloud 2,4
    cloud2.appendChild(midCloudContent);
    cloud4.appendChild(midCloudContent);


    // Append all elements to cloud
    cloud.appendChild(cloud1);
    cloud.appendChild(cloud2);
    cloud.appendChild(cloud3);
    cloud.appendChild(cloud4);
    cloud.appendChild(cloud5);


    // Append to document body or another container
    let main = document.getElementById("main")
    main.appendChild(cloud);
  }

  // Call the function to create and add the cloud
  let cloudOne = {
    height: getRandomNumber(60, 100),
    width: getRandomNumber(120, 180),
    marginTop: 0,
    translateX: getRandomNumber(-20, 20),
    top: -30,
    left: 6,
    className: "cloud-2"

  }
  let cloudTwo = {
    height: getRandomNumber(60, 100),
    width: getRandomNumber(120, 180),
    marginTop: -15,
    translateX: getRandomNumber(-20, 20),
    top: -30,
    left: 6,
  }


  setTimeout(() => {
    createCloudType2(cloudOne)
    createCloudType2(cloudTwo)
  }, 0)