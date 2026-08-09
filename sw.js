/* ---------------------------------------------------
   Service Worker – cached die App-Hülle, damit die
   Begleitphase (Phase B) ohne Internet funktioniert.
   Version bump = neue Inhalte werden nachgeladen.
--------------------------------------------------- */
const CACHE_VERSION = "retreat-v4";

const APP_SHELL = [
  "./",
  "./index.html",
  "./begleitphase.html",
  "./packlisten.html",
  "./tagesplan.html",
  "./woop.html",
  "./woop-vordruck.pdf",
  "./css/style.css?v=2",
  "./js/content-data.js?v=2",
  "./manifest.webmanifest",
  "./icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/* Cache-first für die App-Hülle (offline-Priorität),
   mit Netzwerk-Fallback + Cache-Update im Hintergrund. */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);

      return cached || network;
    })
  );
});
