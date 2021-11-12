var initialUrl = window.location.href;
setTimeout(function() {
  console.log("web");
  window.location.replace("https://api.booji.app"+window.location.pathname+window.location.search);
}, 25);

// If "custom-uri://" is registered the app will launch immediately and your
// timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
// dialogue prior to the App Store application launching
window.location = "booji://"+window.location.href;