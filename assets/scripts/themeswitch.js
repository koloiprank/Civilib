let lightmode = localStorage.getItem("lightmode")
const themeSwitch = document.getElementById("theme-switch")

const enableLightmode = () => {
    document.body.classList.add("lightmode")
    
    localStorage.setItem("lightmode", "true")
}
const enableDarkmode = () => {
    document.body.classList.remove("lightmode")

    localStorage.setItem("lightmode", "false")
}

if(lightmode === "true") enableLightmode()
    
themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem("lightmode")
    
    if (lightmode === "false"){
        enableLightmode()
    }
    else if (lightmode === "true"){
        enableDarkmode()
    }
})