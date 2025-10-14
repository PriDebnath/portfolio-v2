// sw.js - Service Worker for Portfolio Offline Mode

const CACHE_NAME = 'portfolio-cache-v1';

// List all files you want to precache for offline use
const FILES_TO_CACHE = [
  '/', // main page
  '/index.html',

  // CSS files
  '/assets/css/cursor.style.css',
  '/assets/css/root.style.css',
  '/assets/css/reuseable.style.css',
  '/assets/css/cloud.style.css',
  '/assets/css/your.style.css',
  '/assets/css/star.style.css',
  '/assets/css/home-and-ground.style.css',
  '/assets/css/my.style.css',
  '/assets/css/tree.style.css',
  '/assets/css/ex.style.css',
  '/assets/css/skill.style.css',
  '/assets/css/projects.style.css',
  '/assets/css/about-me.style.css',
  '/assets/css/recent-activity.style.css',
  '/assets/css/testimonials.style.css',
  '/assets/css/footer.style.css',

  // JS files
  '/scripts/reuseable.script.js',
  '/scripts/fonts.script.js',
  '/scripts/cursor.script.js',
  '/scripts/my.script.js',
  '/scripts/cloud.script.js',
  '/scripts/star.script.js',
  '/scripts/tree.script.js',
  '/scripts/skill.script.js',
  '/scripts/ex.script.js',
  '/scripts/projects.script.js',
  '/scripts/footer.script.js',
  '/scripts/about-me.script.js',
  '/scripts/your.script.js',
  '/scripts/recent-activity.script.js',
  '/scripts/svg.script.js',

  // Images
  '/assets/images/pritam-6.png',
  '/assets/images/pri.jpg',
  '/assets/images/company-go-plus-logo.jpeg',
  '/assets/images/testimonial/sagar-n.webp',

  // Favicon
  '/assets/fav-icon.ico'
];

// Install event: cache all listed files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Pre-caching files');

      // Use Promise.allSettled to avoid failing install if one file fails
      return Promise.allSettled(
        FILES_TO_CACHE.map(url => cache.add(url))
      ).then(results => {
        results.forEach((result, index) => {
          if (result.status === 'rejected') {
            console.warn('[SW] Failed to cache:', FILES_TO_CACHE[index]);
          }
        });
      });
    })
  );
  self.skipWaiting(); // Activate worker immediately
});

// Activate event: clean up old caches if needed
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control of clients immediately
});

// Fetch event: serve cached files if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;

      return fetch(event.request)
        .then(networkResponse => {
          // Only cache GET requests
          if (event.request.method === 'GET') {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone).catch(err => {
                console.warn('[SW] Failed to cache dynamically:', event.request.url, err);
              });
            });
          }
          return networkResponse;
        })
        .catch(() => {
          // Fallback if offline
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
    })
  );
});
