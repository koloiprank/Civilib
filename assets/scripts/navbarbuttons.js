/*Arknights*/ 
const arknightsNav = document.getElementById("arknights-nav");
let arknightsExpanded = false;
/*Endfield*/ 
const endfieldNav = document.getElementById("endfield-nav");
let endfieldExpanded = false;
/*Media*/ 
const mediaNav = document.getElementById("media-nav");
let mediaExpanded = false;
/*Object array*/
const buttonsArray = {
    "arknights-button": {"nav": arknightsNav, "expanded": arknightsExpanded}, 
    "endfield-button": {"nav": endfieldNav, "expanded": endfieldExpanded},
    "media-button": {"nav": mediaNav, "expanded": mediaExpanded}
};


/*Button click*/
function resetInitialPosition(buttonName){
    const nav = buttonsArray[buttonName]["nav"];
    const originalTransition = nav.style.transition;
    
    nav.style.transition = "none";
    
    nav.style.opacity = "0";
    nav.style.visibility = "hidden";
    nav.style.transform = "translateX(0)";
    nav.style.maxHeight = "1.5rem";
    
    nav.style.transition = originalTransition;
};
function expandNav(buttonName){
    resetInitialPosition(buttonName);

    const nav = buttonsArray[buttonName]["nav"];
    buttonsArray[buttonName]["expanded"] = true;
    
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
    nav.style.transform = "translateX(12.5rem)";
    setTimeout(()=>{nav.style.maxHeight="100%"}, 230);
};
function contractNav(buttonName){    
    const nav = buttonsArray[buttonName]["nav"];
    const originalTransition = nav.style.transition;
    buttonsArray[buttonName]["expanded"] = false;
    
    nav.style.maxHeight = "1.5rem";
    setTimeout(()=>{nav.style.transform = "translateX(0)";}, 230);
    setTimeout(()=>{resetInitialPosition(buttonName);}, 350);
};
document.addEventListener("click", (event)=>{
    const target = event.target; 
    const targetParent = target.parentNode;
    
    const buttonName = target.id in buttonsArray ? target.id :
    targetParent.id in buttonsArray ? targetParent.id :
    undefined;
    if (!buttonName) return;
    
    const isExpanded = buttonsArray[buttonName]["expanded"];
    isExpanded ? contractNav(buttonName) : expandNav(buttonName);
});


/*Outside Click*/
document.addEventListener("click", (event)=>{
    const arknightsTarget = document.querySelector("#arknights-nav");
    const arknightsButtonTarget = document.querySelector("#arknights-button")
    
    const endfieldTarget = document.querySelector("#endfield-nav")
    const endfieldButtonTarget = document.querySelector("#endfield-button")
    
    const mediaTarget = document.querySelector("#media-nav")
    const mediaButtonTarget = document.querySelector("#media-button")
    
    if (!(arknightsTarget.contains(event.target) || arknightsButtonTarget.contains(event.target))) {
        contractNav("arknights-button");
    };

    if (!(endfieldTarget.contains(event.target) || endfieldButtonTarget.contains(event.target))) {
        contractNav("endfield-button");
    };

    if (!(mediaTarget.contains(event.target) || mediaButtonTarget.contains(event.target))) {
        contractNav("media-button");
    };
});
