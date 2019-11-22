var deferredPrompt;

self.addEventListener('beforeinstallprompt', function(e) {
    deferredPrompt = e;
    alert('not installed');
});

self.addEventListener('appinstalled', function(e) { //if the app is on home screen
  alert('yc installed');
});