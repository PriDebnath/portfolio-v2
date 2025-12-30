


//// Animation observer for project cards
// All projects are now in HTML for better SEO
// This script only handles intersection animations

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation-project-card-link-slide"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering

// Observe all existing project skills and action containers in the HTML
const projectSkills = document.querySelectorAll(".project-skills");
const projectActions = document.querySelectorAll(".project-card-action");

projectSkills.forEach(skills => observer.observe(skills));
projectActions.forEach(action => observer.observe(action));

/* 
  
               <!--
        <div class="project-card animate-company-container">
          <div class="project-card-img-box">

            <img src="assets/images/project-fylehq-homepage-clone.png"
                 title="project fylehq homepage clone"
                 alt="project fylehq homepage clone"
                 class="project-card-img" />
          </div>

          <div class="project-card-body">
            <h3 class="text-primary project-name"
                title="fylehq clone">fylehq clone</h3>
            <p class="text-secondary project-desc"
               title="This project is a front-end replication of the popular expense management platform, Fyle HQ, 
           designed to provide a sleek and responsive user experience. The clone was built using Ant Design 
           (ng-zorro), a powerful Angular UI library, to ensure modern and consistent styling throughout the application.">
              This project is a front-end replication
              of the popular expense management
              platform,
              Fyle
              HQ, designed to provide a sleek and responsive user experience. The clone was built using Ant Design
              (ng-zorro),
              a powerful Angular UI library, to ensure modern and consistent styling throughout the application.
            </p>
          </div>
          <div class="project-card-footer">
            <div class="project-skills animation-project-card-link-slide">
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-angular"> </span>
              </div>
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-ant-design"> </span>
              </div>
              <div class="skill-icon">
                <span style="display: flex; align-items: center; aspect-ratio:1;"
                      class="span-svg-netlify"> </span>
              </div>
            </div>
            <div class="project-card-action animation-project-card-link-slide">
              <a href="https://github.com/PriDebnath/fylehq-clone"
                 target="_blank"
                 class="project-redirect-link project-redirect-link-left text-primary">

                <span class="span-svg-code stroke-primary project-redirect-link-icon"></span>
                <span>
                  Code
                </span>
              </a>
              <a href="https://fylehq-clone-by-pritam.netlify.app"
                 target="_blank"
                 class="project-redirect-link project-redirect-link-right text-primary">
                <span>
                  Live
                </span>
                <span class="span-svg-direct-top-right stroke-primary project-redirect-link-icon"></span>

              </a>
            </div>
          </div>
        </div>
      -->
*/