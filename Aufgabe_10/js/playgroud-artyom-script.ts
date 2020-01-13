//Größenelemente sind aus Library online übernommen

declare var Artyom: any;                //verzichten auf Typisierung -> nutzen Library irgendwie

//abwarten bis DOM geladen wurde
window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
  
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
        action: function(i: any, wildcard: string): void {
            alert(wildcard);                      //kleines Fensterchen
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();

        //Startprozess -> einfach nur kopiert, Einstellung der Dokumentation
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});