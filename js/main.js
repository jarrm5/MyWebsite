function outputCurrentYear(){
    document.getElementsByClassName("footer-left")[0].innerHTML += (" " + new Date().getFullYear());
}

function underlineNav(){
    const links = document.querySelectorAll("#main-nav ul li a");

    for (let index = 0; index < links.length; index++) {
        const element = links[index];
        if(document.title.toUpperCase() == element.innerHTML.toUpperCase()){
            links[index].classList.add("underline-nav");
        }
        else{
            links[index].classList.remove("underline-nav");
        }
    }
}

    