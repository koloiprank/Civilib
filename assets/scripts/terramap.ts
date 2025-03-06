import * as hg from "honeycomb-grid"
import { Polygon, Svg, SVG } from '@svgdotjs/svg.js'

// Faction objects
function* coordGen(minX: number, maxX: number, y: number){
    let currX: number = minX;

    while(currX <= maxX){
        yield [currX, y]
        currX++
    };
};

const factionMaterials = {
    ocean: {
        fill: "#205E93",
        class: ".map-ocean-hex"
    },
    unclaimed: {
        fill: "#A4B8C1",
        class: ".map-unclaimed-hex"
    },
    unknown: {
        fill: "#2C3844",
        class: ".map-unknown-hex"
    },
    icefield: {
        fill: "#FFFFFF",
        class: ".map-icefield-hex"
    },
    sami: {
        fill: "#8954A8",
        class: ".map-sami-hex"
    },
    ursus: {
        fill: "#C13232",
        class: ".map-ursus-hex"
    },
    higashi: {
        fill: "#625199",
        class: ".map-higashi-hex"
    },
    yan: {
        fill: "#C1AB3E",
        class: ".map-yan-hex"
    },
    kazimierz: {
        fill: "#00A333",
        class: ".map-kazimierz-hex"
    },
    columbia: {
        fill: "#071B99",
        class: ".map-columbia-hex"
    },
    bolivar: {
        fill: "#35B7B1",
        class: ".map-bolivar-hex"
    },
    kjerag: {
        fill: "#BCBCBC",
        class: ".map-kjerag-hex"
    },
    victoria: {
        fill: "#5E5ACE",
        class: ".map-victoria-hex"
    },
    leithanien: {
        fill: "#2E7057",
        class: ".map-victoria-hex"
    },
    siracusa: {
        fill: "#BAA562",
        class: ".map-siracusa-hex"
    },
    kazdel: {
        fill: "#869EB7",
        class: ".map-kazdel-hex"
    },
    sargon: {
        fill: "#C6A233",
        class: ".map-sargon-hex"
    },
    minos: {
        fill: "#E59D39",
        class: ".map-minos-hex"
    },
    laterano: {
        fill: "#FFF18C",
        class: ".map-laterano-hex"
    },
    rimbilliton: {
        fill: "#871F56",
        class: ".map-rimbilliton-hex"
    },
    iberia: {
        fill: "#871F56",
        class: ".map-iberia-hex"
    },
    hotlands: {
        fill: "#725543",
        class: ".map-hotlands-hex"
    },
    aegir: {
        fill: "#2674AF",
        class: ".map-aegir-hex"
    }
};
const factionCoords = {
    unclaimed: [
        [0, 0]
    ],
    unknown: [
        ...coordGen(24, 31, 2), ...coordGen(24, 32, 3), ...coordGen(21, 37, 4),
        ...coordGen(21, 38, 5), ...coordGen(20, 37, 6), ...coordGen(20, 38, 7),
        ...coordGen(19, 38, 8), ...coordGen(19, 40, 9), ...coordGen(18, 41, 10),
        ...coordGen(19, 41, 11), ...coordGen(18, 38, 12), ...coordGen(16, 39, 13),
        ...coordGen(15, 39, 14), ...coordGen(16, 40, 15), ...coordGen(16, 39, 16),
        ...coordGen(17, 40, 17), ...coordGen(17, 39, 18), ...coordGen(18, 38, 19),
        ...coordGen(18, 39, 20), ...coordGen(17, 38, 21), ...coordGen(18, 38, 22),
        ...coordGen(18, 37, 23), ...coordGen(19, 38, 24), ...coordGen(20, 37, 25),
        ...coordGen(21, 37, 26), ...coordGen(21, 34, 27), ...coordGen(23, 34, 28),
        ...coordGen(24, 34, 29), ...coordGen(27, 30, 30)
    ]
};


// Map grid generation
const terrainHexWidth: number = 8;
const terrainHexHeight: number = 8;
const terrainHex: typeof hg.Hex = hg.defineHex({
    dimensions: {width:terrainHexWidth, height:terrainHexHeight},
    orientation: hg.Orientation.POINTY,
    origin: 'topLeft',
    offset: 1
});

const mapWidth: number = 77;
const mapHeight: number = 113;
const mapGrid: hg.Grid<hg.Hex> = new hg.Grid(terrainHex, hg.rectangle({ width: mapWidth, height: mapHeight}));


// Render
function renderSVG(hex, fill, fClass){
    const polygon: Polygon = drawMap
        .polygon(hex.corners.map(({ x, y }) => `${x},${y}`))
        .fill(fill)
        .stroke({width: 0.25, color: "#404040"})
        .addClass(fClass);
    return drawMap.group().add(polygon);
};

const drawMap: Svg = SVG()
    .addTo("#container-map")
    .size(`${terrainHexWidth*mapWidth}px`, `${terrainHexHeight*mapHeight}px`);


mapGrid.forEach(hex=>{
    let hexCoords = [hex.col, hex.row].toString();

    for (let faction in factionCoords){
        let coords: number[][]= factionCoords[faction];

        if (coords.some(coord=>coord.toString() === hexCoords)){
            let fill = factionMaterials[faction].fill
            let fClass = factionMaterials[faction].class
            renderSVG(hex, fill, fClass)
        }
        else{
            let fill = factionMaterials.ocean.fill
            let fClass = factionMaterials.ocean.class
            renderSVG(hex, fill, fClass)
        }
    }
});
