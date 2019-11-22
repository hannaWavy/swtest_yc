var deferredPrompt;

window.addEventListener('beforeinstallprompt', function(e) {
    console.log('you can install the app');
    deferredPrompt = e;
});