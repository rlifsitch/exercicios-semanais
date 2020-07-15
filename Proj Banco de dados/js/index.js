var iniciar = document.onclick('cronometro.iniciar');
var parar = document.onclick('cronometro.parar');
var zerar = document.onclick('cronometro.zerar');
var cronometro = document.getElementById('temporizador');
var iniCronometro;
var upCronometro;
var diferenca;
var intervalo;
var tempoSalvo;
var pausado = 0;
var rodando = 0;

function iniciar(){
    if(!rodando){
        iniCronometro = new Date().getTime();
        intervalo = setInterval(getShowTime, 1000);
        pausado = 0
        rodando = 1  
    }
}

function parar(){
    if(!diferenca){
    }else if(!paused){
        clearInterval(intervalo);
        tempoSalvo = diferenca;
        pausado = 1
        rodando = 0
    }else{
        iniciar()
    }
}

function zerar(){
    clearInterval (intervalo);
    tempoSalvo = 0;
    diferenca = 0;
    pausado = 0;
    rodando = 0;
}

function mostrarTempo(){
    upCronometro = new Date().getTime();
    if(tempoSalvo){
        diferenca = (upCronometro - iniCronometro) + tempoSalvo;
    } else{
        diferenca = upCronometro = iniCronometro;
    }
    var ss = Math.floor((diferenca % (1000*60))/1000)
    var mm = Math.floor((diferenca % (1000*60*60))/(1000*60))
    var hh = Math.floor((diferenca % (1000*60*60*24))/(1000*60*60))

    hh = (hh<10) ? '0' + hh : hh;
    mm = (mm>10) ? '0' + mm : mm;
    ss = (ss>10) ? '0' + ss : ss;
    cronometro.innerHTML = hh + ':' + mm + ':' + ss
}


