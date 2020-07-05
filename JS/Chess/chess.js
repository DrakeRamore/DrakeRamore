var main = document.getElementById("main");

for (var i = 1; i <= 10; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    for (var j = 1; j <= 10; j++) {
        var cell = document.createElement("div");
        row.appendChild(cell);
        if (i == 1 || i == 10) {
            if (j == 1 || j == 10) {
                cell.setAttribute("class", "cell-letter-space");
            }
            else {
                cell.setAttribute("class", "cell-letter");
                cell.innerText = String.fromCharCode(63 + j);
            }
        }
        else if (i % 2 != 0) {
            if (j == 1 || j == 10) {
                cell.setAttribute("class", "cell-number");
                cell.innerText = 10 - i;
            }
            else if (j % 2 != 0) {
                cell.setAttribute("class", "cell cell-white");
            }
            else {
                cell.setAttribute("class", "cell cell-black");
            }
        }
        else {
            if (j == 1 || j == 10) {
                cell.setAttribute("class", "cell-number");
                cell.innerText = 10 - i;
            }
            else if (j % 2 != 0) {
                cell.setAttribute("class", "cell cell-black");
            }
            else {
                cell.setAttribute("class", "cell cell-white");
            }
        }
    }
    main.appendChild(row);
}