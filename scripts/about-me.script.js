// Typing animation for About Me section
// Content is now in HTML for better SEO
// This script only handles the typing animation effect

let aboutMeSection = document.getElementById('about-me-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get the text content from HTML
            const aboutMeText = aboutMeSection.textContent.trim();
            // Clear and animate
            fadeTypingAnimation(aboutMeSection, aboutMeText, 100);
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering

observer.observe(aboutMeSection);
