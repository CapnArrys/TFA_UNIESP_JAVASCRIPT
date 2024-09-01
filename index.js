const clock = () => {
    const relogio = new Date();

    const horas = String(relogio.getHours()).padStart(2, '0');

    const minutos = String(relogio.getMinutes()).padStart(2, '0');
    
    const segundos = String(relogio.getSeconds()).padStart(2, '0');


    document.getElementById('hora').textContent = horas;

    document.getElementById('minuto').textContent = minutos;

    document.getElementById('segundo').textContent = segundos;

}


setInterval(clock, 0);

clock();



