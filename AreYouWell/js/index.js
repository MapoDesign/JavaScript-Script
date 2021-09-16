function valuta() {
    var temp = parseInt($('#temp').val(), 10);
    var responso;

    if(isNaN(temp) || temp<35 || temp>45) {
        responso = "You entered a wrong value";
        smile = "sleep";
    } else if (temp>=38) {
        responso = "You are sick, take medicines";
        smile = "vitamin";
    } else if (temp<38 && temp>=37) {
        responso = "You are tired, take vitamin and rest";
        smile = "sad";
    } else {
        responso = "You are fine!";
        smile = "happiness";
    }

    $('#responso').html(responso);
    $('#smile').attr('src', "img/smile-" + smile + ".png");
}