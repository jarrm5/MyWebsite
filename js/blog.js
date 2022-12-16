function revealBlogPost(){
    let elem = this;
    do {
        elem = elem.previousSibling;
    } while (elem.tagName != "SECTION");

    elem.children[0].classList.remove("cutoff-text");
    
    
}


const buttons = document.getElementsByClassName("btn-continue-reading");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", revealBlogPost);
}