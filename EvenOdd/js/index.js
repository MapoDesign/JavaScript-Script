function evenOrOdd(){
    var n = $('#n').val();
if(!isNaN(n)){
 risultato = n % 2 == 0 ? "even" : "odd";
}else{
    risultato = "not a number";
}

    $('span#risultato').html(  `${n} is ${risultato}`);
}
