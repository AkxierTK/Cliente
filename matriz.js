'use strict'

function rellenarArrayBidimensional(filas, columnas, matriz) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            console.log("Pasada");

            let numeroAleatorio = Math.floor(Math.random() * (10 - -10)) + -10;
            console.log(numeroAleatorio);
            matriz[i][j] = numeroAleatorio;
            console.log(matriz[i][j]);
        }
    }
}

function recorrerArrayBidimensional(filas, columnas, matriz) {

    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            document.write(matriz[i][j] + "  ");
        }
        document.write("<br>");
    }
}

function multiplicarvaloresArray(filas, columnas, matriz, valor) {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            matriz[i][j] *= valor;
        }

    }
}
function productoMatricial(filas1, columnas1, filas2, columnas2, matriz1, matriz2) {
   let matriz3 = new Array(filas1);
    for (let f = 0; f < filas1; f++) {
        matriz3[f] = new Array(columnas2);
    }
    for (let i = 0; i < filas1; i++) {
        for (let j = 0; j < columnas1; j++) {
            matriz3[i][j] = matriz1[i][j];
        }
    }
    for (let i = 0; i < filas2; i++) {
        for (let j = 0; j < columnas2; j++) {
            matriz3[i][j]=matriz3[i][j]*matriz2[i][j];
        }
    }
    return matriz3;
}
alert("Opciones Disponibles:\n1.Multiplicación de una matriz por un escalar \n 2.Multiplicación de dos matrices");
let opcion = parseInt(prompt("Que opción quieres realizar(1 o 2):"));
if (opcion == 1) {
    let filas = parseInt(prompt("Tamaño de filas de la matriz: "));
    let columnas = parseInt(prompt("Tamaño de columnas de la matriz: "));
    let valor = parseInt(prompt("Valor para multiplicar: "));
    let matriz = new Array(columnas);
    //Preguntar a Jose Juan 
    for (let f = 0; f < filas; f++) {
        matriz[f] = new Array(columnas);
    }
    rellenarArrayBidimensional(filas, columnas, matriz);


    document.write("Mostramos el array creado:<br>");
    recorrerArrayBidimensional(filas, columnas, matriz);

    document.write("<br>");

    multiplicarvaloresArray(filas, columnas, matriz, valor);
    recorrerArrayBidimensional(filas, columnas, matriz);
} else {
    alert("Debo recordar que solo podremos trabajar con las matrices si sus dimensiones son por ejemplo X/3 y 3/Y");
    let filas1 = parseInt(prompt("Tamaño de filas de la matriz 1: "));
    let columnas1 = parseInt(prompt("Tamaño de columnas de la matriz 1: "));
    let filas2 = parseInt(prompt("Tamaño de filas de la matriz 2: "));
    let columnas2 = parseInt(prompt("Tamaño de columnas de la matriz 2: "));
    if (columnas1 == filas2) {
        let matriz1 = new Array(columnas1);
        for (let f = 0; f < filas1; f++) {
            matriz1[f] = new Array(columnas1);
        }
        let matriz2 = new Array(columnas2);
        //Preguntar a Jose Juan 
        for (let f = 0; f < filas2; f++) {
            matriz2[f] = new Array(columnas2);
        }
        rellenarArrayBidimensional(filas1, columnas1, matriz1);
        rellenarArrayBidimensional(filas2, columnas2, matriz2);
        document.write("Mostramos el array creado 1:<br>");
        recorrerArrayBidimensional(filas1, columnas1, matriz1);
        document.write("Mostramos el array creado 2:<br>");
        recorrerArrayBidimensional(filas2, columnas2, matriz2);
        document.write("<br>");
        document.write("<br>");
        document.write("Mostramos Operacion Matricial");
        let matriz=productoMatricial(filas1,columnas1,filas2,columnas2,matriz1,matriz2);
        recorrerArrayBidimensional(filas1,columnas1,matriz2);

    } else {
        alert("Las matrices no son compatibles FATAL ERROR 404");
    }
}