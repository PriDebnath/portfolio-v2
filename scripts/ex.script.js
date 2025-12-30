// Animation observer for company containers
// All company experiences are now in HTML for better SEO
// This script only handles intersection animations

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-company-container"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering

// Observe all existing company containers in the HTML
const companyContainers = document.querySelectorAll(".company-container");
companyContainers.forEach(container => {
    observer.observe(container);
});