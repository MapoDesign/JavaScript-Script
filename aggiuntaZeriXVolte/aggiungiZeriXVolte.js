function printFarmInventory(vacche, polli, maiali, width) {
    console.log(`${String(vacche).padStart(width,"0")} Vacche`);
    console.log(`${String(polli).padStart(width,"0")} Polli`);
    console.log(`${String(maiali).padStart(width,"0")} Maiali`);
}

printFarmInventory(57,316,23,6);