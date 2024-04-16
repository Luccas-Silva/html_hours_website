const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    hora.textContent = hr;

    if (min < 10) min = '0' + min;
    minuto.textContent = min;

    if (seg < 10) seg = '0' + seg;
    segundo.textContent = seg;
})