



//Get all elements -declare const
const backgroundBody = document.querySelector(".body");
const burger = document.querySelector(".menu");
const menuConteiner = document.querySelector("#listUl");
const listButtons = document.querySelectorAll("menuList li")
const colorText = document.querySelector("h3");
const btnHome = document.querySelector(".btn-home");
const btnRed = document.querySelector(".btn-red");
const btnBlue = document.querySelector(".btn-blue");
const btnYellow = document.querySelector(".btn-yellow");
const btnGreen = document.querySelector(".btn-green");
const wrapper = document.querySelector("#conteiner");

//function to make the menu visible
function activateMenu() {
    wrapper.classList.add("show");
}

// Add event listener event on the menu en menu list
/*
wrapper.addEventListener("mouseover", closeMenu);
wrapper.addEventListener("click", activateMenu);
wrapper.addEventListener("click", closeMenu);
wrapper.addEventListener("mouseleave", closeMenu);

/* using the keyboard buttons from 1 to 5 to chnage the colors in the mneu
// keycode 49 is = 1, keycode 50 is = 2, ect till keycode 53 is = 5 */
document.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
        case 49:
            colorText.innerText = "Home";
            backgroundBody.style.background = "grey";
            break;
        case 50:
            colorText.innerText = "Blue";
            backgroundBody.style.background = "blue";
            break;
        case 51:
            colorText.innerText = "Green";
            backgroundBody.style.background = "green";
            break;
        case 52:
            colorText.innerText = "Yellow";
            backgroundBody.style.background = "yellow";
            break;
        case 53:
            colorText.innerText = "Red";
            backgroundBody.style.background = "red";
            break;
        default: break;
    }
});

//add event listenr to every button/color
btnHome.addEventListener("click", function () {
    colorText.innerText = "Home";
    backgroundBody.style.background = "grey";
    activateMenu()
});

btnRed.addEventListener("click", function () {
    colorText.innerText = "Red";
    backgroundBody.style.background = "red";
    activateMenu()
});

btnBlue.addEventListener("click", function () {
    colorText.innerText = "Blue";
    backgroundBody.style.background = "blue";
    activateMenu()
});

btnGreen.addEventListener("click", function () {
    colorText.innerText = "Green";
    backgroundBody.style.background = "green";
    activateMenu()
});

btnYellow.addEventListener("click", function () {
    colorText.innerText = "Yellow";
    backgroundBody.style.background = "yellow";
    activateMenu()
});
