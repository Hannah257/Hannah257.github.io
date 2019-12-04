//Sounds Drumpad
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", function () {
        playSample("kick.mp3");
    });
    document.querySelector("#button2").addEventListener("mousedown", function () {
        playSample("snare.mp3");
    });
    document.querySelector("#button3").addEventListener("mousedown", function () {
        playSample("hihat.mp3");
    });
    document.querySelector("#button4").addEventListener("mousedown", function () {
        playSample("F.mp3");
    });
    document.querySelector("#button5").addEventListener("mousedown", function () {
        playSample("G.mp3");
    });
    document.querySelector("#button6").addEventListener("mousedown", function () {
        playSample("A.mp3");
    });
    document.querySelector("#button7").addEventListener("mousedown", function () {
        playSample("C.mp3");
    });
    document.querySelector("#button8").addEventListener("mousedown", function () {
        playSample("laugh-1.mp3");
    });
    document.querySelector("#button9").addEventListener("mousedown", function () {
        playSample("laugh-2.mp3");
    });
    document.querySelector("#PlayButton").addEventListener("click", Play);
});
//Sound Function
function playSample(PlayBeat) {
    var sound = new Audio("assets/" + PlayBeat);
    sound.play();
}
;
//Function Play My Beat
function Play() {
    var Kick = setInterval(MyBeat, 500);
    var index = 0;
    var Beat = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/C.mp3", "assets/F.mp3", "assets/C.mp3", "assets/G.mp3", "assets/A.mp3", "assets/A.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/laugh-2.mp3"];
    function MyBeat() {
        var sequence = new Audio(Beat[index]);
        sequence.play();
        index += 1;
        if (index >= 15)
            index = 0;
        console.log(Beat[index]);
        document.querySelector("#StoppButton").addEventListener("mousedown", stopBeat);
        function stopBeat() {
            clearInterval(Kick);
        }
    }
    ;
}
;
//# sourceMappingURL=aufgabe_7.js.map