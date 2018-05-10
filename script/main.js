var selected = 0;
var els = document.getElementById("sidebar").getElementsByTagName("li");

function switchPage(id) {
    els[selected].className = "";
    selected = id;
    els[id].className = "selected";
    document.getElementsByTagName("main")[0].style = "left: -" + id * 100 + "%";
}

for (var i = 0; i < els.length; ++i) {
    els[i].onclick = function(num) {
        return function() {switchPage(num)};
    }(i);
}