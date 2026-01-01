

function handleBlinkAnimation(element) {
    console.log('blink animation');

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

// Shake detection for mobile devices
let lastAcceleration = { x: 0, y: 0, z: 0 };
let lastShakeTime = 0;
const SHAKE_THRESHOLD = 15; // Acceleration threshold for shake detection
const SHAKE_COOLDOWN = 1000; // Minimum time between shake triggers (ms)

function detectShake(event) {
    const acceleration = event.accelerationIncludingGravity || event.acceleration;
    
    if (!acceleration) return;

    const currentTime = Date.now();
    
    // Calculate acceleration change
    const deltaX = Math.abs(acceleration.x - lastAcceleration.x);
    const deltaY = Math.abs(acceleration.y - lastAcceleration.y);
    const deltaZ = Math.abs(acceleration.z - lastAcceleration.z);
    
    // Calculate total acceleration change
    const totalDelta = deltaX + deltaY + deltaZ;
    
    // Check if shake is detected and cooldown has passed
    if (totalDelta > SHAKE_THRESHOLD && (currentTime - lastShakeTime) > SHAKE_COOLDOWN) {
        lastShakeTime = currentTime;
        triggerBlinkOnAllWindows();
    }
    
    // Update last acceleration values
    lastAcceleration = {
        x: acceleration.x || 0,
        y: acceleration.y || 0,
        z: acceleration.z || 0
    };
}

function triggerBlinkOnAllWindows() {
    console.log('Shake detected - triggering blink on all windows');
    
    const itemClasses = [
        '.window-circle',
        '.window',
    ];
    
    itemClasses.forEach(itemClass => {
        const items = document.querySelectorAll(itemClass);
        items.forEach(item => {
            if (item) {
                handleBlinkAnimation(item);
            }
        });
    });
}

// Request permission and set up device motion listener
if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
    // iOS 13+ requires permission
    DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response === 'granted') {
                window.addEventListener('devicemotion', detectShake);
            }
        })
        .catch(console.error);
} else {
    // For other devices, directly add the listener
    window.addEventListener('devicemotion', detectShake);
}