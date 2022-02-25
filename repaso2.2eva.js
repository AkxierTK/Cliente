//recupero el CANVAS para pintar
let canvas = document.getElementById("b");
//recupero el lienzo del canvas, esto es, el objeto gráfico sobre el que pintar
let lienzo = canvas.getContext("2d");
lienzo.lineCap = "round";

// //fillRect(150, 150, 225, 225); //Dibuja un rectángulo relleno.
// //strokeRect(x, y, width, height) //Dibuja el contorno de un rectángulo.
// //clearRect(x, y, width, height) //Borra un área rectangular especificada, dejándola totalmente transparente.

// //Nota: Los ángulos en la función del arco (arc) son medidos en radianes, no en grados. Para convertir grados a radianes puedes usar la siguiente expresión en Javascript:
// //radians = (Math.PI/180)*degrees

// canvas.addEventListener("click", function(e) {
//     console.log("esto va");
//     let x = e.clientX - this.offsetLeft;
//     let y = e.clientY - this.offsetTop;
//     //empieza
//     lienzo.beginPath()
//         //empieza con circulo para hacerlo bien con la posicion x y 2.pi
//     lienzo.strokeRect(x, y, 30, 50);
//     //pinta
//     lienzo.fill();
// });

let borrar = document.createElement("button");
borrar.innerText = "borrar";
let deshacer = document.createElement("button");
deshacer.innerText = "deshacer";

let input = document.createElement("input");
input.type = "range";
input.min = "1";
input.max = "500";
let select = document.createElement("select");
let colores = [
    'black',
    'blue',
    'red',
    'orange',
    'green'
];
colores.forEach(e => {
    let option = document.createElement("option");
    option.innerText = e;
    option.value = e;
    select.appendChild(option);
});

let forma = document.createElement("select");
let formas = [
    'circle',
    'line',
    'square',
    'rectangle'
];
formas.forEach(i => {
    let option = document.createElement("option");
    option.innerText = i;
    option.value = i;
    forma.appendChild(option);
});

document.body.appendChild(forma);
document.body.append(input);
document.body.append(select);
document.body.append(borrar);
document.body.append(deshacer);

let pintar = false;
let antX = -1
let antY = -1;

let anterior = new Array();


canvas.addEventListener('mousedown', function(e) {
    //esto es justo la foto en ese momento
    let captura = lienzo.getImageData(0, 0, canvas.width, canvas.height);
    pintar = true;
    anterior.push(captura);
    lienzo.strokeStyle = select.value;
    lienzo.fillStyle = select.value;
    let x = e.clientX - this.offsetLeft;
    let y = e.clientY - this.offsetTop;
    lienzo.beginPath();
    if (forma.value == 'line' || forma.value == 'circle') {
        lienzo.arc(x, y, input.value / 2, 0, Math.PI * 2);
        lienzo.fill();
    } else if (forma.value == 'square') {
        lienzo.fillRect(x, y, input.value, input.value);
    } else {
        lienzo.fillRect(x, y, input.value * 2, input.value);
    }
})

canvas.addEventListener('mousemove', function(e) {
    if (pintar && forma.value == 'line') {
        lienzo.lineWidth = input.value;
        if (antX == -1) {
            antX = e.clientX - this.offsetLeft;
            antY = e.clientY - this.offsetTop;
        } else {
            lienzo.beginPath();
            lienzo.moveTo(antX, antY);
            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;
            lienzo.lineTo(x, y);
            antX = x;
            antY = y;
            lienzo.stroke();
        }
    }
});

canvas.addEventListener('mouseup', function(e) {
    pintar = false;
    antX = -1;
    antY = -1;
});

borrar.addEventListener('click', function(e) {
    lienzo.clearRect(0, 0, canvas.width, canvas.height);
    anterior = [];
});

deshacer.addEventListener('click', function(e) {
    if (anterior !== null) {
        captura = anterior[anterior.length - 1];
        lienzo.putImageData(captura, 0, 0);
        anterior.pop();
    }
});