setTimeout(function() {
  console.log("web");
  window.location.href =changepasswordWeb();
}, 25);

function changepasswordWeb() {
    return( window.location.href.replace("https://booji.app/changepasswordWeb.html"));
}
// If "custom-uri://" is registered the app will launch immediately and your
// timer won't fire. If it's not set, you'll get an ugly "Cannot Open Page"
// dialogue prior to the App Store application launching
window.location = "booji://"+window.location.href;