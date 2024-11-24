//Step 1
//check whether service worker is available on the browser or not
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js", {
      scope: "./",
    })
    .then((res) => {
      console.log("Service worker is registered successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
