/* Dungeon Master Service: Offline-Speicher */
const CACHE = 'dms-v9';
const CORE = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './regeln.json?v=1', './kartenschmiede.html'];
const EXTERN = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const same = url.origin === self.location.origin;
  if (!same && !EXTERN.includes(url.hostname)) return; // KI- und Bilddienste nie speichern
  if (req.mode === 'navigate' || (same && url.pathname.endsWith('.html'))) {
    // Seite: erst Netz (für Updates), offline aus dem Speicher
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put('./index.html', cp)); return r; })
      .catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  // Schriften, Excel-Bibliothek, Symbole: erst Speicher, sonst Netz und merken
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return r;
  })));
});
