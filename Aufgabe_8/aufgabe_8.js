//Globale Variablen
var beat = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/C.mp3", "assets/F.mp3", "assets/C.mp3", "assets/G.mp3", "assets/A.mp3", "assets/A.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/laugh-2.mp3"];
var beatloop;
var record = false;

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
    document.querySelector("#record").addEventListener("click", recordNewBeat);
    document.querySelector("#play").addEventListener("click", playMyBeat);
    document.querySelector("#delete").addEventListener("click", deleteMyBeat);
});

//Sound Function
function playsample(mp3) {
    var sound = new Audio("assets/" + mp3);
    sound.play();
    if (record == true) {
        beat.push(mp3);
    }
}
function playMyBeat() {
    var index = 0;
    var playButton = document.getElementById("playBeat");
    if (playButton.classList.contains("fa-play")) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-stop");
        beatloop = setInterval(beat, 400);
    }
    else {
        playButton.classList.remove("fa-stop");
        playButton.classList.add("fa-play");
        clearInterval(beatloop);
    }
    function playMyBeat() {
        playsample(beat[index]);
        index += 1;
        if (index > beat.length) {
            index = 0;
        }
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
