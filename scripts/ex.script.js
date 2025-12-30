// import { circleSvg } from "./svg.script";

const companies = [
    {
        name: "Omicron Technologies",
        img_src: "assets/images/company-omicron-logo.jpg",
        roles: [{
            name: "Frontend Developer", type: "Internship", length: 'Nov 2022 - Jan 2023 · 3 mos'
        }],
        skills: [
            { link: 'https://react.dev/', className: "span-svg-react" },
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', className: "span-svg-js" },
            { link: 'https://www.typescriptlang.org/docs/', className: "span-svg-ts" },

        ]
    },
    {
        name: "GroRapid Labs",
        img_src: "assets/images/company-hsv-digital-logo.jpeg",
        roles: [{
            name: "Frontend Developer", type: "Internship", length: 'Jul 2022 - Oct 2022 · 4 mos'
        }],
        skills: [
            { link: 'https://react.dev/', className: "span-svg-react" },
            { link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', className: "span-svg-js" },
            { link: 'https://www.typescriptlang.org/docs/', className: "span-svg-ts" },
            { link: 'https://redux.js.org/', className: "span-svg-redux" },
            { link: 'https://www.tailwind.com/', className: "span-svg-tailwind" },

        ]
    },
];


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-company-container"); // Add animation class
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.2, rootMargin: "50px 0px" }); // Slight margin for smoother triggering


const exCards = document.getElementById("ex-cards");

companies.forEach(company => {
    const card = document.createElement("div");
    card.className = "ex-card";
    //
    const joinCardCompanyContainer = document.createElement("div");
    joinCardCompanyContainer.className = "join-card-company-container"
    card.appendChild(joinCardCompanyContainer)
    //
    const companyContainer = document.createElement("div");
    companyContainer.className = "company-container";
    observer.observe(companyContainer);


    //
    const companyBox = document.createElement("div");
    companyBox.className = "company-box";
    //
    const img = document.createElement("img");
    img.className = "company-img";
    img.src = company.img_src;
    img.loading = "lazy";
    img.decoding = "async";
    img.alt = `${company.name} logo`;
    companyBox.appendChild(img)
    //
    const companyName = document.createElement("h3");
    companyName.classList.add("company-name")
    const companyNameLink = document.createElement("a");
    companyNameLink.textContent = company.name;
    companyNameLink.href = company.link;
    companyName.appendChild(companyNameLink)
    //
    companyBox.appendChild(companyName);
    companyContainer.appendChild(companyBox);
    //
    //
    const companyRoleBox = document.createElement("div");
    companyRoleBox.className = "company-role-box";

    company.roles.forEach((role, p) => {
        const companyRole = document.createElement("div");
        companyRole.className = "company-role";

        const svgContainer = document.createElement("div");
        svgContainer.className = "svg-container";

        const spanSvgCircle = document.createElement("span");
        spanSvgCircle.classList.add('span-svg-circle')
        svgContainer.appendChild(spanSvgCircle)
        companyRole.appendChild(svgContainer)
        //
        if (company.roles.length > 1) {

            const roleVerticalLine = document.createElement("span");
            roleVerticalLine.classList.add(
                "role-vertical-line")
            if (p == 0) {
                roleVerticalLine.classList.add("first-role-vertical-line")

            } else if (p == company.roles.length - 1) {
                roleVerticalLine.classList.add("last-role-vertical-line")

            }
            svgContainer.appendChild(roleVerticalLine)

        }


        //
        const roleBox = document.createElement("div");
        roleBox.classList.add("role-box")
        const roleName = document.createElement("h4");
        roleName.classList.add("role-name")
        roleName.textContent = role.name
        roleBox.appendChild(roleName)
        //

        const roleType = document.createElement("p");
        roleType.classList.add("role-type")
        roleType.textContent = role.type
        roleBox.appendChild(roleType)
        //
        const roleLength = document.createElement("p");
        roleLength.classList.add("role-length")

        roleLength.textContent = role.length
            ;
        roleBox.appendChild(roleLength)
        //

        companyRole.appendChild(roleBox);
        //
        companyRoleBox.appendChild(companyRole)
    });

    companyContainer.appendChild(companyRoleBox);
    //
    //
    const skillBox = document.createElement("div");
    skillBox.className = "company-accured-skill-box flex-wrap";

    const skillTitle = document.createElement("p");
    skillTitle.classList.add("white-space-nowrap")
    skillTitle.textContent = "Acquired tech skills";
    skillBox.appendChild(skillTitle);
    //
    const skillIcons = document.createElement("div");
    skillIcons.classList.add('flex')
    skillIcons.classList.add('align-items-center')
    skillIcons.classList.add('flex-wrap')

    company.skills.forEach(s => {
        const skill = document.createElement("a");
        skill.href = s.link
        skill.target = "_blank"
        skill.classList.add("skill-icon")
        //
        const spanSvg = document.createElement("span");
        spanSvg.style.display = "flex"
        spanSvg.style.alignItems = "center"
        spanSvg.style.aspectRatio = "1"
        spanSvg.classList.add(s.className)
        //
        skill.appendChild(spanSvg);
        skillIcons.appendChild(skill)
    });
    skillBox.appendChild(skillIcons);
    //
    companyContainer.appendChild(skillBox);
    card.appendChild(companyContainer);
    exCards.appendChild(card);
});