function e(e,t){return new Promise(function(n,c){e.addEventListener(t,function(c){c.preventDefault(),n("It was ".concat(t," on the element: ").concat(e.nodeName,", id: ").concat(e.id,"."))})})}var t=function(e){var t=document.createElement("div");t.classList.add("message"),t.textContent=e,o.appendChild(t)},n=document.getElementById("login"),c=document.getElementById("password"),d=document.getElementById("submit"),o=document.querySelector("body");e(n,"click").then(t),e(c,"click").then(t),e(d,"click").then(t),e(n,"input").then(t),e(c,"input").then(t),e(n,"blur").then(t),e(c,"blur").then(t),e(d,"blur").then(t);
//# sourceMappingURL=index.25616803.js.map
