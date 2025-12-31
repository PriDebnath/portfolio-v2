

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

    // Add drag functionality for x-axis movement
    let isDragging = false;
    let startX = 0;
    let currentTranslateX = translateX;
    let initialMouseX = 0;

    // Helper function to start dragging
    const startDrag = (clientX) => {
      isDragging = true;
      initialMouseX = clientX;
      
      // Get the actual current transform value from computed style BEFORE disabling animation
      // This accounts for any animation that may have modified it
      const computedStyle = window.getComputedStyle(cloud);
      const transform = computedStyle.transform;
      const cloudWidth = cloud.offsetWidth || parseFloat(computedStyle.width);
      
      // Parse the current translateX value
      if (transform && transform !== 'none' && cloudWidth > 0) {
        const matrix = new DOMMatrix(transform);
        const translateXPixels = matrix.e;
        
        // Convert pixel translation to percentage (translateX(%) is relative to element's own width)
        currentTranslateX = (translateXPixels / cloudWidth) * 100;
      } else {
        // Fallback: try to parse from inline style
        const transformValue = cloud.style.transform;
        if (transformValue && transformValue.includes('translateX')) {
          const match = transformValue.match(/translateX\(([^)]+)\)/);
          if (match) {
            currentTranslateX = parseFloat(match[1]);
          }
        }
      }
      
      // Now disable animation and preserve the current position
      cloud.style.animation = 'none';
      cloud.style.transform = `translateX(${currentTranslateX}%)`;
      cloud.style.cursor = 'grabbing';
    };

    // Helper function to handle drag movement
    const handleDrag = (clientX) => {
      if (!isDragging) return;
      
      const deltaX = clientX - initialMouseX;
      // Get cloud width - translateX(%) is relative to element's own width
      const cloudWidth = cloud.offsetWidth || parseFloat(window.getComputedStyle(cloud).width);
      
      // Convert pixel movement to percentage of element width with increased sensitivity
      const sensitivity = 3;
      const deltaPercent = (deltaX / cloudWidth) * 100 * sensitivity;
      const newTranslateX = currentTranslateX + deltaPercent;
      
      cloud.style.transform = `translateX(${newTranslateX}%)`;
    };

    // Helper function to end dragging
    const endDrag = () => {
      if (isDragging) {
        isDragging = false;
        cloud.style.cursor = 'grab';
        // Update currentTranslateX for next drag
        const transformValue = cloud.style.transform;
        if (transformValue && transformValue.includes('translateX')) {
          const match = transformValue.match(/translateX\(([^)]+)\)/);
          if (match) {
            currentTranslateX = parseFloat(match[1]);
          }
        }
      }
    };

    // Mouse events
    cloud.addEventListener('mousedown', (e) => {
      startDrag(e.clientX);
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      handleDrag(e.clientX);
    });

    document.addEventListener('mouseup', () => {
      endDrag();
    });

    // Touch events for mobile
    cloud.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        startDrag(e.touches[0].clientX);
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        handleDrag(e.touches[0].clientX);
        e.preventDefault();
      }
    }, { passive: false });

    document.addEventListener('touchend', () => {
      endDrag();
    });

    // Set initial cursor style
    cloud.style.cursor = 'grab';
    cloud.style.userSelect = 'none';
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