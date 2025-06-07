const yourAura = document.getElementsByClassName('your-aura')[0];
const you = document.getElementsByClassName('you')[0];
const duration = getComputedStyle(document.documentElement).getPropertyValue('--animation-time');
console.log({
    duration,
    u: parseInt(duration),
    p: getComputedStyle(document.documentElement)
})
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
let theme = isDarkMode ? 'dark' : 'light'
handleThemeChange(theme)

function handleThemeChange(theme = 'light') {
    console.log({ theme });

    const localTheme = {
        dark: {
            yourAuraColor1: '#5CB5BB',
            yourAuraColor2: '#4AA3A9',
            yourAuraColor3: '#33708C',
            yourAuraColor4: '#244F71'
        },
        light: {
            yourAuraColor1: '#ffe240',
            yourAuraColor2: '#FFD700',
            yourAuraColor3: '#FFC300',
            yourAuraColor4: '#FF8C00'
        }
    }

    // --cuteness - color: #F0F2E5;
    // --cuteness - color: #ffe240;
    // --your - color: snow;
    // /* --your-color: #FFD700; */

    document.documentElement.style.setProperty('--your-aura-color-1', localTheme[theme].yourAuraColor1)
    document.documentElement.style.setProperty('--your-aura-color-2', localTheme[theme].yourAuraColor2)
    document.documentElement.style.setProperty('--your-aura-color-3', localTheme[theme].yourAuraColor3)
    document.documentElement.style.setProperty('--your-aura-color-4', localTheme[theme].yourAuraColor4)

    // let bodyColor = getComputedStyle(document.documentElement).getPropertyValue('--body-color');
    // let bodyTextColor = getComputedStyle(document.documentElement).getPropertyValue('--body-text-color');
    // document.documentElement.style.setProperty('--body-text-color', bodyColor)
    // document.documentElement.style.setProperty('--body-color', bodyTextColor)

    // document.documentElement.style.setProperty('--primaryColor', theme.primaryColor)

    // document.documentElement.style.setProperty('--secondaryColor', theme.secondaryColor)

    // document.documentElement.style.setProperty('--headerBackgroundColor', theme.headerBackgroundColor)

    // document.documentElement.style.setProperty('--backgroundColor', theme.backgroundColor)
}

you.addEventListener('click', () => {

    yourAura.classList.remove("you-come");
    yourAura.classList.add("you-go");

    setTimeout(() => {
        yourAura.classList.add("you-come");
        yourAura.classList.remove("you-go");
        let currentTheme = theme == 'dark' ? 'light' : 'dark'
        theme = currentTheme
        handleThemeChange(theme)
    }, parseInt(duration) * 1000);


})