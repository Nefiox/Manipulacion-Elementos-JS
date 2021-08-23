let main = document.querySelector('main');
let h2 = document.querySelector('h2.subtitulo');
let a = document.querySelector('a');
let parrafos = document.querySelectorAll('p');

var enterName = prompt("¿Cuál es tu nombre?");

if (enterName === null || enterName === '') {
    h2.innerText += 'Invitado';
} else {
    h2.innerText += enterName;
}

h2.style.color = 'red';
h2.style.textTransform = 'uppercase';
a.style.color = '#E51B3E';

let bg = confirm('¿Desea colocar un fondo de pantalla?');
if (bg) {
    document.querySelector('body').classList.add('fondo');
}

for(let i = 0; i < parrafos.length; i++) {
        if(i % 2 === 0) {
            parrafos[i].classList.add('destacadoPar');
        } else {
            parrafos[i].classList.add('destacadoImpar');
        }
}

main.style.display ='block';

// console.log(enterName);
// console.log(bg);