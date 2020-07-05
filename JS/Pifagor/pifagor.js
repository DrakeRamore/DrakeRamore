var content = document.getElementById("content");

for (var i = 1; i <= 9; i++) {
    var newRow = document.createElement("div");
    newRow.setAttribute("class", "row");
    for (var j = 1; j <= 9; j++) {
        var newCell = document.createElement("div");

        if (i == j) {
            newCell.setAttribute("class", "cell cell-main");
        }
        else if (i < j) {
            newCell.setAttribute("class", "cell cell-main-right");
        }
        else {
            newCell.setAttribute("class", "cell cell-main-left");
        }

        newCell.innerText = i * j;
        newRow.appendChild(newCell);
    }
    content.appendChild(newRow);
}