/* RONDA · service worker: abre sin conexión y recibe versiones nuevas.
   Nunca toca las llamadas a Google (script.google.com / googleusercontent.com). */
const VERSION = 'ronda-1.6.0';
const ARCHIVOS = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'fonts/nunito-regular.woff', 'fonts/nunito-semibold.woff', 'fonts/nunito-bold.woff', 'fonts/nunito-extrabold.woff',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/favicon-32.png'];
/* Cada archivo por separado: si falta uno, la actualización sigue adelante con los demás. */
self.addEventListener('install', e => e.waitUntil(caches.open(VERSION)
  .then(c => Promise.all(ARCHIVOS.map(a => fetch(a, { cache: 'no-cache' }).then(r => r.ok ? c.put(a, r) : null).catch(() => null))))
  .then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys()
  .then(ks => Promise.all(ks.filter(k => k.indexOf('ronda-') === 0 && k !== VERSION).map(k => caches.delete(k))))
  .then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || e.request.headers.has('range')) return;
  e.respondWith(fetch(e.request, { cache: 'no-cache' })
    .then(r => { if (r.ok && r.status === 200) { const c = r.clone(); caches.open(VERSION).then(k => k.put(e.request, c)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true })
      .then(r => r || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined))
      .then(r => r || new Response('', { status: 504 }))));
});
