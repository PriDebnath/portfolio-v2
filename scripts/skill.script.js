
const root = document.documentElement

const my = getComputedStyle(root).getPropertyValue('--skill-padding-y');


let frontendSkillsElement = document.getElementById('frontend-skills');
let backendSkillsElement = document.getElementById('backend-skills');
let testingSkillsElement = document.getElementById('testing-skills');
let frontendSkills = [
  {
    title: "Angular", color: "#DD0031",
    link: "https://angular.dev/",
    icon: null // Icon is handled by span-svg-angular class
  },
  {
    title: "Next.js", color: "snow",
    link: "https://nextjs.org/docs",
    icon: null // Icon is handled by span-svg-next class
  },
  {
    title: "React", color: "#0081A3",
    link: "https://react.dev/",
    icon: null // Icon is handled by span-svg-react class
  },
  { breakSkill: true },
  {
    title: "RxJS", color: "#B7178C",
    link: "https://rxjs.dev/",
    icon: null // Icon is handled by span-svg-rxjs class
  },
  {
    title: "Redux", color: "#764ABC",
    link: "https://redux.js.org/",
    icon: null // Icon is handled by span-svg-redux class
  },
  { breakSkill: true },
  {
    title: "Tailwind CSS", color: "#06B6D4",
    link: "https://tailwindcss.com/",
    icon: null // Icon is handled by span-svg-tailwind class
  },
  {
    title: "Bootstrap", color: "#7952B3",
    link: "https://getbootstrap.com/",
    icon: null // Icon is handled by span-svg-bootstrap class
  },
  { breakSkill: true },
  {
    title: "HTML", color: "#E44D26",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: null // Icon is handled by span-svg-html class
  },
  {
    title: "CSS", color: "#264DE4",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: null // Icon is handled by span-svg-css class
  },
  {
    title: "JavaScript", color: "#F0DB4F",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: null // Icon is handled by span-svg-js class
  }
];

let backendSkills = [
  {
    title: "Node.js", color: "#83CD29",
    link: "https://nodejs.org/en/docs/",
    icon: null // Icon is handled by span-svg-node class
  },
  {
    title: "Django", color: "#092E20",
    link: "https://docs.djangoproject.com/en/4.0/",
    icon: null // Icon is handled by span-svg-django class
  }
];


let testingSkills = [
  {
    title: "Cypress", color: "#58D09E",
    link: "https://www.cypress.io/",
    icon: null // Icon is handled by span-svg-cypress class
  },
  {
    title: "Jasmine", color: "#8A4182",
    link: "https://jasmine.github.io/",
    icon: null // Icon is handled by span-svg-jasmine class
  },
  {
    title: "Karma", color: "#56C5A8",
    link: "https://karma-runner.github.io/",
    icon: null // Icon is handled by span-svg-karma class
  }
];

//
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('skill-active')
      observer.unobserve(entry.target);
    }
  })
}, { threshold: 0.2, rootMargin: "50px 0px" })

let addSkill = ({
  title,
  color,
  icon,
  link,
  breakSkill,
  skillsElement,
  removeAfter }) => {
  let skill = document.createElement('a');
  observer.observe(skill)

  if (link) {
    skill.href = link
    skill.target = "_blank"
  }
  skill.classList.add("skill");

  //// Handle events

  let handleMove = () => {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                 linear-gradient(to right, ${color}, var(--skill-border-color)) border-box`;
  }
  let handleOut = () => {
    skill.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                 linear-gradient(to right, var(--skill-border-color), var(--skill-border-color)) border-box`;
  }

  skill.addEventListener('mouseover', handleMove);
  skill.addEventListener('mouseout', handleOut);

  skill.addEventListener('touchmove', handleMove, { passive: true });
  skill.addEventListener('touchend', handleOut, { passive: true });






  //// Add icon
  if (icon) {
    const svgSpan = document.createElement('span')
    svgSpan.style.display = "flex"
    svgSpan.style.alignItems = "center"
    svgSpan.style.marginRight = my
    svgSpan.innerHTML = icon
    skill.appendChild(svgSpan)
  }
  if (title) {
    const titleSpan = document.createElement('span')
    titleSpan.innerText = title
    skill.appendChild(titleSpan)
  }

  //// 
  if (breakSkill) {
    let breakSkillElement = document.createElement('div')
    breakSkillElement.classList.add('break-skill')
    skillsElement.appendChild(breakSkillElement);
  } else {
    skillsElement.appendChild(skill);
  }

  // setTimeout(() => {
  //   skill.style.animation = "none";
  // }, removeAfter);
};

// Function to setup existing skill elements with animations and event handlers
let setupSkill = (skillElement, color) => {
  // Observe for animation
  observer.observe(skillElement);

  // Handle hover events
  let handleMove = () => {
    skillElement.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                     linear-gradient(to right, ${color}, var(--skill-border-color)) border-box`;
  }
  let handleOut = () => {
    skillElement.style.background = `linear-gradient(var(--skill-bg-color) 0 0) padding-box, 
                                     linear-gradient(to right, var(--skill-border-color), var(--skill-border-color)) border-box`;
  }

  skillElement.addEventListener('mouseover', handleMove);
  skillElement.addEventListener('mouseout', handleOut);
  skillElement.addEventListener('touchmove', handleMove, { passive: true });
  skillElement.addEventListener('touchend', handleOut, { passive: true });
};

// Function to find and setup existing skills from HTML
let setupExistingSkills = (skills, skillsElement) => {
  if (!skillsElement || !skills) return;

  // Get all existing skill links in the container
  const existingSkills = skillsElement.querySelectorAll('.skill');
  
  skills.forEach((skillData, index) => {
    if (skillData.breakSkill) {
      // Skip breakSkill items - they're already in HTML
      return;
    }

    // Find the matching skill element by title or link
    let skillElement = Array.from(existingSkills).find(el => {
      const titleMatch = el.textContent.trim().includes(skillData.title);
      const linkMatch = el.href === skillData.link || el.getAttribute('href') === skillData.link;
      return titleMatch || linkMatch;
    });

    if (skillElement) {
      // Add animation delay based on index
      let delay = 100 * (index + 1);
      setTimeout(() => {
        setupSkill(skillElement, skillData.color);
      }, delay);
    }
  });
};

// Setup all existing skills with animations
setupExistingSkills(frontendSkills, frontendSkillsElement);
setupExistingSkills(backendSkills, backendSkillsElement);
setupExistingSkills(testingSkills, testingSkillsElement);
