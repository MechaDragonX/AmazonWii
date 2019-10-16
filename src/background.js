var curentTab;
var playing = false;
var audio = new Audio();
audio.loop = true;

browser.runtime.onMessage.addListener(function handleMessage(request, sender, sendResponse) {
    if(request.onMessage == "wii") {
        browser.tabs.query( {
            active: true, currentWindow: true
        }, function(tabs) {
            playMusic(tabs)
        });
    }
});

browser.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    currentTab = tab.id;
    // TODO: Add audio files
    // if(tab.url == "*://*amazon.co.jp/*") audio.src = "data/オーディオ.ogg";
    /*else*/ audio.src = "data/audio.ogg";
});

function playMusic(tabs) {
    if(!playing) {
    audio.load();
    playing = true;
    audio.play();
    }
}

browser.tabs.onRemoved.addListener(function(tabId, removeInfo) {
    if(tabId == currentTab) {
        currentTab = null;
        playing = false;
        // audio.remove();
        console.log("Music stopped!");
    }
});
