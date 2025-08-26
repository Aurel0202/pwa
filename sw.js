const version = 1.0

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/main.js",
  "/install.js",
  "/manifest.json",
  "/favicon.ico",
  "/register-sw.js",
  "/sw.js",
  "/icons/favicon-16x16.png",
  "/icons/favicon-256x256.png",
  "/icons/favicon-32x32.png",
  "/icons/favicon-96x96.png",
  "/screenshots/screenshot-portrait.png",
  "/screenshots/screenshot-paysage.png",
  "https://ingrwf12.cepegra-frontend.xyz/cockpit1/api/content/item/voyages"
]

const cacheVersion = 1

const CACHE_NAME = `pwa-cache-${cacheVersion}`

//install
self.addEventListener('install', e => {
  console.log('sw installed')
  e.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  )
  return self.skipWaiting()
})

self.addEventListener('activate', e => {
  console.log('sw actived')
  return self.clients.claim()
})

//proxy
self.addEventListener('fetch', e => {
     e.respondWith(
    caches.match(e.request)
    .then(cached => {
      return cached;
      }).catch(() => {
        return fetch(e.request).then((resp) => {
        const respClone = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, respClone));
        return resp;
        // Optionnel: renvoyer un fallback pour images/CSS si souhaité
        // return caches.match('/fallback.png');
      });
    })
  );
})