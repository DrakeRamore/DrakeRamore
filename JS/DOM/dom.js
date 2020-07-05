var p = document.getElementById("somediv");
p.style.backgroundColor = "yellow";
p.style.border = "2px solid #000";

var d = document.getElementsByTagName("p");
d[0].style.border = "3px solid #000";

var t = document.querySelector("div > p");
t.style.backgroundColor = "green";

var dp = document.getElementById("p_1");
dp.innerText = "New text";

var dd = document.getElementById("p_1");
dd.innerHTML = "<h1>innerHTML</h1>"

var a = document.getElementsByTagName("p");
console.log(a);

var newEl = document.createElement("h1");
newEl.innerText = "create elements";
var body = document.getElementsByTagName("body");
//body[0].appendChild(newEl);
body[0].insertBefore(newEl,t);