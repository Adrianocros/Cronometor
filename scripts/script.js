var display = document.getElementById('display');
var alerta = document.getElementById('alerta');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var iniciar = document.getElementById('iniciar');
var parar = document.getElementById('parar')


var cronometroSeg;
var minutoAtual;
var segundoAtual;

var interval;

for(var i = 0; i<= 60;i++){
    minutos.innerHTML +='<option value"'+i+'">'+i+'</option>';
}

for(var i=0; i<= 60; i++){
    segundos.innerHTML+='<option value"'+i+'">'+i+'</option>';
}

iniciar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;

    display.childNodes[1].innerHTML =  minutoAtual + ":" + segundoAtual;

    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual<=0){
            if(minutoAtual>0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alerta.childNodes[1].innerHTML = '<option>Acabou</option>'
                document.getElementById("sound").play();
                clearInterval(interval)
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":" + segundoAtual;
    },1000);
})

parar.addEventListener('click',function(){
    window.location.reload(true)
})