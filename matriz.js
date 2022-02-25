'use strict'
//la funcion crea una matriz con las filas y columnas dadas
function creaArrayBidimensional(filas,columnas){
    let matriz= new Array();
    for (let i = 0; i < filas; i++) {
       matriz[i]=new Array(columnas);
        
    }
    return matriz;
}

//la funcion rellena el array con valores aleatorios comprendidos entre 10 y -10
function rellenarArrayBidimensional(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            let numeroAleatorio = Math.floor(Math.random() * (10 - -10)) + -10;
            matriz[i][j] = numeroAleatorio;
        }
    }
}
//la funcion recorre el array mostrando los valores
function recorrerArrayBidimensional(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            document.write("  " + matriz[i][j]);
        }
        document.write("<br>");
    }
}
//multiplica la matriz por el valor dado
function multiplicarValoresArray(matriz, valor) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] *= valor;
        }

    }
}
//la funcion va a multiplicar una matriz por otra dando como resultado una nueva
function productoMatricial(matrizA, matrizB) {
    //creamos la matriz a devolver que tendra de filas igual a las de la matriz1 y columnas iguales a las del matriz2
    let matriz = new Array();
    for (let i = 0; i < matrizA.length; i++) {
        matriz[i] = new Array(matrizB[0].length);
    }
    //se comienza el for para que se repita igual al número de filas de la primera 
    for (let f = 0; f < matrizA.length; f++) {
        // el for anidado se repetirá igual al número de columnas del segundo
        for (let j = 0; j < matrizB[0].length; j++) {
            let valor = 0;
        // el ultimo for se repetirá  igual al número de columnas del primero
            for (let x = 0; x < matrizB.length; x++) {
                //con esto conseguimos que la matriz1 se recorra horizontalmente y la matriz2
                valor += (matrizA[f][x] * matrizB[x][j]);
            }
            matriz[f][j] = valor;
        }
    }

    return matriz;
}

alert("Opciones Disponibles:\n1.Multiplicación de una matriz por un escalar \n 2.Multiplicación de dos matrices");
let opcion = parseInt(prompt("Que opción quieres realizar(1 o 2):"));
if (opcion == 1) {
    let filas = parseInt(prompt("Tamaño de filas de la matriz: "));
    let columnas = parseInt(prompt("Tamaño de columnas de la matriz: "));
    let valor = parseInt(prompt("Valor para multiplicar: "));
    //creamos la matriz con los valores pedidos
    let matriz=creaArrayBidimensional(filas,columnas);
    rellenarArrayBidimensional(matriz);

    document.write("Mostramos el array creado:<br>");

    recorrerArrayBidimensional(matriz);

    document.write("<br>");

    multiplicarValoresArray(matriz, valor);
    document.write("Mostramos el array multiplicado:<br>");
    recorrerArrayBidimensional(matriz);
} else {
    alert("Debo recordar que solo podremos trabajar con las matrices si sus dimensiones son por ejemplo X/3 y 3/Y");
    let filas1 = parseInt(prompt("Tamaño de filas de la matriz 1: "));
    let columnas1 = parseInt(prompt("Tamaño de columnas de la matriz 1: "));
    let filas2 = parseInt(prompt("Tamaño de filas de la matriz 2: "));
    let columnas2 = parseInt(prompt("Tamaño de columnas de la matriz 2: "));
    //creamos las matrizes solo si son compatibles 
    if (columnas1 == filas2) {
        //Ccreamos las matrizes con los valores dados
        let matrizA=creaArrayBidimensional(filas1,columnas1);
        let matrizB=creaArrayBidimensional(filas2,columnas2)
        rellenarArrayBidimensional(matrizA);
        rellenarArrayBidimensional(matrizB);
        document.write("Mostramos el array creado 1:<br>");
        recorrerArrayBidimensional(matrizA);
        document.write("Mostramos el array creado 2:<br>");
        recorrerArrayBidimensional(matrizB);
        document.write("Mostramos Operacion Matricial:<br>");
        let matrizC = productoMatricial(matrizA, matrizB);
        recorrerArrayBidimensional(matrizC);
    } else {
        alert("Las matrices no son compatibles FATAL ERROR 404");
    }
}