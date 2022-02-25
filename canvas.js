let canvas = document.getElementById("canvas");

let linia = document.createElement("input");
// let colores = document.createElement("select");

// let borrar = document.createElement("button");

// let deshacer = document.createElement("button");
// deshacer.innerText = "deshacer";

// borrar.value = "borrar";

// borrar.innerText = "borrar";




// let colors = [
//     "blue",
//     "red",
//     "green"
// ]
// colors.forEach(color => {
//     console.log(color)
//     col = document.createElement("option");
//     col.innerText = color;
//     col.value = color;
//     colores.appendChild(col);
// });

// linia.type = "range";

// linia.min = "20";

// linia.max = "50";

// document.body.appendChild(linia);
// document.body.appendChild(colores);
lienzo = canvas.getContext("2d");

// //pintar de base esta apagado
// let pintar = false;
// //la linea del lienzo
// //para que sea circular
// lienzo.lineCap = "round";
// //la posición anterior de el ratón
// let antX = -1;
// let antY = -1;
// //coge la el lienzo desde 0 0 al máximo
// let anterior=lienzo.getImageData(0,0,canvas.width,canvas.height);

// canvas.addEventListener("mousedown", function (e) {
//     anterior=lienzo.getImageData(0,0,canvas.width,canvas.height);
//     pintar = true;
//     //ajusta el click a donde se hace
//     let x=e.clientX-this.offsetLeft;
//     let y=e.clientY-this.offsetTop;
//     //empieza
//     lienzo.beginPath()
//     //empieza con circulo para hacerlo bien con la posicion x y 2.pi
//     lienzo.arc(x,y,linia.value/2,0,Math.PI*2);
//     //pinta
//     lienzo.fill();
// })

// canvas.addEventListener("mouseup", function (e) {
//     pintar = false;
//     [antX, antY] = [-1, -1];
// })
// canvas.addEventListener("mousemove", function (event) {
//     if (pintar) {
//         lienzo.strokeStyle=colores.value;
//         lienzo.fillStyle=colores.value;
//         lienzo.lineWidth = linia.value;
//         if (antX == -1) {
//             antX = event.clientX - this.offsetLeft;
//             antY = event.clientY - this.offsetTop;
//         }
//         else {
//             //empieza
//             lienzo.beginPath();
//             //se mueve
//             lienzo.moveTo(antX, antY);
//             let x = event.clientX - this.offsetLeft;
//             let y = event.clientY - this.offsetTop;
//             //pinta
//             lienzo.lineTo(x, y);
//             antX = x;
//             antY = y;
//             //rellena
//             lienzo.stroke();
//         }
//     }
// });

// deshacer.addEventListener( "click",function(event){
//     if(anterior != null){
//         lienzo.putImageData(anterior,0,0);
//     }
// });

// borrar.addEventListener("click", function (event) {
//     //limpia todo el canvas
//     lienzo.clearRect(0, 0, canvas.width, canvas.height);
// });
// document.body.append(deshacer);
// document.body.append(borrar);

canvas.addEventListener("click",function(e){
    let x=e.clientX-this.offsetLeft;
    let y=e.clientY-this.offsetTop;
    lienzo.beginPath();
    lienzo.arc(x,y,30,0,Math.PI*2);
    lienzo.fill();

    lienzo.fillRect(30,30,30,30);
    lienzo.strokeRect(60,60,30,30);
});