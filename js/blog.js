function revealBlogPost(){
    console.log("continue reading button clicked.");
    // this.parentElement.children[0].classList.remove("cutoff-text");
    const test = this.parentElement.children[0];
}


const buttons = document.getElementsByClassName("btn-continue-reading");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", revealBlogPost);
}