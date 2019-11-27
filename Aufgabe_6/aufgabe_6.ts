var emissionEurope2008:number = 4965.7;
var emissionAfrica2008:number = 1028;
var emissionAustralia2008:number = 1993;
var emissionAsia2008:number = 12954.7;
var emissionSouthAmerica2008:number = 1132.6;
var emissionNorthAmerica2008:number = 6600.4;

var emissionEurope2018:number = 4209.3;
var emissionAfrica2018:number = 1235.5;
var emissionAustralia2018:number = 2100.5;
var emissionAsia2018:number = 16274.1;
var emissionSouthAmerica2018:number = 1261.5;
var emissionNorthAmerica2018:number = 6035.6;
var emissionTotal2018:number = emissionEurope2018 + emissionAfrica2018 + emissionAustralia2018 + emissionAsia2018 + emissionSouthAmerica2018 + emissionNorthAmerica2018;

var relativeEurope:number = (emissionEurope2018 / emissionTotal2018)*100;
var relativeAfrica:number = (emissionAfrica2018 / emissionTotal2018)*100;
var relativeAustralia:number = (emissionAustralia2018 / emissionTotal2018)*100;
var relativeAsia:number = (emissionAsia2018 / emissionTotal2018)*100;
var relativeSouthAmerica:number = (emissionSouthAmerica2018 / emissionTotal2018)*100;
var relativeNorthAmerica:number = (emissionNorthAmerica2018 / emissionTotal2018)*100;

var growthrateEurope:number = ((emissionEurope2018 / emissionEurope2008)-1)*100;
var growthrateAfrica:number = ((emissionAfrica2018 / emissionAfrica2008)-1)*100;
var growthrateAustralia:number = ((emissionAustralia2018 / emissionAustralia2008)-1)*100;
var growthrateAsia:number = ((emissionAsia2018 / emissionAsia2008)-1)*100;
var growthrateSouthAmerica:number = ((emissionSouthAmerica2018 / emissionSouthAmerica2008)-1)*100;
var growthrateNorthAmerica:number = ((emissionNorthAmerica2018 / emissionNorthAmerica2008)-1)*100;

var growthdifferenceEurope:number = emissionEurope2018-emissionEurope2008;
var growthdifferenceAfrica:number = emissionAfrica2018-emissionAfrica2008;
var growthdifferenceAustralia:number = emissionAustralia2018-emissionAustralia2008;
var growthdifferenceAsia:number = emissionAsia2018-emissionAsia2008;
var growthdifferenceSouthAmerica:number = emissionSouthAmerica2018-emissionSouthAmerica2008;
var growthdifferenceNorthAmerica:number = emissionNorthAmerica2018-emissionNorthAmerica2008;

function EuropeFunction(){
    document.querySelector(".MainTitle").innerHTML = "Europe";
    document.querySelector(".continent").innerHTML = "Europe";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionEurope2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeEurope.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateEurope.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceEurope.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:13.5%");
}
window.addEventListener('load', function() {
document.querySelector(".Europe").addEventListener("click", EuropeFunction);
});

function AfricaFunction(){
    document.querySelector(".MainTitle").innerHTML = "Africa";
    document.querySelector(".continent").innerHTML = "Africa";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionAfrica2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeAfrica.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateAfrica.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceAfrica.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4%");
}
window.addEventListener('load', function() {
document.querySelector(".Africa").addEventListener("click", AfricaFunction);
});


function AustraliaFunction(){
    document.querySelector(".MainTitle").innerHTML = "Australia";
    document.querySelector(".continent").innerHTML = "Australia";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionAustralia2018;
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionAustralia2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeAustralia.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateAustralia.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceAustralia.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4.1%");
}
window.addEventListener('load', function() {
document.querySelector(".Australia").addEventListener("click", AustraliaFunction);
});

function AsiaFunction(){
    document.querySelector(".MainTitle").innerHTML = "Asia";
    document.querySelector(".continent").innerHTML = "Asia";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionAsia2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeAsia.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateAsia.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceAsia.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:52.3%");
}
window.addEventListener('load', function() {
document.querySelector(".Asia").addEventListener("click", AsiaFunction);
});

function SouthAmericaFunction(){
    document.querySelector(".MainTitle").innerHTML = "South America";
    document.querySelector(".continent").innerHTML = "South America";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionSouthAmerica2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeSouthAmerica.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateSouthAmerica.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceSouthAmerica.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:4.1%");
}
window.addEventListener('load', function() {
document.querySelector(".SouthAmerica").addEventListener("click", SouthAmericaFunction);
});

function NorthAmericaFunction(){
    document.querySelector(".MainTitle").innerHTML = "North America";
    document.querySelector(".continent").innerHTML = "North America";
    document.querySelector(".EmissionAbsolute").innerHTML = "" + emissionNorthAmerica2018;
    document.querySelector(".EmissionRelative").innerHTML = "" + relativeNorthAmerica.toFixed(2) + " %";
    document.querySelector(".EmissionGrowth").innerHTML = "" + growthrateNorthAmerica.toFixed(2) + " %";
    document.querySelector(".EmissionDifference").innerHTML = "" + growthdifferenceNorthAmerica.toFixed(2);
    document.querySelector(".chart").setAttribute("style", "height:19.4%");
}
window.addEventListener('load', function() {
document.querySelector(".NorthAmerica").addEventListener("click", NorthAmericaFunction);
});



var number = 13
console.log(number);



