


//// Animation observer for project cards
// All projects are now in HTML for better SEO
// This script only handles intersection animations

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(action => observer.observe(action));


// // Observe all existing project skills and action containers in the HTML
// const projectSkills = document.querySelectorAll(".project-skills");
// const projectActions = document.querySelectorAll(".project-card-action");

// projectSkills.forEach(skills => observer.observe(skills));
// projectActions.forEach(action => observer.observe(action));
