function revealProjectDesc(){
    this.classList.add("project-box-hover");
    this.children[1].classList.add("project-box-content-hover");
    
}
function hideProjectDesc(){
    this.classList.remove("project-box-hover");
    this.children[1].classList.remove("project-box-content-hover");
}

const projectBoxList = document.getElementsByClassName("project-box");
for (let index = 0; index < projectBoxList.length; index++) {
    projectBoxList[index].addEventListener("mouseover", revealProjectDesc);
    projectBoxList[index].addEventListener("mouseout", hideProjectDesc);
}
