let p = document.createElement("p");
let segundos = 0
let minutos = 0
let horas = 0;
let tiempo;

let boton = document.createElement("button");
boton.innerText = "Iniciar";

boton.addEventListener("click", function(e) {
    if (boton.innerText == 'Iniciar') {
        boton.innerText = "Pausar";
    } else {
        boton.innerText = "Iniciar";
    }
    tiempo = setInterval(() => {
            if (boton.innerText == "Iniciar") {
                console.log(tiempo);
                clearInterval(tiempo);
            } else {
                segundos++;
                if (segundos > 59) {
                    segundos = 0;
                    minutos++;
                }
                if (minutos > 59) {
                    minutos = 0;
                    horas++;
                }
                p.innerText = horas + ":" + minutos + ":" + segundos;
            }
        },
        1000);
});

let reiniciar = document.createElement("button");
reiniciar.innerText = "Reiniciar";
reiniciar.addEventListener("click", function(e) {
    console.log(tiempo);
    clearInterval(tiempo);
    tiempo = null;
    minutos = 0;
    segundos = 0;
    horas = 0;
    p.innerText = horas + ":" + minutos + ":" + segundos;
});

document.body.appendChild(boton);
document.body.appendChild(reiniciar);
document.body.appendChild(p);

// myInterval = setInterval(setColor, 500);

// function setColor() {
//     let x = document.body;
//     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }

// function stopColor() {
//     clearInterval(myInterval);
// }