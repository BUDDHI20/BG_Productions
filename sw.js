const CACHE_NAME = 'bg-productions-v1';
const OFFLINE_URL = 'offline.html';

const ASSETS_TO_CACHE = [
    OFFLINE_URL,
    'style.css',
    'Logos/BGP.png'
];

// Install Service Worker and Cache Offline Page
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Show Offline Page when Network Fails
self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(OFFLINE_URL);
            })
        );
    }
});