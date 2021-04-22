self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      // return cache.addAll([
      //   '/swtest_yc/',
      //   '/swtest_yc/index.html',
      //   '/swtest_yc/images/example.png'
      // ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request);
      // .then(function (response) {
      //   let responseClone = response.clone();
        
      //   caches.open('v1').then(function (cache) {
      //     cache.put(event.request, responseClone);
      //   });
      //   return response;
      // }).catch(function () {
      //   return caches.match('/swtest_yc/images/example.png');
      // });
    }
  }));
});

// var CACHE_NAME = 'yc-cache-v1';
// // var urlsToCache = [
// //   '/swtest_yc/index.html'
// // ];

// // self.addEventListener('install', function(event) {
// //   // Perform install steps
// //   event.waitUntil(
// //     caches.open(CACHE_NAME)
// //       .then(function(cache) {
// //         return cache.addAll(urlsToCache);
// //       })
// //   );
// // });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Cache hit - return response
//         if (response) {
//           return response;
//         }
//         console.log(event);
//         console.log(event.request);
//         return fetch(event.request);
//       }
//     )
//   );
// });
/*
    var deferredPrompt = false;
    var messageBlock = document.getElementById('messageBlock');
    var btnAdd = document.getElementById('btnAdd');



    window.addEventListener('appinstalled', function() {
        messageBlock.textContent = "install_chrome_pwa";
    });

    window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();

        deferredPrompt = e;
        btnAdd.style.display = "block";

        return false;
    });

    btnAdd.addEventListener('click', function(e) {
        if (deferredPrompt) {
            // hide our user interface that shows our A2HS button
            btnAdd.style.display = 'none';
            // Show the prompt
            deferredPrompt.prompt();
            console.log("add_chrome_banner");
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log("add_chrome_banner");   
                } else {
                    console.log("close_chrome_banner");
                }
                deferredPrompt = null;
            });
        }
    }); */