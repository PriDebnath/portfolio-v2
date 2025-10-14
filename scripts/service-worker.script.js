const CACHE_NAME = 'portfolio-cache-v1';
const FOLDERS_TO_CACHE = [
  '/',
  '/index.html',
  '/assets/css/',
  '/scripts/',
  '/assets/images/',
  '/assets/fav-icon.ico'
];

// During install, cache the main page and folders
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Fetch index.html explicitly
      cache.add('/');
      cache.add('/index.html');
      // We don't add folder URLs here; they will be cached dynamically on fetch
    })
  );
});

// Intercept fetch requests
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Only cache requests from our folders or same origin
  if (
    requestUrl.origin === location.origin &&
    (
      requestUrl.pathname.startsWith('/assets/css/') ||
      requestUrl.pathname.startsWith('/scripts/') ||
      requestUrl.pathname.startsWith('/assets/images/') ||
      requestUrl.pathname === '/index.html' ||
      requestUrl.pathname === '/assets/fav-icon.ico'
    )
  ) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then(networkResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});
