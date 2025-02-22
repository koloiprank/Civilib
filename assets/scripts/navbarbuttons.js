/*Arknights Button*/ 
const arknightsButton = document.getElementById("arknights-button");
const arknightsNav = document.getElementById("arknights-nav");
let arknightsExpanded = false;

const expandArknightsNav = ()=>{
    arknightsExpanded = true;
    arknightsNav.style.opacity = "1";

    setTimeout(()=>{arknightsNav.style.maxHeight = "100%"}, 250);
};
const contractArknightsNav = ()=>{
    arknightsExpanded = false;
    arknightsNav.style.maxHeight = "1.75rem";

    setTimeout(()=>{arknightsNav.style.opacity = "0"}, 300);
};

arknightsButton.addEventListener("click", ()=>{
    if (!arknightsExpanded) {
        expandArknightsNav();
    }
    else {
        contractArknightsNav();
    };
});


/*Endfield Button*/ 
const endfieldButton = document.getElementById("endfield-button");
const endfieldNav = document.getElementById("endfield-nav");
let endfieldExpanded = false;

const expandEndfieldNav = ()=>{
    endfieldExpanded = true;
    endfieldNav.style.opacity = "1";

    setTimeout(()=>{endfieldNav.style.maxHeight = "100%"}, 250);
};
const contractEndfieldNav = ()=>{
    endfieldExpanded = false;
    endfieldNav.style.maxHeight = "1.75rem";

    setTimeout(()=>{endfieldNav.style.opacity = "0"}, 300);
};

endfieldButton.addEventListener("click", ()=>{
    if (!endfieldExpanded) {
        expandEndfieldNav();
    }
    else {
        contractEndfieldNav();
    };
});


/*Media Button*/
const mediaButton = document.getElementById("media-button");
const mediaNav = document.getElementById("media-nav");
let mediaExpanded = false;

const expandMediaNav = ()=>{
    mediaExpanded = true;
    mediaNav.style.opacity = "1";

    setTimeout(()=>{mediaNav.style.maxHeight = "100%"}, 250)
}
const contractMediaNav = ()=>{
    mediaExpanded = false;
    mediaNav.style.maxHeight = "1.75rem";

    setTimeout(()=>{mediaNav.style.opacity = "0"}, 300);
};

mediaButton.addEventListener("click", ()=>{
    if (!mediaExpanded) {
        expandMediaNav();
    }
    else {
        contractMediaNav();
    };
});


/*Outside Click*/
document.addEventListener("click", (event)=>{
    const arknightsTarget = document.querySelector("#arknights-nav");
    const arknightsButtonTarget = document.querySelector("#arknights-button")
    if (!(arknightsTarget.contains(event.target) || arknightsButtonTarget.contains(event.target))) {
        contractArknightsNav();
    };
   
    const endfieldTarget = document.querySelector("#endfield-nav")
    const endfieldButtonTarget = document.querySelector("#endfield-button")
    if (!(endfieldTarget.contains(event.target) || endfieldButtonTarget.contains(event.target))) {
        contractEndfieldNav();
    };

    const mediaTarget = document.querySelector("#media-nav")
    const mediaButtonTarget = document.querySelector("#media-button")
    if (!(mediaTarget.contains(event.target) || mediaButtonTarget.contains(event.target))) {
        contractMediaNav();
    };
});
