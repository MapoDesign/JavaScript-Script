function zerPad(number,width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }    
    return string;
}

function printFarmInventory(vacche, polli, maiali) {
    console.log(`${zerPad(vacche, 3)} Vacche`);
    console.log(`${zerPad(polli, 3)} Polli`);
    console.log(`${zerPad(maiali, 3)} Maiali`);
}

printFarmInventory(7,16,3);