//
let aboutMe = `
    I'm Pritam Debnath a Front-End Developer with over 2 years of fulltime work experience,
 specializing in web application development. 
I'm passionate about crafting engaging user experiences 
and leveraging cutting-edge technologies to bring ideas to life.`
let aboutMeSection = document.getElementById('about-me-section')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            fadeTypingAnimation(aboutMeSection,
                aboutMe
                , 100);
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering





observer.observe(aboutMeSection);

