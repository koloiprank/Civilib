const regions = document.querySelectorAll( '[id^="map-"]' );

regions.forEach(region=>{
    // Add special style depending of region
    if(region.id === "map-unknown"){
        region.style.stroke = "#babec4";
        region.style.strokeWidth = "3.5px";
    }
    else{
        region.id !== "map-aegir" ? region.style.stroke = "#333333" : true;
        region.id !== "map-aegir" ? region.style.strokeWidth = "3.5px": true;

        // Move region to last child when hovered to allow hovering over other regions
        region.addEventListener('mouseenter', () => {
            const parent = region.parentNode;
            parent.removeChild(region);
            parent.appendChild(region);
        });
    };
});