// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // checking 1st if there is already existin Table to remove / delete
    var currentTbl = document.getElementById('pixelCanvas');
    if (currentTbl.hasChildNodes()) {
        var childs = document.getElementsByTagName('tr');
        for (let currTblRows = (childs.length) - 1; currTblRows >= 0; currTblRows--) {
            currentTbl.deleteRow(currTblRows);
        }
    }
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWidth").value;
    // checking the value of enterd height & width  to avoid huge loops load on memory
    if (width <= 0 || height <= 0) {
        window.alert("WOW ! You Choosed a ziro  or null wdith/height Values has been set to the defualt celles count 10 * 10");
        width = 10;
        height = 10;
    } else if (width >= 301 && height >= 301) {
        window.alert("WOW ! You Choosed a very big Table Height ! \n Values has been set to the max celles count value 300 * 300");
        document.getElementById("inputWidth").innerHTML = 300;
        document.getElementById("inputHeight").innerHTML = 300;
        width = 300;
        height = 300;
    } else if (height >= 301) {
        window.alert("WOW ! You Choosed a very big Table Height ! \n Values has been set to the max celles count value 300 *" + width);
        document.getElementById("inputHeight").innerText = 300;
        height = 300;
    } else if (width >= 301) {
        window.alert("WOW ! You Choosed a very big Table Height ! \n Values has been set to the max celles count value " + height + "* 300");
        document.getElementById("inputWidth").innerText = 300;
        width = 300;
    }

    //else height & width normal user selected Values values
    // if there is no tables the creation will go on normal
    // getting the tow dimentions of the table from inputs
    var tabel = document.getElementById('pixelCanvas');
    // loop creating rows ' tr ' tags
    for (let rows = 0; rows < height; rows++) {
        var newRow = document.createElement('tr');
        newRow.className = "rows";
        // b=nested loop for Each Row To add the innet ' td ' tags
        for (let columns = 0; columns < width; columns++) {
            var newtd = document.createElement('td');
            // adding each cell Event Listener
            newtd.addEventListener('dragover', colorCell, false);
            newtd.addEventListener('click', colorCell, false);
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