function averageSpeed (){
    min = 1 * document.getElementById('min').value;
    sec = 1 * document.getElementById('sec').value;
    metri = 1 * document.getElementById('metri').value;
    sec += min * 60;

    vms = metri / sec;
    vkmh = vms * 60 * 60 / 1000;
    document.getElementById('vms').innerHTML = vms;
    document.getElementById('vkmh').innerHTML = vkmh;
}