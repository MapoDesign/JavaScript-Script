let cell = true;
let row = "";
let rowNumber = 0;
do {
    for (let count = 0; count < 8; count++) {
        if (cell==true) {
            row += "X";
            cell = false;
        } else {
            row += " ";
            cell = true;
        }
        
    }
    rowNumber += 1;
    
    console.log(row);
    row = "";
    cell = !cell;
} while (rowNumber < 8);



