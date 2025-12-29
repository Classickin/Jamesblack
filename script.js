function message() {
    alert("Not Implemented!");
}

document.getElementById("scrollBtn").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});

//from test
const openBtn = document.getElementById("openMenuBtn");
const closeBtn = document.getElementById("closeMenuBtn");
const sideMenu = document.getElementById("sideMenu");

openBtn.addEventListener("click", () =>{
    sideMenu.classList.add('show');
});

closeBtn.addEventListener("click", () =>{
    sideMenu.classList.remove("show");
});

const openBtnOne = document.getElementById("openMenuBtnOne");
const closeBtnOne = document.getElementById("closeMenuBtnOne");
const sideMenuOne = document.getElementById("sideMenuOne");

openBtnOne.addEventListener("click", () =>{
    sideMenuOne.classList.add('showOne');
});

closeBtnOne.addEventListener("click", () =>{
    sideMenuOne.classList.remove("showOne");
});
