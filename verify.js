var initialUrl = window.location.href;
setTimeout(function() {
  console.log("web");
  window.location.href = verifyApi();
}, 25);

function verifyApi() {
    return(   window.location.href.replace("https://api.booji.app"+window.location.pathname+window.location.search));
}

// If "custom-uri://" is registered the app will launch immediately and your
// timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
// dialogue prior to the App Store application launching
window.location = "booji://"+window.location.href;