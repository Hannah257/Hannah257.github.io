function soundkick() {
    var sound = new Audio("assets/kick.mp3");
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", soundkick);
});
function soundsnare() {
    var sound = new Audio("assets/snare.mp3");
    sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button2").addEventListener("mousedown", soundsnare);
});
//Array
var list = ['peter', 'paul', 'joe'];
var index = 0;
setInterval(function () {
    console.log(list[index]);
    index = index + 1;
    index++;
}, 1000);
//Read Me Datei!-> jede Sekunde Sound!
setInterval(function () {
    var sound = new Audio("assets/kick.mp3");
    sound.play();
}, 1000);
//# sourceMappingURL=VorlageAufgabe_7.js.map