//Mein Array + Aufgabenzähler
var array = ["Glücklich sein:)"];
var countTasks = "" + array.length + " insgesamt";
document.querySelector("#countTasks").innerHTML = "" + countTasks;
window.addEventListener("load", function () {
    document.querySelector(".fa-trash").addEventListener("click", deleteTasks);
    function addTask(text) {
        var list = document.getElementById("list");
        //Neue Aufgabe hinzufügen
        var item = document.createElement("li");
        item.innerText = text;
        //Neue Div-Box
        var buttons = document.createElement("div");
        buttons.classList.add("buttons");
        //"Neues" Array
        var value = document.getElementById("inputfeld").value;
        array.push(value);
        //Aufgabenzähler
        var countTasks = "" + array.length + " insgesamt";
        document.querySelector("#countTasks").innerHTML = "" + countTasks;
        //Löschen Funktion hinzufügen
        var remove = document.createElement("button");
        remove.classList.add("fa", "fa-trash");
        //Erledigt Funktion hinzufügen
        var label = document.createElement("label");
        label.classList.add("container");
        var check = document.createElement("input");
        check.classList.add("done");
        check.setAttribute("type", "checkbox");
        //Neue Aufgabe über Vorherige 
        list.insertBefore(item, list.childNodes[0]);
        remove.addEventListener("click", deleteTasks);
        buttons.appendChild(remove);
        buttons.appendChild(label);
        label.appendChild(check);
        item.appendChild(buttons);
    }
    document.getElementById("addTask").addEventListener("click", function () {
        var value = document.getElementById("inputfeld").value;
        if (value)
            addTask(value);
        document.getElementById("inputfeld").value = "";
    });
});
//Löschen Funktion
function deleteTasks() {
    var parent = this.parentNode;
    parent.parentNode.remove();
    //Aufgabenzähler
    array.pop();
    var countTasks = "" + array.length + " insgesamt";
    document.querySelector("#countTasks").innerHTML = "" + countTasks;
}
//# sourceMappingURL=aufgabe_9.js.map