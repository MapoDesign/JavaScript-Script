function converterF() {
    document.getElementById('risultato').innerHTML = document.getElementById('temp').value * 1.8 + 32 + '° Fahrenheit';
}

function converterC() {
    document.getElementById('risultato').innerHTML = (document.getElementById('temp').value - 32) / 1.8 + '° Celsius';
}