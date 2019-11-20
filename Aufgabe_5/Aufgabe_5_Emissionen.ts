// Emissionen 2008
var emissionEurope2008:number = 4965.7;
var emissionAfrica2008:number = 1028;
var emissionAustralia2008:number = 1993;
var emissionAsia2008:number = 12954.7;
var emissionSouthAmerica2008:number = 1132.6;
var emissionNorthAmerica2008:number = 6600.4;
var emissionTotal2008:number = emissionEurope2008 + emissionAfrica2008 + emissionAustralia2008 + emissionAsia2008 + emissionSouthAmerica2008 + emissionNorthAmerica2008;

// Emissionen 2018
var emissionEurope2018:number = 4209.3;
var emissionAfrica2018:number = 1235.5;
var emissionAustralia2018:number = 2100.5;
var emissionAsia2018:number = 16274.1;
var emissionSouthAmerica2018:number = 1261.5;
var emissionNorthAmerica2018:number = 6035.6;
var emissionTotal2018:number = emissionEurope2018 + emissionAfrica2018 + emissionAustralia2018 + emissionAsia2018 + emissionSouthAmerica2018 + emissionNorthAmerica2018;

//Prozente Europe
var percentEurope1:number = emissionEurope2018 * 100 / emissionTotal2018;
//var percentEurope2:number = ((emissionEurope2008/emissionEurope2018)^(1/10))*100;
var percentEurope2:number = emissionEurope2018 - emissionEurope2008;
var percentEurope3:number = percentEurope2 / emissionEurope2008 * 100;

//Prozente Africa
var percentAfrica1:number = emissionAfrica2018 * 100 / emissionTotal2018;
var percentAfrica2:number = emissionAfrica2018 - emissionAfrica2008;
var percentAfrica3:number = percentAfrica2 / emissionAfrica2008 * 100;

//Prozente Australia
var percentAustralia1:number = emissionAustralia2018 * 100 / emissionTotal2018;
var percentAustralia2:number = emissionAustralia2018 - emissionAustralia2008;
var percentAustralia3:number = percentAustralia2 / emissionAustralia2008 * 100;

//Prozente Asia
var percentAsia1:number = emissionAsia2018 * 100 / emissionTotal2018;
var percentAsia2:number = emissionAsia2018 - emissionAsia2008;
var percentAsia3:number = percentAsia2 / emissionAsia2008 * 100;

//Prozente South America
var percentSouthAmerica1:number = emissionSouthAmerica2018 * 100 / emissionTotal2018;
var percentSouthAmerica2:number = emissionSouthAmerica2018 - emissionSouthAmerica2008;
var percentSouthAmerica3:number = percentSouthAmerica2 / emissionSouthAmerica2008 * 100;

//Prozente North America
var percentNorthAmerica1:number = emissionNorthAmerica2018 * 100 / emissionTotal2018;
var percentNorthAmerica2:number = emissionNorthAmerica2018 - emissionNorthAmerica2008;
var percentNorthAmerica3:number = percentNorthAmerica2 / emissionNorthAmerica2008 * 100;

// End Emissionen
var endEurope:number = emissionEurope2018 - emissionEurope2008;
var endAfrica:number = emissionAfrica2018 - emissionAfrica2008;
var endAustralia:number = emissionAustralia2018 - emissionAustralia2008;
var endAsia:number = emissionAsia2018 - emissionAsia2008;
var endSouthAmerica:number = emissionSouthAmerica2018 - emissionSouthAmerica2008;
var endNorthAmerica:number = emissionNorthAmerica2018 - emissionNorthAmerica2008;

// Text Console
var DieEmissionvon:string = "Die Emmission von ";
var beträgt:string = "beträgt: ";
var kgCO2:string = " kg CO2. ";
var RelativzurGesamtemission:string = "Relativ zur Gesamtemission der Welt verursacht ";
var damit:string = "damit ";
var Prozentzeichen1:string = "%. ";
var Prozentzeichen2:string = "%";
var Für:string = "Für ";
var Vergleichzu2008:string = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var verändert:string = " verändert. ";
var Vergleich2008:string = "2018 im Vergleich zu 2008 sind das dann ";
var Europe:string = "Europa ";
var Africa:string = "Afrika ";
var Australia:string = "Australien ";
var Asia:string = "Asien ";
var SouthAmerica:string = "Südamerika ";
var NorthAmerica:string = "Nordamerika ";

// Console
console.log(DieEmissionvon + Europe + beträgt + emissionEurope2018 + kgCO2 + RelativzurGesamtemission + Europe + damit + percentEurope1 + Prozentzeichen1 + Für + Europe + Vergleichzu2008 + percentEurope3 + Prozentzeichen2 + verändert + Vergleich2008 + endEurope + kgCO2);
console.log(DieEmissionvon + Africa + beträgt + emissionAfrica2018 + kgCO2 + RelativzurGesamtemission + Africa + damit + percentAfrica1 + Prozentzeichen1 + Für + Africa + Vergleichzu2008 + percentAfrica3 + Prozentzeichen2 + verändert + Vergleich2008 + endAfrica + kgCO2);
console.log(DieEmissionvon + Australia + beträgt + emissionAustralia2018 + kgCO2 + RelativzurGesamtemission + Australia + damit + percentAustralia1 + Prozentzeichen1 + Für + Australia + Vergleichzu2008 + percentAustralia3 + Prozentzeichen2 + verändert + Vergleich2008 + endAustralia + kgCO2);
console.log(DieEmissionvon + Asia + beträgt + emissionAsia2018 + kgCO2 + RelativzurGesamtemission + Asia + damit + percentAsia1 + Prozentzeichen1 + Für + Asia + Vergleichzu2008 + percentAsia3 +Prozentzeichen2 + verändert + Vergleich2008 + endAsia + kgCO2);
console.log(DieEmissionvon + SouthAmerica + beträgt + emissionSouthAmerica2018 + kgCO2 + RelativzurGesamtemission + SouthAmerica + damit + percentSouthAmerica1 + Prozentzeichen1 + Für + SouthAmerica + Vergleichzu2008 + percentSouthAmerica3 + Prozentzeichen2 + verändert + Vergleich2008 + endSouthAmerica + kgCO2);
console.log(DieEmissionvon + NorthAmerica + beträgt + emissionNorthAmerica2018 + kgCO2 + RelativzurGesamtemission + NorthAmerica + damit + percentNorthAmerica1 + Prozentzeichen1 + Für + NorthAmerica + Vergleichzu2008 + percentNorthAmerica3 + Prozentzeichen2 + verändert + Vergleich2008 + endNorthAmerica + kgCO2);

//# sourceMappingURL=Aufgabe_5_Emissionen.js.map