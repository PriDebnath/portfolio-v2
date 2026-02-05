

function handleBlinkAnimation(element) {
    // console.log('blink animation');

    let oldAnimation = element.style.animation;
    element.style.animation = 'blink 0.2s infinite';
    setTimeout(() => {
        element.style.animation = oldAnimation;
    }, 1000);
}

const itemClasses = [
    '.window-circle',
    '.window',
]

for (const itemClass of itemClasses) {
    let items = document.querySelectorAll(itemClass);
    if (items) {
        items.forEach(item => {
            if (item) {
                item.addEventListener('click', () => {
                    handleBlinkAnimation(item);
                });
            }
        });
    }
}
