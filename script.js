let menuIcon = document.querySelector(".fa-bars");
let menus = document.querySelector(".header nav");
let cancel  = document.querySelector(".cancel");
menuIcon.onclick   = () =>{
    menus.classList.add("showMenu")
    cancel.style.display = "block"
    console.log("working")
}

cancel.onclick = () => {
    menus.classList.remove("showMenu")
}
