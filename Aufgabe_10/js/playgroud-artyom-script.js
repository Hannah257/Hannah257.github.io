//Größenelemente sind aus Library online übernommen
//abwarten bis DOM geladen wurde
window.addEventListener("load", function () {
    var artyom = new Artyom();
    /* //Befehlsliste auf Basis der Library; man sagt hallo,hey,hi und in console wird hey there ausgegeben
     //wir brauchen Dynamik -> indexes: ["erstelle Aufgabe..."]
     artyom.addCommands({
         indexes: ["hallo", "hey", "hi"],
         action: function(): void {
             console.log("!!!!!!!!!!!hey there...");
         }
     });*/
    //Dynamisch auf letzten Teil (*) hört, * = wildcard -> wird übergeben
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            alert(wildcard); //kleines Fensterchen
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        //Startprozess -> einfach nur kopiert, Einstellung der Dokumentation
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map