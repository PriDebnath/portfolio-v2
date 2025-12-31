
//
const body = document.documentElement;
const you = document.getElementsByClassName('you')[0];
const yourAura = document.getElementsByClassName('your-aura')[0];
const duration = getComputedStyle(document.documentElement).getPropertyValue('--animation-time');

// Apply theme based on system preference initially
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (!prefersDark) {
    body.classList.add('light-theme');
}

// Listen to system theme change in real time
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (e.matches) {
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
    }
});

if (you && yourAura) {
  you.addEventListener('click', () => {

      yourAura.classList.remove("you-come");
      yourAura.classList.add("you-go");
      you.classList.remove("show-aura");

      setTimeout(() => {
          body.classList.toggle('light-theme');
          //
          yourAura.classList.add("you-come");
          yourAura.classList.remove("you-go");
          you.classList.add("show-aura");

      }, parseInt(duration) * 1000);


  })
}