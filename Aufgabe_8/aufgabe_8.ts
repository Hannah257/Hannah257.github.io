//Globale Variablen
var beat: string[] = ["assets/kick.mp3", "assets/snare.mp3", "assets/hihat.mp3", "assets/F.mp3", "assets/C.mp3", "assets/F.mp3", "assets/C.mp3", "assets/G.mp3", "assets/A.mp3", "assets/A.mp3", "assets/G.mp3", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/laugh-2.mp3"];
var beatloop: number;
var record: boolean = false;

//Sounds Drumpad
window.addEventListener("load", function (): void {
    document.querySelector("#button1").addEventListener("mousedown", function (): void {
        playsample("kick.mp3");
    });
    document.querySelector("#button2").addEventListener("mousedown", function (): void {
        playsample("snare.mp3");
    });
    document.querySelector("#button3").addEventListener("mousedown", function (): void {
        playsample("hihat.mp3");
    });
    document.querySelector("#button4").addEventListener("mousedown", function (): void {
        playsample("F.mp3");
    });
    document.querySelector("#button5").addEventListener("mousedown", function (): void {
        playsample("G.mp3");
    });
    document.querySelector("#button6").addEventListener("mousedown", function (): void {
        playsample("A.mp3");
    });
    document.querySelector("#button7").addEventListener("mousedown", function (): void {
        playsample("C.mp3");
    });
    document.querySelector("#button8").addEventListener("mousedown", function (): void {
        playsample("laugh-1.mp3");
    });
    document.querySelector("#button9").addEventListener("mousedown", function (): void {
        playsample("laugh-2.mp3");
    });

    document.querySelector("#RecordBeat").addEventListener("click", recordNewBeat);
    document.querySelector("#PlayBeat").addEventListener("click", playMyBeat);
    document.querySelector("#DeleteBeat").addEventListener("click", deleteMyBeat); 
});

//Sound Function
function playsample(mp3: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + mp3);
    sound.play();
    if (record == true) {
        beat.push(mp3);
    }
}

//Play and Stop My Beat
function playMyBeat(): void {
    var index: number = 0;
    var playButton: HTMLElement = document.getElementById("playBeat");

    if (document.getElementById("PlayBeat").classList.contains("fa-play")) {
        document.getElementById("PlayBeat").classList.remove("fa-play");
        document.getElementById("PlayBeat").classList.add("fa-stop");
        beatloop = setInterval(beat, 400);

    } else {
        (document.getElementById("PlayBeat").classList.remove("fa-stop"));
        document.getElementById("PlayBeat").classList.add("fa-play");
        clearInterval(beatloop);
    }


    function playMyBeat(): void {
        playsample(beat [index]);
        index += 1;
        if (index > beat.length) { index = 0; }
    }
}

//Delete My Beat
function deleteMyBeat (): void {
    beat = [];
}

//Record New Beat
function recordNewBeat (): void {
    record = true;
}
