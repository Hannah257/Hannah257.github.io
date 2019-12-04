function soundkick () {
    var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("mousedown", soundkick)
})

function soundsnare () {
    var sound:HTMLAudioElement = new Audio("assets/snare.mp3");
sound.play();
}
window.addEventListener("load", function () {
    document.querySelector("#button2").addEventListener("mousedown", soundsnare)
})



//Array
var list:string[] = ['peter', 'paul', 'joe']

var index:number = 0;

setInterval(function(){
    console.log( list[index] );
    index = index + 1;
    index++
}, 1000)

//Read Me Datei!-> jede Sekunde Sound!
setInterval(function(){
    var sound:HTMLAudioElement = new Audio("assets/kick.mp3");
sound.play();
}, 1000)

