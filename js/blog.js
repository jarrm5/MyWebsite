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

function incrementLikeCount(){
    //if the current count is empty string, convert it to "0". else get the current count
    let count = parseInt(this.previousElementSibling.innerHTML == "" ? "0" : this.previousElementSibling.innerHTML);
    this.previousElementSibling.innerHTML = ++count;
}

const buttons = document.getElementsByClassName("btn-continue-reading");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", revealBlogPost);
}

const likeButtons = document.getElementsByClassName("btn-like");
for (let index = 0; index < likeButtons.length; index++) {
    likeButtons[index].addEventListener("click", incrementLikeCount);
}