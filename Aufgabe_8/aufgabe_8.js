//Globale Variablen
var beat = ["kick.mp3", "snare.mp3", "hihat.mp3", "F.mp3", "C.mp3", "F.mp3", "C.mp3", "G.mp3", "A.mp3", "A.mp3", "G.mp3", "A.mp3", "C.mp3", "F.mp3", "laugh-2.mp3"];
var beatloop;
var record = false;
var index = 0;
//Sounds Drumpad
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () {
        playsample("kick.mp3");
    });
    document.querySelector("#button2").addEventListener("mousedown", function () {
        playsample("snare.mp3");
    });
    document.querySelector("#button3").addEventListener("mousedown", function () {
        playsample("hihat.mp3");
    });
    document.querySelector("#button4").addEventListener("mousedown", function () {
        playsample("F.mp3");
    });
    document.querySelector("#button5").addEventListener("mousedown", function () {
        playsample("G.mp3");
    });
    document.querySelector("#button6").addEventListener("mousedown", function () {
        playsample("A.mp3");
    });
    document.querySelector("#button7").addEventListener("mousedown", function () {
        playsample("C.mp3");
    });
    document.querySelector("#button8").addEventListener("mousedown", function () {
        playsample("laugh-1.mp3");
    });
    document.querySelector("#button9").addEventListener("mousedown", function () {
        playsample("laugh-2.mp3");
    });
    document.querySelector("#RecordBeat").addEventListener("click", recordNewBeat);
    document.querySelector("#PlayBeat").addEventListener("click", playMyBeat);
    document.querySelector("#DeleteBeat").addEventListener("click", deleteMyBeat);
});
//Sound Function
function playsample(mp3) {
    var sound = new Audio("assets/" + mp3);
    sound.play();
    if (record == true) {
        beat.push(mp3);
    }
}
function myBeat() {
    playsample(beat[index]);
    index += 1;
    if (index > (beat.length - 1))
        index = 0;
}
//Play and Stop My Beat
function playMyBeat() {
    if (document.getElementById("PlayBeat").classList.contains("fa-play")) {
        document.getElementById("PlayBeat").classList.remove("fa-play");
        document.getElementById("PlayBeat").classList.add("fa-stop");
        beatloop = setInterval(myBeat, 500);
        record = false;
        console.log("Klappt?");
    }
    else {
        document.getElementById("PlayBeat").classList.remove("fa-stop");
        document.getElementById("PlayBeat").classList.add("fa-play");
        clearInterval(beatloop);
        console.log("Jap klappt!");
    }
}
//Delete My Beat
function deleteMyBeat() {
    beat = [];
}
//Record New Beat
function recordNewBeat() {
    record = true;
}
//# sourceMappingURL=aufgabe_8.js.map