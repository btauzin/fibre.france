function lineStyle(feature) {
    return {
        color: "red",  // Change the color to your desired color
        weight: 4,       // Change the line width (weight) to your desired value
    };
    }

// Overlay the fiber routes
var STRASBOURG = L.geoJSON(STRASBOURG, { style: lineStyle, }).addTo(map);

var DASARA_12 = L.geoJSON(DASARA_12, { style: lineStyle, }).addTo(map)
var APRR = L.geoJSON(APRR, { style: lineStyle, }).addTo(map)

var BRGM = L.geoJSON(BRGM, { style: lineStyle, }).addTo(map)

var FOCUS = L.geoJSON(FOCUS, { style: lineStyle, }).addTo(map)
var BREST1 = L.geoJSON(BREST1, { style: lineStyle, }).addTo(map)   

var LETEIL = L.geoJSON(LETEIL, { style: lineStyle, }).addTo(map)   
var MEUST = L.geoJSON(MEUST, { style: lineStyle, }).addTo(map)   
var MNCA = L.geoJSON(MNCA, { style: lineStyle, }).addTo(map)
var HCMR = L.geoJSON(HCMR, { style: lineStyle, }).addTo(map)   
var NESTOR = L.geoJSON(NESTOR, { style: lineStyle, }).addTo(map)
var MONACO = L.geoJSON(MONACO, { style: lineStyle, }).addTo(map)   
var ABYSS = L.geoJSON(ABYSS, { style: lineStyle, }).addTo(map)   

var GrenobleMetropole = L.geoJSON(GrenobleMetropole, { style: lineStyle, }).addTo(map)
var GREFIB = L.geoJSON(GREFIB, { style: lineStyle, }).addTo(map)   
var GRECHA = L.geoJSON(GRECHA, { style: lineStyle, }).addTo(map)   
var ARGODAS = L.geoJSON(ARGODAS, { style: lineStyle, }).addTo(map)

var IPGP = L.geoJSON(IPGP, { style: lineStyle, }).addTo(map)