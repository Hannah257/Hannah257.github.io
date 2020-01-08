/*//Globale Variablen
var todoArray: string [] = ["Aufgabe 1", "Aufgabe 2", "Aufgabe 3"];

//For Schleife
for (var index: number = 0; index < todoArray.length; index++) {
    const element = todoArray[index];
    console.log(todoArray [1]);
}*/
//Globale Variablen
var todos = ["kochen", "putzen", "backen"]; //<- mein Array
//Ausgabe in Console
window.addEventListener("load", function () {
    for (var index = 0; index < todos.length; index++) {
        console.log(todos[index]);
    }
});
//Ausgabe im DOM, V1
window.addEventListener("load", function () {
    for (var index = 0; index < todos.length; index++) {
        document.querySelector("#todos").innerHTML = todos[index];
    }
});
//Ausgabe im DOM, V2
window.addEventListener("load", function () {
    for (var index = 0; index < todos.length; index++) {
        document.querySelector("#todos").innerHTML += todos[index];
    }
});
//Ausgabe im DOM, V3
window.addEventListener("load", function () {
    for (var index = 0; index < todos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>ToDo</p>";
    }
});
//Ausgabe im DOM, V4
window.addEventListener("load", function () {
    for (var index = 0; index < todos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + todos[index] + "</p>";
    }
});
//# sourceMappingURL=testAufgabe_9.js.map