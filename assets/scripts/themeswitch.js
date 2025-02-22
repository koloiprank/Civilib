let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch-button");

const themeSlide = document.getElementById("theme-switch-slide");
const infoBubble = document.getElementById("theme-switch-info");


/*Enable/Disable functions*/
const enableLightmode = ()=>{
    document.body.classList.add("lightmode");
    
    themeSlide.style.transform = "translateX(-50%)";
    themeSlide.style.background = "#FFFFFF";
    infoBubble.innerText = "Light theme";
    
    localStorage.setItem("lightmode", "true");
};
const enableDarkmode = ()=>{
    document.body.classList.remove("lightmode");
    
    themeSlide.style.transform = "translateX(0)";
    themeSlide.style.background = "#0C0A00";
    infoBubble.innerText = "Dark theme";

    localStorage.setItem("lightmode", "false");
};


/*Automatic theme change on web entry*/
if(lightmode === "true"){
    enableLightmode();
};


/*Change on click*/
themeSwitch.addEventListener("click", ()=>{
    lightmode = localStorage.getItem("lightmode");
    
    if (lightmode === "false"){
        enableLightmode();
    }
    else if (lightmode === "true"){
        enableDarkmode();
    };
});
/*Hover bubble activation*/
themeSwitch.addEventListener("mouseover", ()=>{
    infoBubble.style.opacity = 1;
});
themeSwitch.addEventListener("mouseout", ()=>{
    infoBubble.style.opacity = 0;
});