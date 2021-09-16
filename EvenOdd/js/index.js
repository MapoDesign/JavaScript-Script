function evenOrOdd(){
    var n = $('#n').val();

    if (isNaN(n)) {
        risultato = " is not a number";
    } else if (n % 2 == 0) {
        risultato = " is even";
    } else {
        risultato = " is odd";
    }

    $('span#risultato').html( n + risultato);
}
