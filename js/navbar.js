var elem = document.createElement('div');
elem.id = "navbar-placeholder"
document.body.appendChild(elem);

$.get("/navbar-template.html", function(data){
    $("#navbar-placeholder").replaceWith(data);
});

var node = document.getElementById("navbar-script");
if (node.parentNode) {
    node.parentNode.removeChild(node);
}
