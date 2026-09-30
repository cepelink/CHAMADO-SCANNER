// Service worker mínimo: necessário para o navegador tratar o site como app instalável.
// Não guarda nada em cache e não interfere nas requisições (o Firebase continua normal).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
