const CACHE_NAME = 'evey-pass-v2';
const ASSETS = ['./', './index.html', './manifest.json'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(r => {
        if (r.ok) { const c = r.clone(); caches.open(CACHE_NAME).then(cache => cache.put(e.request, c)); }
        return r;
      });
    }).catch(() => e.request.destination === 'document' ? caches.match('./index.html') : undefined)
  );
});
