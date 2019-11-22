var deferredPrompt;

console.log('serv working');

self.addEventListener('beforeinstallprompt', function(e) {
    deferredPrompt = e;
    alert('not installed');
});

self.addEventListener('appinstalled', function(e) { //if the app is on home screen
  alert('yc installed');
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
});