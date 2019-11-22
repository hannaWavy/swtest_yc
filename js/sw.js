var deferredPrompt;

self.addEventListener('beforeinstallprompt', function(e) {
    deferredPrompt = e;
    console.log(e);
});