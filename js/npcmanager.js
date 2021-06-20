function loadNavbar() {
    var elem = document.createElement('div');
    elem.id = "navbar-placeholder"
    document.body.appendChild(elem);
    
    $.get("/projects/NPCManager/npcmanager-navbar.html", function(data){
        $("#navbar-placeholder").replaceWith(data);
    });
    
    var node = document.getElementById("navbar-script");
    if (node.parentNode) {
        node.parentNode.removeChild(node);
    }
}

// Loading Wiki page
const md = new Remarkable();
function getWikiPageData(name) {
    $.get('/projects/NPCManager/wiki/pages/'+name+'.md')
        .done(function(data) {
            $('#article').html(md.render(data))
        }).fail(function() {
            getWikiPageData('root');
        }); 
}
const page = new URLSearchParams(window.location.search).get('page')
if (page != null) {
    html = md.render(getWikiPageData(page));
} else {
    html = md.render(getWikiPageData('root'));
}
