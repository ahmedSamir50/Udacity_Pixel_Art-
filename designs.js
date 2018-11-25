// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // checking 1st if there is already existin Table to remove / delete
    var currentTbl = document.getElementById('pixelCanvas');
    if (currentTbl.hasChildNodes()) {
        var childs = document.getElementsByTagName('tr');
        for (let i = (childs.length) - 1; i >= 0; i--) {
            currentTbl.deleteRow(i);
        }
    }
    // if there is no tables the creation will go on normal
    // getting the tow dimentions of the table from inputs
    var h = document.getElementById("inputHeight").value;
    var W = document.getElementById("inputWidth").value;
    var tabel = document.getElementById('pixelCanvas');
    // loop creating rows ' tr ' tags
    for (let rows = 0; rows < h; rows++) {
        var newRow = document.createElement('tr');
        newRow.className = "rows";
        // b=nested loop for Each Row To add the innet ' td ' tags
        for (let columns = 0; columns < W; columns++) {
            var newtd = document.createElement('td');
            // adding each cell Event Listener
            newtd.addEventListener('dragover', colorCell, true)
            // add cells into rows
            newRow.appendChild(newtd);
        }
        // adding rows into table and finalize
        tabel.appendChild(newRow);
    }
}

function colorCell() {
    // pick the selected color & recolor the draged over cell
    var pickedColor = document.getElementById("colorPicker").value;
    var selected = this;
    selected.bgColor = pickedColor;
}