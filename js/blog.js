function revealBlogPost(){
    let elem = this;
    //cycle through "continue reading" button's siblings and apply the styles when its clicked
    do {
        switch (elem.tagName) {
            case "SECTION":
                elem.children[0].classList.remove("cutoff-text");
                break;
            case "UL":
                this.style.visibility = "hidden";
                elem.style.display = "flex";
                break;
            default:
                break;
        }
        elem = elem.previousSibling;
    } while (elem);
}


const buttons = document.getElementsByClassName("btn-continue-reading");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", revealBlogPost);
}