// var deferredPrompt;

// self.addEventListener('beforeinstallprompt', function(e) {
//     deferredPrompt = e;
//     alert('not installed');
// });

// self.addEventListener('appinstalled', function(e) { //if the app is on home screen
//   alert('yc installed');
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});