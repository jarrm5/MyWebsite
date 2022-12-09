function outputCurrentYear(){
    document.getElementsByClassName("footer-left")[0].innerHTML += (" " + new Date().getFullYear());
}

function underlineNav(){
    const test = document.querySelector("#main-nav");
    console.log(test[0]);
}