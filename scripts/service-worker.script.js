// Cache name
const CACHE_NAME = 'portfolio-cache-v2';

// Files to pre-cache
const FILES_TO_CACHE = [
  '/', '/index.html',
  '/assets/fav-icon.ico',

  // CSS
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

  // JS
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
];

// Install: pre-cache files
self.addEventListener('install', event => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => {
        if (name !== CACHE_NAME) return caches.delete(name);
      }))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first strategy with graceful JS fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          // Cache GET requests from your origin
          if (event.request.method === 'GET' && event.request.url.startsWith(self.location.origin)) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        })
        .catch(err => {
          console.warn('[SW] Fetch failed (offline?)', event.request.url);

          // Graceful fallback for JS modules: return empty JS
          if (event.request.url.endsWith('.js')) {
            return new Response('', {
              headers: { 'Content-Type': 'application/javascript' }
            });
          }

          // Optional fallback for images: return a placeholder
          if (event.request.url.match(/\.(png|jpg|jpeg|webp|gif|svg)$/)) {
            return caches.match('/assets/images/pri.jpg'); // your default placeholder
          }

          // Optional fallback for CSS: return empty CSS
          if (event.request.url.endsWith('.css')) {
            return new Response('', {
              headers: { 'Content-Type': 'text/css' }
            });
          }

          return new Response('Offline content not available', { status: 503 });
        });
    })
  );
});
