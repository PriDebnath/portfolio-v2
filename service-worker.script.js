// Worker.js

// Use timestamp to version cache automatically
const CACHE_NAME = 'portfolio-cache-' + new Date().getTime();

// List all files to precache
const FILES_TO_CACHE = [
  './',
  './index.html',

  // CSS files
  './assets/css/cursor.style.css',
  './assets/css/root.style.css',
  './assets/css/reuseable.style.css',
  './assets/css/cloud.style.css',
  './assets/css/your.style.css',
  './assets/css/star.style.css',
  './assets/css/home-and-ground.style.css',
  './assets/css/my.style.css',
  './assets/css/tree.style.css',
  './assets/css/ex.style.css',
  './assets/css/skill.style.css',
  './assets/css/projects.style.css',
  './assets/css/about-me.style.css',
  './assets/css/recent-activity.style.css',
  './assets/css/testimonials.style.css',
  './assets/css/footer.style.css',

  // JS files
  './scripts/reuseable.script.js',
  './scripts/home-and-ground.script.js',
  './scripts/fonts.script.js',
  './scripts/cursor.script.js',
  './scripts/my.script.js',
  './scripts/cloud.script.js',
  './scripts/star.script.js',
  './scripts/tree.script.js',
  './scripts/skill.script.js',
  './scripts/ex.script.js',
  './scripts/projects.script.js',
  './scripts/footer.script.js',
  './scripts/about-me.script.js',
  './scripts/your.script.js',
  './scripts/recent-activity.script.js',
  './scripts/svg.script.js',

  // Images
  './assets/images/pritam-6.png',
  './assets/images/pri.jpg',
  './assets/images/company-go-plus-logo.jpeg',
  './assets/images/testimonial/sagar-n.webp',

  // Favicon
  './assets/fav-icon.ico'
];

// Install event: precache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // console.log('[SW] Pre-caching files');
      return Promise.allSettled(FILES_TO_CACHE.map(url => cache.add(url)))
        .then(results => {
          results.forEach((result, index) => {
            if (result.status === 'rejected') {
              // console.warn('[SW] Failed to cache:', FILES_TO_CACHE[index]);
            }
          });
        });
    })
  );
  self.skipWaiting();
});

// Activate event: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            // console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch event: network-first for all resources to ensure updates are reflected immediately
self.addEventListener('fetch', event => {
  const request = event.request;

  // Network-first strategy for all resources (HTML, CSS, JS, images, etc.)
  // This ensures updates are fetched immediately from the server
  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        // Only cache successful GET requests
        if (request.method === 'GET' && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if network fails (offline support)
        return caches.match(request).then(cachedResponse => {
          if (cachedResponse) return cachedResponse;
          
          // Optional: fallback image if offline
          if (request.destination === 'image') {
            return caches.match('./assets/images/pritam-6.png');
          }
          
          // Return a basic error response if no cache available
          return new Response('Offline - Resource not available', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        });
      })
  );
});
