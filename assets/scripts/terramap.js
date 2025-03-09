const regions = document.querySelectorAll( '[id^="map-"]' );
const parent = regions[0].parentNode
const regionsOrdered = Array.from(parent.children);

function seamlessHover(region){
    // Move region to last
    region.addEventListener('mouseenter', ()=>{
        parent.appendChild(region);
    });

    // Restore original region order to avoid overlapping
    region.addEventListener('mouseleave', ()=>{
        setTimeout(()=>{
            regions.forEach(r=>r.remove());
            regionsOrdered.forEach(r=>parent.appendChild(r));
        }, 150);
    });
};

regions.forEach(region=>{
    // Add special style depending of region
    if(region.id === "map-unknown"){
        region.style.stroke = "#babec4";
        region.style.strokeWidth = "3.5px";
    }
    else{
        // Add stroke if not aegir faction
        region.id !== "map-aegir" ? region.style.stroke = "#333333" : null;
        region.id !== "map-aegir" ? region.style.strokeWidth = "3.5px": null;

        // Move region to last child when hovered to allow hovering over other regions
        // unless its one of the non-hovereable
        ["map-unclaimed", "map-unknown", "map-icefield", "map-unknown"].includes(region.id) ? null
        : seamlessHover(region);
    };
});