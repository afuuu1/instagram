var dropUpVisible = false;

function toggleDropUpOptions() {
    var dropUpOptions = document.getElementById("dropUpOptions");
    dropUpVisible = !dropUpVisible; // Toggle the drop-up visibility state
    if (dropUpVisible) {
        dropUpOptions.classList.add("show-drop-up");
    } else {
        dropUpOptions.classList.remove("show-drop-up");
    }
}
var Searchbox = false;
function openSearchBox() {
    var upsearchbox = document.getElementById("find");
    Searchbox = !Searchbox;
    if (Searchbox) {
        upsearchbox.classList.add("show-search");

    }
    else {
        upsearchbox.classList.remove("show-search");

    }
}
var Notibox = false;
function openNotibox() {
    var upnotibox = document.getElementById("notification-box");
    Notibox = !Notibox;
    if (Notibox) {
        upnotibox.classList.add("show-notificaion");

    }
    else {
        upnotibox.classList.remove("show-notificaion");

    }
}
var postbox = false;
function opencreatebox() {
    var upbox = document.getElementById("create-post");
    postbox = !postbox;
    if (postbox) {
        upbox.classList.add("show-createbox");

    }
    else {
        upbox.classList.remove("show-createbox");

    }
}
function closecreate() {
    var upbox = document.getElementById("create-post");
    upbox.classList.remove("show-createbox");
}