function handleResponse(message) {
    console.log(`Wii Shop Channel activated!`);
}
  
function handleError(error) {
    console.log(`Error: ${error}`);
}
  
function notifyBackgroundPage(e) {
    var sending = browser.runtime.sendMessage("wii");
    sending.then(handleResponse, handleError);
}
  
window.addEventListener("open", notifyBackgroundPage);