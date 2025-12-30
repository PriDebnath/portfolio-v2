  function loadFonts() {
    // Check if Delius font is already loaded
    const existingDelius = document.querySelector('link[href*="Delius"]');
    if (existingDelius) return;

    // Preconnect links are already in HTML, so we only need to add the stylesheet
    // Add stylesheet for Delius font
    let stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://fonts.googleapis.com/css2?family=Delius&display=swap";
    document.head.appendChild(stylesheet);
  }

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(loadFonts, 0)
  });
