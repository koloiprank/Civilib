const regions = document.querySelectorAll( '[id^="map-"]' );

regions.forEach(region=>{
    // Move region to last child when hovered to allow hovering over other regions
    region.addEventListener('mouseenter', () => {
        const parent = region.parentNode;
        parent.removeChild(region);
        parent.appendChild(region);
  });
});