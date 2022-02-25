'use strict'

//Javascript para manejo de gráficos

//Primero selecciono el canvas
let canvas = document.getElementById("lienzo");

//Y una vez que lo tengo, recupero su contexto gráfico
let lienzo = canvas.getContext("2d");
/*
lienzo.fillStyle="red";
lienzo.fillRect(20,20,100,100);

lienzo.fillStyle="yellow";
lienzo.fillRect(200,200,100,100);
lienzo.strokeStyle="blue";
lienzo.strokeRect(120,120,100,100);
lienzo.clearRect(70,70,100,100);
lienzo.fillStyle="green";

*/

//Variable para contener el deshacer
let anterior=null;

lienzo.lineWidth=1;
lienzo.lineCap="round";
let [antX, antY] = [-1, -1];
let pintar = false;
canvas.addEventListener("mousedown",function(e){ 
    //Antes de empezar a pintar, salvo el estado de la imagen
    anterior=lienzo.getImageData(0,0,canvas.width,canvas.height);
    //Ahora ya empiezo a pintar
    pintar=true;
    let x=e.clientX-this.offsetLeft;
    let y=e.clientY-this.offsetTop;
    let ancho=document.getElementById("ancho").value;
    lienzo.beginPath()
    lienzo.arc(x,y,ancho/2,0,Math.PI*2);
    lienzo.fill();

})
canvas.addEventListener("mouseup",function(e){ 
    pintar=false;
    [antX, antY] = [-1, -1];
})
canvas.addEventListener("mousemove", function (evento) {
    if (pintar) {
        console.log("x:"+evento.clientX+",y:"+evento.clientY);
        let ancho=document.getElementById("ancho").value;
        lienzo.lineWidth=ancho;
        if (antX == -1) {
            antX = evento.clientX - this.offsetLeft;
            antY = evento.clientY - this.offsetTop;
        }
        else {
            lienzo.beginPath();
            lienzo.moveTo(antX, antY);
            let x = evento.clientX - this.offsetLeft;
            let y = evento.clientY - this.offsetTop;
            lienzo.lineTo(x, y);
            antX = x;
            antY = y;
            lienzo.stroke();
        }
    }
})

let color=["blue","red","green","pink","yellow","black","white","coral","cyan","olive"];

//Vamos a crear los DIV's para seleccionar colores
for (let i=0;i<10;i++){
    let nuevoDiv=document.createElement("div");
    nuevoDiv.style.height="30px";
    nuevoDiv.style.width="30px";
    nuevoDiv.style.float="left";
    nuevoDiv.style.backgroundColor=color[i];
    document.body.appendChild(nuevoDiv);
    nuevoDiv.addEventListener("click",function(e){
        lienzo.strokeStyle=this.style.backgroundColor;
        lienzo.fillStyle=this.style.backgroundColor;
    });
}

document.getElementById("deshacer").addEventListener("click", function (evento) {
    //Primero miro si tengo algo en la variable anterior
    if(anterior != null){
        lienzo.putImageData(anterior,0,0);
    }
});
/*
//Inicio un nuevo trazo
lienzo.beginPath();
lienzo.moveTo(0,0);
lienzo.lineTo(100,100);
lienzo.lineTo(200,100);
//Cierro el trazo
//lienzo.closePath();

//lienzo.stroke();
lienzo.fill();

lienzo.beginPath();
lienzo.arc(100,100,50,Math.PI*3/2,0,true);
lienzo.fill();

*/