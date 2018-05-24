function pageLoaded() {
    document.getElementById("loading").className="fadeout";
    setTimeout(function () {
        document.getElementById("loading").outerHTML="";
    }, 2000);
}

(function() {
    pageLoaded();
})();