var div_a = document.getElementById("A");
var div_b = document.getElementById("B");
var div_c = document.getElementById("C");
var div_d = document.getElementById("D");

function handler() {
    console.log("Hello World");
}

div_a.addEventListener("click", handler, false);

div_b.addEventListener("click", function() {
    div_b.style.border = "1px solid #000";
    div_b.style.backgroundColor = "yellow";
}, false);

div_c.addEventListener("click", function(e) {
    console.log(e);
}, false);

div_d.addEventListener("click", function(e) {
    console.log(e.type, e.target);
}, false);

var divs = document.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function(e) {
        console.log(e.target);
        e.stopPropagation();
    }, false);
}

var hrefs = document.getElementsByTagName("a")[0];
var ifr = document.getElementsByTagName("iframe")[0];

hrefs.addEventListener("click", function(e) {
    console.log(e.target.href);
    ifr.src = e.target.href;
    e.preventDefault();
}, false);

var justdiv = document.getElementById("justdiv");

var mouseColor = {
    "mouseover": "yellow",
    "click": "red",
    "dblclick": "blue",
    "mouseout": "white"
};

for (var etype in mouseColor) {
    justdiv.addEventListener(etype, e => {
        e.target.style.backgroundColor = mouseColor[e.type];
        console.log(e);
    }, false);
}

/*justdiv.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "yellow";
}, false);

justdiv.addEventListener("click", function(e) {
    e.target.style.backgroundColor = "red";
}, false);

justdiv.addEventListener("dblclick", function(e) {
    e.target.style.backgroundColor = "blue";
}, false);

justdiv.addEventListener("mouseout", function(e) {
    e.target.style.backgroundColor = "transparent";
}, false);*/