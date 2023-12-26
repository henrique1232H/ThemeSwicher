const buttonMoon = document.querySelector("#moon");
const buttonSun = document.querySelector("#sun");
const circle = document.querySelector(".circle");
const body = document.querySelector("body");

    
const handleClick = () => {
    buttonSun.onclick = () => {
        buttonSun.classList.add("opacity");
        buttonMoon.classList.remove("opacity")


        body.classList.add("DarkTheme");


        circle.classList.add("moveCircleSun");
        circle.classList.remove("moveCircleMoon");
        

        
    }

    buttonMoon.addEventListener("click", () => {


        buttonMoon.classList.add("opacity");
        buttonSun.classList.remove("opacity")

        body.classList.remove("DarkTheme");

        circle.classList.add("moveCircleMoon");
        circle.classList.remove("moveCircleSun")
    }) 

    
}

handleClick()