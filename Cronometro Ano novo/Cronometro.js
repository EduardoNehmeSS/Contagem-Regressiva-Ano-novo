window.addEventListener('load', function() {
    let dia = document.getElementById('dia');
    let hora = document.getElementById('hora');
    let minuto = document.getElementById('minuto');
    let segundo = document.getElementById('segundo');
    dia.innerText = '00';
    hora.innerText = '00';
    minuto.innerText = '00';
    segundo.innerText = '00';


    
    setInterval(function() { 
    let diaAtual = new Date();
    let diaNovoAno = new Date(diaAtual.getFullYear() + 1, 0, 1);
        let diferenca = diaNovoAno-diaAtual;
        let sec = diferenca/1000;
        let day = Math.floor(sec/3600/24);
        let hour = Math.floor((sec/3600)%24);
        let minute = Math.floor((sec/60)%60);
        let second = Math.floor(sec%60);
    if (day == 0 && hour == 0 && minute == 0 && second == 0) { alert ('Feliz Ano Novo!'); }
        dia.innerText = day;
        hora.innerText = hour;
        minuto.innerText = minute;
        segundo.innerText = second;
    }, 1000);
       
});


