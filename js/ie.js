window.attachEvent('onload', mkwidth);
window.attachEvent('onresize', mkwidth);

var minwidth = document.getElementsByClassName("content").currentStyle['min-width'].replace('px', '');
var maxwidth = document.getElementByClassName("content").currentStyle['max-width'].replace('px', '');
function mkwidth(){
    document.getElementByClassName("content").style.width = document.documentElement.clientWidth < minwidth ? minwidth+"px" : (document.documentElement.clientWidth > maxwidth ? maxwidth+"px" : "100%");
};