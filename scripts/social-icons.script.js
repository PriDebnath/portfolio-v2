// not used
const linkedinSvg = `

    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">

        <!-- Outer Square Border -->
        <path stroke-width="2" stroke-dasharray="72" stroke-dashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0" />
        </path>

        <!-- Animated "i" Shape -->
        <path stroke-width="1.5" stroke-dasharray="12" stroke-dashoffset="12" d="M8 10v6">
          <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1s" fill="freeze" />
        </path>

        <!-- Animated "n" Shape -->
        <path stroke-width="1.5" stroke-dasharray="24" stroke-dashoffset="24" d="M11 10v6m0-4c.5-.5 1-1 2-1s2 .5 2 2v3">
          <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1.5s" fill="freeze" />
        </path>

        <!-- Small Top Left Circle (Animated) -->
        <circle cx="8" cy="7" r="1" fill="currentColor">
          <animate attributeName="r" from="0" to="1" dur="1s" fill="freeze" />
        </circle>

      </g>
    </svg>

`

const githubSvg = `

            <svg xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            id="githubSvg"

            viewBox="0 0 24 24">
            <g fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2">

            <!-- Original Animated "M" Shape -->
            <path stroke-dasharray="32"
                stroke-dashoffset="32"
                d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
                transform="scale(0.9) translate(1,1)">
            <animate fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.7s"
                      values="32;0" />
            </path>
            <path stroke-dasharray="10"
                stroke-dashoffset="10"
                d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31">
            <animate fill="freeze"
                      attributeName="stroke-dashoffset"
                      begin="0.8s"
                      dur="0.2s"
                      values="10;0" />
            </path>

            <!-- Animated Outer Outline -->
            <rect x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-dasharray="80"
                stroke-dashoffset="80">
            <animate attributeName="stroke-dashoffset"
                      from="80"
                      to="0"
                      dur="0.7s"
                      fill="freeze" />
            </rect>

            </g>
            </svg>
`

const mediumSvg = `
   <svg xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       id="mediumSvg"
       viewBox="0 0 24 24">
    <g fill="none">

      <!-- Animated Outer Border -->
      <path fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-dasharray="72"
            stroke-dashoffset="72"
            d="M6.158 4h11.684C19.034 4 20 4.966 20 6.158v11.684C20 19.034 19.034 20 17.842 20H6.158A2.16 2.16 0 0 1 4 17.842V6.158C4 4.966 4.966 4 6.158 4Z">
        <animate attributeName="stroke-dashoffset"
                 from="72"
                 to="0"
                 dur="0.6s"
                 fill="freeze" />
      </path>

      <!-- Original 'M' Shape (Unchanged) -->
      <path fill="currentColor"
            d="M17.697 7.3l.015-.003v-.11h-2.9l-2.69 6.326L9.43 7.187H6.306v.11l.014.003c.529.12.798.298.798.94v7.52c0 .642-.27.82-.8.94l-.013.002v.11h2.12v-.11L8.41 16.7c-.529-.12-.798-.298-.798-.94V8.676l3.458 8.137h.196l3.559-8.364v7.496c-.046.508-.312.665-.791.773l-.014.003v.109h3.692v-.11l-.015-.002c-.48-.108-.752-.265-.797-.773l-.003-7.705h.003c0-.642.269-.82.797-.94" />

    </g>
  </svg>

`
const pinterestSvg = `
  <svg id="pinterest"
       xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24">
    <g fill="none"
       stroke="currentColor"
       stroke-linecap="round"
       stroke-linejoin="round">

      <!-- Outer Square Border -->
      <path stroke-width="2"
            stroke-dasharray="72"
            stroke-dashoffset="72"
            d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
        <animate fill="freeze"
                 attributeName="stroke-dashoffset"
                 dur="0.6s"
                 values="72;0" />
      </path>

      <!-- Inner S-like Shape ( make Centered with d=M12) & (Adjustable Thickness with stroke-width) -->
      <path stroke-width="1.1"
            stroke-dasharray="80"
            stroke-dashoffset="80"
            d="M11 13.5c-.2 1.3-.5 2.5-1.3 3.2c-.25-1.9.35-3.3.65-4.8
           c-.5-.9.05-2.6 1.1-2.2c1.3.5-1.1 3.2.5 3.6
           c1.7.35 2.4-3.1 1.4-4.2c-1.5-1.6-4.4-.05-4.1 2.2
           c.09.55.65.7.22 1.45c-.95-.2-1.24-1.05-1.2-2.1
           c.06-1.75 1.5-3 3-3.15c1.85-.2 3.55.7 3.8 2.5
           c.27 2.02-.85 4.21-2.85 4.05c-.55-.04-.78-.3-1.2-.58z">
        <animate attributeName="stroke-dashoffset"
                 from="80"
                 to="0"
                 dur="2s"
                 fill="freeze" />
      </path>
    </g>
  </svg>
`

const mailSvg = `
  <svg xmlns="http://www.w3.org/2000/svg"
       width="24"
       height="24"
       viewBox="0 0 24 24">
    <g fill="none"
       stroke="currentColor"
       stroke-linecap="round"
       stroke-linejoin="round"
       stroke-width="2">

      <!-- Outer Envelope Outline -->
      <rect x="3"
            y="5"
            width="16"
            height="14"
            rx="2"
            stroke-dasharray="72"
            stroke-dashoffset="72">
        <animate attributeName="stroke-dashoffset"
                 from="72"
                 to="0"
                 dur="0.7s"
                 fill="freeze" />
      </rect>

      <!-- Envelope Flap -->
      <path stroke-dasharray="32"
            stroke-dashoffset="32"
            d="M3 6l7 7l8-8">
        <animate attributeName="stroke-dashoffset"
                 from="32"
                 to="0"
                 dur="0.7s"
                 begin="0.3s"
                 fill="freeze" />
      </path>

      <!-- Letter Bottom -->
      <path stroke-dasharray="36"
            stroke-dashoffset="36"
            d="M3 19l6-6m4 0l4 4">
        <animate attributeName="stroke-dashoffset"
                 from="36"
                 to="0"
                 dur="0.7s"
                 begin="0.5s"
                 fill="freeze" />
      </path>

    </g>
  </svg>
`


let element = document.getElementById('social-icon-container');
let socialDetails = [
    {
        link: "https://www.linkedin.com/in/pritam-debnath-762019239",
        icon: linkedinSvg
    },
    {
        link: "https://github.com/PriDebnath",
        icon: githubSvg
    },
    {
        link: "https://medium.com/@pritam-debnath",
        icon: mediumSvg
    },
    {
        link: "https://in.pinterest.com/PriDebnath/",
        icon: pinterestSvg
    },
    {
        link: "mailto:debnathpritam0802@gmail.com",
        icon: mailSvg
    }
];


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("interecting")
            entry.target.classList.remove('d-none')
            entry.target.classList.add('d-block')
            observer.unobserve(entry.target);
        }
    })
}, { threshold: 0.2, rootMargin: "50px 0px" })



let addIcon = ({
    icon,
    link,
}) => {
    let linkelement = document.createElement('a');
    observer.observe(element)

    linkelement.href = link
    linkelement.classList.add("social-icon-box")
    // linkelement.classList.add("d-none")
    linkelement.target = "_blank"

    const svgSpan = document.createElement('span')
    svgSpan.innerHTML = icon
    linkelement.appendChild(svgSpan)
    element.appendChild(linkelement);
    console.log({
        element
    })
};



let observeIcons = (skills, skillsElement) => {
    if (skillsElement && skills) {
        skills.forEach((skill, index) => {
            let delay = 100 * (index + 1); // Adjust delay for animation
            setTimeout(() => {
                addIcon(skill);
            }, delay);
        });
    }
};

observeIcons(socialDetails, element);