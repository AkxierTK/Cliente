'use strict'
let filas =parseInt(prompt("Tamaño de filas de la matriz: "));
let columnas = parseInt(prompt("Tamaño de columnas de la matriz: "));
let valor= parseInt(prompt("Valor para multiplicar: "));
let matriz=new Array(columnas);
//Preguntar a Jose Juan 
for(let f=0;f<filas;f++){
matriz[f]=new Array(columnas);
}

function rellenarArrayBidimensional(filas, columnas, matriz) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            console.log("Pasada");
            
            let numeroAleatorio=Math.floor(Math.random() * (10 - -10)) + -10;
            console.log(numeroAleatorio);
            matriz[i][j]=numeroAleatorio;
            console.log(matriz[i][j]);
        }
    }
}

function recorrerArrayBidimensional(filas, columnas, matriz) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            document.write(matriz[i][j]+" ");
        }
        document.write("<br>");
    }
}

function multiplicarvaloresArray(filas,columnas,matriz,valor){
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matriz[i][j]*=valor;
        }
        
    }
}

rellenarArrayBidimensional(filas,columnas,matriz);


document.write("Mostramos el array creado:<br>");
recorrerArrayBidimensional(filas,columnas,matriz);

document.write("<br>");

multiplicarvaloresArray(filas,columnas,matriz,valor);
recorrerArrayBidimensional(filas,columnas,matriz);