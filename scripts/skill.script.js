import { directTopRightSvg } from './svg.script.js';

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
    title: "Zustand", color: "#0D99FF",
    link: "https://zustand-demo.pmnd.rs/",
    icon: null // Icon is handled by span-svg-zustand class
  },
  {
    title: "Tanstack", color: "#0D99FF",
    link: "https://tanstack.com/",
    icon: null // Icon is handled by span-svg-tanstack class
  },
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
    title: "Shadcn", color: "#0D99FF",
    link: "https://ui.shadcn.com/",
    icon: null // Icon is handled by span-svg-shadcn class
  },
  {
    title: "Framer", color: "#0D99FF",
    link: "https://www.framer.com/",
    icon: null // Icon is handled by span-svg-framer class
  },
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
    title: "CSS", color: "#0D99FF",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: null // Icon is handled by span-svg-css class
  },
  {
    title: "JavaScript", color: "#F0DB4F",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: null // Icon is handled by span-svg-js class
  },
  {
    title: "Typescript", color: "#007ACC",
    link: "https://www.typescriptlang.org/",
    icon: null // Icon is handled by span-svg-typescript class
  }
];

let backendSkills = [
  {
    title: "Bun", color: "#F1B31C",
    link: "https://bun.sh/",
    icon: null // Icon is handled by span-svg-bun class
  },
  {
    title: "Elysia", color: "#0D99FF",
    link: "https://elysiajs.com/",
    icon: null // Icon is handled by span-svg-elysia class
  },
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
    title: "Playwright", color: "#2D4552",
    link: "https://playwright.dev/",
    icon: null // Icon is handled by span-svg-playwright class
  },
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

    // Find the matching skill element by title attribute, text content, or link
    let skillElement = Array.from(existingSkills).find(el => {
      const titleAttrMatch = el.getAttribute('title') === skillData.title;
      const titleMatch = el.textContent.trim().includes(skillData.title);
      const linkMatch = el.href === skillData.link || el.getAttribute('href') === skillData.link;
      return titleAttrMatch || titleMatch || linkMatch;
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

// Fallback: Ensure all skills without skill-active class are observed
// This catches any skills that weren't matched in setupExistingSkills
[frontendSkillsElement, backendSkillsElement, testingSkillsElement].forEach(skillsElement => {
  if (skillsElement) {
    const unobservedSkills = skillsElement.querySelectorAll('.skill:not(.skill-active)');
    unobservedSkills.forEach(skill => {
      observer.observe(skill);
    });
  }
});

// Modal functionality for skills - uses common modal functions from reuseable.script.js

// Combine all skills for easy lookup
let allSkills = [
  ...frontendSkills.filter(s => !s.breakSkill),
  ...backendSkills,
  ...testingSkills
];

// Store selected skills for filtering projects later
let selectedSkills = new Set();

// Projects list
const projects = [
  {
    projectName: "portfolio-v2",
    tags: ["HTML", "CSS", "JavaScript"],
    createdAt: "2025-02-24"
  },
  {
    projectName: "PriDebnath",
    tags: ["Config", "GitHub"],
    createdAt: "2024-01-10"
  },
  {
    projectName: "chaskiq-maintained",
    tags: ["TypeScript"],
    createdAt: "2025-01-15"
  },
  {
    projectName: "you",
    tags: ["HTML", "CSS", "Three.js"],
    createdAt: "2024-11-02"
  },
  {
    projectName: "read-pdf-text",
    tags: ["HTML", "JavaScript"],
    createdAt: "2024-10-12"
  },
  {
    projectName: "css-ui",
    tags: ["HTML", "CSS"],
    createdAt: "2024-09-20"
  },
  {
    projectName: "string-manipulator",
    tags: ["JavaScript"],
    createdAt: "2024-08-05"
  },
  {
    projectName: "Quotes-Keeper-3",
    tags: ["Node.js", "React", "Bun", "Elysia", "Tailwind CSS",
      "JavaScript", "HTML", "CSS",
      "Cypress", "Playwright",
      "Jasmine", "Shadcn", "Framer", "Zustand", "Tanstack", "Typescript"],
    createdAt: "2026-01-01"
  },
  {
    projectName: "Quotes-Keeper-2",
    tags: ["Node.js", "Angular", "Django", "Python", "JavaScript", "HTML", "CSS", "SQL", "Cypress", "Playwright", "Jasmine", "Bootstrap", "Typescript"],
    createdAt: "2024-07-18"
  },
  {
    projectName: "audio-player",
    tags: ["HTML", "JavaScript"],
    createdAt: "2024-06-15"
  },
  {
    projectName: "fylehq-clone",
    tags: ["Node.js", "Angular", "TypeScript", "Ant Design", "CSS", "HTML", "Typescript"],
    createdAt: "2024-05-21"
  },
  {
    projectName: "image-gallery",
    tags: ["React", "Tailwind CSS", "JavaScript", "API"],
    createdAt: "2024-04-22"
  },
  {
    projectName: "Todos-2.0",
    tags: ["HTML", "JavaScript"],
    createdAt: "2024-03-28"
  },
  {
    projectName: "Theme-changer",
    tags: ["JavaScript", "CSS"],
    createdAt: "2024-02-18"
  },
  {
    projectName: "prink-prototype-version-2",
    tags: ["React", "TypeScript"],
    createdAt: "2024-01-30"
  },
  {
    projectName: "prink-prototype-version-1",
    tags: ["JavaScript"],
    createdAt: "2024-01-10"
  },
  {
    projectName: "code-journal",
    tags: ["JavaScript"],
    createdAt: "2023-12-05"
  },
  {
    projectName: "qa-bot",
    tags: ["JavaScript", "LLM", "AI"],
    createdAt: "2023-11-17"
  },
  {
    projectName: "record-screen",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    createdAt: "2023-10-25"
  },
  {
    projectName: "run-llm",
    tags: ["HTML", "JavaScript", "AI"],
    createdAt: "2023-09-09"
  },
  {
    projectName: "posts-v2",
    tags: ["Django", "Angular", "Cypress"],
    createdAt: "2023-08-14"
  },
  {
    projectName: "posts",
    tags: ["React", "Redux", "Tailwind CSS"],
    createdAt: "2023-08-14"
  },
  {
    projectName: "developer-portfolios",
    tags: ["Python"],
    createdAt: "2023-07-11"
  },
  {
    projectName: "bayesian-technologies-assignment",
    tags: ["TypeScript"],
    createdAt: "2023-06-28"
  },
  {
    projectName: "fyle-assignment",
    tags: ["TypeScript"],
    createdAt: "2023-05-30"
  },
  {
    projectName: "relu-consultancy-assignment",
    tags: ["HTML", "CSS", "TypeScript"],
    createdAt: "2023-05-05"
  },
  {
    projectName: "go-plus-inc-assignment",
    tags: ["JavaScript"],
    createdAt: "2023-04-20"
  },
  {
    projectName: "breez-The-place-of-yoga",
    tags: ["HTML", "CSS", "JavaScript"],
    createdAt: "2023-03-10"
  },
  {
    projectName: "cakie",
    tags: ["HTML", "CSS", "JavaScript"],
    createdAt: "2023-02-02"
  },
  {
    projectName: "tutedude-assignment",
    tags: ["HTML", "CSS"],
    createdAt: "2023-01-18"
  },
  {
    projectName: "Buydesk-Landing-Page",
    tags: ["HTML", "CSS"],
    createdAt: "2022-12-09"
  },
  {
    projectName: "weather_app",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    createdAt: "2022-11-23"
  }
];

// Function to find skill data by title or link
function findSkillData(skillElement) {
  const title = skillElement.textContent.trim();
  const link = skillElement.href || skillElement.getAttribute('href');

  return allSkills.find(skill => {
    const titleMatch = title.includes(skill.title) || skill.title.includes(title);
    const linkMatch = link === skill.link || skill.link === link;
    return titleMatch || linkMatch;
  });
}

// Function to open skill modal
function openSkillModal(skillElement, event) {
  // Prevent default link behavior
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Get skill data from the clicked element
  const skillData = findSkillData(skillElement);

  // Clear all selected skills for fresh start
  selectedSkills.clear();

  // Update URL hash with skill parameter if skill data found
  if (skillData) {
    // Add only the clicked skill to selected skills
    selectedSkills.add(skillData.title);
    window.location.hash = `skill=${encodeURIComponent(skillData.title)}`;
  } else {
    window.location.hash = 'skills';
  }

  // Use generic openModal with title for skills filter
  openModal('Filter by Skills', () => {
    // Display skills filter interface after modal opens with fresh start
    displaySkillsFilter(true);
  });
}

// Function to create a skill badge element
function createSkillBadge(skillData, isSelected = false) {
  const skillBadge = document.createElement('button');
  skillBadge.type = 'button';
  skillBadge.classList.add('skill-filter-badge');
  if (isSelected) {
    skillBadge.classList.add('selected');
  }

  skillBadge.style.cssText = `
    padding: 0.3rem 0.6rem;
    margin: 0.15rem;
    border: 1px solid ${skillData.color};
    border-radius: 0.3rem;
    background: ${isSelected ? skillData.color : 'transparent'};
    color: ${isSelected ? 'var(--body-color)' : skillData.color};
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.75rem;
    font-family: inherit;
  `;

  skillBadge.textContent = skillData.title;

  // Hover effects
  skillBadge.addEventListener('mouseover', () => {
    if (!isSelected) {
      skillBadge.style.background = skillData.color;
      skillBadge.style.color = 'var(--body-color)';
    }
  });

  skillBadge.addEventListener('mouseout', () => {
    if (!isSelected) {
      skillBadge.style.background = 'transparent';
      skillBadge.style.color = skillData.color;
    }
  });

  // Click handler to toggle selection
  skillBadge.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    toggleSkillSelection(skillData.title);
  });

  return skillBadge;
}

// Function to toggle skill selection
function toggleSkillSelection(skillTitle) {
  if (selectedSkills.has(skillTitle)) {
    selectedSkills.delete(skillTitle);
  } else {
    selectedSkills.add(skillTitle);
  }

  // Refresh the display
  displaySkillsFilter();
}

// Function to filter projects based on selected skills
function filterProjects() {
  if (selectedSkills.size === 0) {
    return projects; // Return all projects if no skills selected
  }

  // Filter projects that have at least one of the selected skills in their tags
  return projects.filter(project => {
    return project.tags.some(tag => selectedSkills.has(tag));
  });
}

// Function to create a project card element
function createProjectCard(project) {
  const projectCard = document.createElement('a');
  projectCard.href = `https://github.com/PriDebnath/${project.projectName}`;
  projectCard.target = '_blank';
  projectCard.rel = 'noopener noreferrer';
  projectCard.style.cssText = `
    padding: 0.6rem;
    margin: 0;
    border: 1px solid var(--body-text-color);
    border-radius: 0.3rem;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  `;

  projectCard.addEventListener('mouseover', () => {
    projectCard.style.borderColor = 'var(--body-text-color)';
    projectCard.style.transform = 'translateY(-1px)';
    projectCard.style.background = 'rgba(0, 0, 0, 0.3)';
  });

  projectCard.addEventListener('mouseout', () => {
    projectCard.style.borderColor = 'var(--body-text-color)';
    projectCard.style.transform = 'translateY(0)';
    projectCard.style.background = 'rgba(0, 0, 0, 0.2)';
  });

  // Left side: Project name and date
  const leftSection = document.createElement('div');
  leftSection.style.cssText = `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-width: 0;
  `;

  // Project name
  const projectName = document.createElement('h4');
  projectName.textContent = project.projectName;
  projectName.style.cssText = `
    margin: 0;
    padding: 0;
    font-size: 0.85rem;
    color: var(--body-text-color);
    font-weight: 600;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    flex-wrap: wrap;
  `;
  // Redirect Icon - Using SVG from svg.script.js
  const redirectIcon = document.createElement('span');
  redirectIcon.classList.add('project-redirect-link-icon');
  redirectIcon.innerHTML = directTopRightSvg;
  redirectIcon.style.cssText = `
      display: inline-flex;
      align-items: center;
      color: var(--body-text-color);
      opacity: 0.7;
    `;
  projectName.appendChild(redirectIcon);


  leftSection.appendChild(projectName);



  // Project date
  const projectDate = document.createElement('div');
  projectDate.textContent = `Created: ${project.createdAt}`;
  projectDate.style.cssText = `
    margin-top: 0.2rem;
    font-size: 0.7rem;
    color: var(--body-text-color);
    opacity: 0.7;
  `;
  leftSection.appendChild(projectDate);

  projectCard.appendChild(leftSection);

  // Right side: Project tags
  const tagsContainer = document.createElement('div');
  tagsContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-end;
  `;

  project.tags.forEach(tag => {
    const tagBadge = document.createElement('span');
    tagBadge.textContent = tag;
    const isSelected = selectedSkills.has(tag);
    const skillData = allSkills.find(s => s.title === tag);
    const tagColor = skillData ? skillData.color : 'var(--body-text-color)';

    tagBadge.style.cssText = `
      padding: 0.15rem 0.4rem;
      border: 1px solid ${tagColor};
      border-radius: 0.2rem;
      background: ${isSelected ? tagColor : 'transparent'};
      color: ${isSelected ? 'var(--body-color)' : tagColor};
      font-size: 0.65rem;
    `;
    tagsContainer.appendChild(tagBadge);
  });

  projectCard.appendChild(tagsContainer);

  return projectCard;
}

// Function to check URL for skill parameter and auto-select (only on initial load)
function checkAndSelectSkillFromURL(forceFreshStart = false) {
  const url = window.location.hash.slice(1);
  const urlParams = new URLSearchParams(url);
  const skillParam = urlParams.get('skill');

  if (skillParam) {
    const decodedSkill = decodeURIComponent(skillParam);
    // Check if skill exists in allSkills
    const skillExists = allSkills.some(skill => skill.title === decodedSkill);
    if (skillExists) {
      // Only clear and set if forceFreshStart is true (when opening from skill badge click)
      if (forceFreshStart) {
        selectedSkills.clear();
        selectedSkills.add(decodedSkill);
      }
      // If not forcing fresh start, don't modify selectedSkills - let user toggle freely
    }
  }
}

// Function to display skills filter interface in modal
function displaySkillsFilter(forceFreshStart = false) {
  // Check URL for skill parameter and auto-select (only if forceFreshStart is true)
  // This ensures we only do fresh start when opening modal, not when toggling skills
  if (forceFreshStart) {
    checkAndSelectSkillFromURL(true);
  }

  if (!modalElements.contentBox) initModalElements();
  modalElements.contentBox.innerHTML = '';
  modalElements.contentBox.className = 'skill-modal-content';

  modalElements.contentBox.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem;
    max-height: 70vh;
    overflow-y: auto;
  `;

  // Available Skills Section (First)
  const availableSection = document.createElement('div');
  availableSection.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const availableTitle = document.createElement('h4');
  availableTitle.textContent = 'Available Skills';
  availableTitle.style.cssText = `
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    color: var(--body-text-color);
    font-weight: 600;
  `;
  availableSection.appendChild(availableTitle);

  const availableContainer = document.createElement('div');
  availableContainer.id = 'available-skills-container';
  availableContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    padding: 0.5rem;
    border: 1px solid var(--body-text-color);
    border-radius: 0.3rem;
  `;

  allSkills.forEach(skill => {
    if (!selectedSkills.has(skill.title)) {
      const skillBadge = createSkillBadge(skill, false);
      availableContainer.appendChild(skillBadge);
    }
  });

  availableSection.appendChild(availableContainer);
  modalElements.contentBox.appendChild(availableSection);

  // Selected Skills Section (Second)
  const selectedSection = document.createElement('div');
  selectedSection.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const selectedTitle = document.createElement('h4');
  selectedTitle.textContent = 'Selected Skills';
  selectedTitle.style.cssText = `
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    color: var(--body-text-color);
    font-weight: 600;
  `;
  selectedSection.appendChild(selectedTitle);

  const selectedContainer = document.createElement('div');
  selectedContainer.id = 'selected-skills-container';
  selectedContainer.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    min-height: 2rem;
    padding: 0.5rem;
    border: 1px dashed var(--body-text-color);
    border-radius: 0.3rem;
    align-items: center;
    ${selectedSkills.size === 0 ? 'justify-content: center;' : ''}
  `;

  if (selectedSkills.size === 0) {
    const emptyMessage = document.createElement('span');
    emptyMessage.textContent = 'No skills selected. Click on available skills above to select them.';
    emptyMessage.style.cssText = `
      color: var(--body-text-color);
      opacity: 0.6;
      font-style: italic;
      font-size: 0.75rem;
    `;
    selectedContainer.appendChild(emptyMessage);
  } else {
    allSkills.forEach(skill => {
      if (selectedSkills.has(skill.title)) {
        const skillBadge = createSkillBadge(skill, true);
        selectedContainer.appendChild(skillBadge);
      }
    });
  }

  selectedSection.appendChild(selectedContainer);
  modalElements.contentBox.appendChild(selectedSection);

  // Filtered Projects Section (Third)
  const filteredProjects = filterProjects();

  const projectsSection = document.createElement('div');
  projectsSection.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `;

  const projectsTitle = document.createElement('h4');
  projectsTitle.textContent = selectedSkills.size > 0
    ? `Filtered Projects (${filteredProjects.length})`
    : 'All Projects';
  projectsTitle.style.cssText = `
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    color: var(--body-text-color);
    font-weight: 600;
  `;
  projectsSection.appendChild(projectsTitle);

  const projectsContainer = document.createElement('div');
  projectsContainer.id = 'filtered-projects-container';
  projectsContainer.style.cssText = `
    display: flex;
    flex-direction: column;
    max-height: 35vh;
    overflow-y: auto;
    padding: 0.5rem;
    border: 1px solid var(--body-text-color);
    border-radius: 0.3rem;
    gap: 0.4rem;
  `;

  if (filteredProjects.length === 0 && selectedSkills.size > 0) {
    const noProjectsMessage = document.createElement('div');
    noProjectsMessage.textContent = 'No projects found matching the selected skills.';
    noProjectsMessage.style.cssText = `
      color: var(--body-text-color);
      opacity: 0.6;
      font-style: italic;
      text-align: center;
      padding: 1rem;
      font-size: 0.75rem;
    `;
    projectsContainer.appendChild(noProjectsMessage);
  } else {
    filteredProjects.forEach(project => {
      const projectCard = createProjectCard(project);
      projectsContainer.appendChild(projectCard);
    });
  }

  projectsSection.appendChild(projectsContainer);
  modalElements.contentBox.appendChild(projectsSection);
}

// Add click event listeners to all skill badges
function addSkillModalListeners() {
  // Get all skill elements from all skill containers
  const allSkillElements = document.querySelectorAll('.skill');

  allSkillElements.forEach(skillElement => {
    skillElement.addEventListener('click', (e) => {
      // Check if it's a left click (not right click or middle click)
      if (e.button === 0 || !e.button) {
        openSkillModal(skillElement, e);
      }
    });
  });
}

// Initialize skill modal listeners after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addSkillModalListeners);
} else {
  // DOM is already ready
  addSkillModalListeners();
}

// Check URL parameters on page load (similar to recent activity)
window.addEventListener('load', () => {
  const url = window.location.hash.slice(1);
  const urlParams = new URLSearchParams(url);
  const skillParam = urlParams.get('skill');

  if (skillParam) {
    const decodedSkill = decodeURIComponent(skillParam);
    // Check if skill exists in allSkills
    const skillExists = allSkills.some(skill => skill.title === decodedSkill);
    if (skillExists) {
      // Clear all selected skills for fresh start
      selectedSkills.clear();
      // Auto-select only the skill from URL
      selectedSkills.add(decodedSkill);
      // Open the modal after a short delay to ensure DOM is ready
      setTimeout(() => {
        openModal('Filter by Skills', () => {
          displaySkillsFilter(true);
        });
      }, 100);
    }
  }
});