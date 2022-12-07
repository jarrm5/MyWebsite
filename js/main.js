function outputCurrentYear(){
    document.getElementsByClassName("footer-left")[0].innerText += (" " + new Date().getFullYear());
}