function revealProjectDesc(){
    //console.log("mouse-over");
    this.classList.add("project-box-hover");
    // this.children[1].classList.add("project-box-content-hover");
    this.children[1].classList.remove("project-box-content");
    this.children[1].classList.add("project-box-content-hover");
}
function hideProjectDesc(){
    //console.log("mouse-out");
    this.classList.remove("project-box-hover");
    this.children[1].classList.remove("project-box-content-hover");
    this.children[1].classList.add("project-box-content");
}

const projectBoxList = document.getElementsByClassName("project-box");
for (let index = 0; index < projectBoxList.length; index++) {
    projectBoxList[index].addEventListener("mouseover", revealProjectDesc);
    projectBoxList[index].addEventListener("mouseout", hideProjectDesc);
}
