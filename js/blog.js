function revealBlogPost(){
    console.log("continue reading button clicked.");
}


const buttons = document.getElementsByClassName("btn-continue-reading");
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", revealBlogPost);
}