
function countChart(string, chart) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == chart) {
            counter++;
            i++
        }
        
    }

    console.log(`Hai scelto ${chart} che è inserita in ${string} ` + counter + " volte");
}

countChart("Astrubale Aglegle" , "e");