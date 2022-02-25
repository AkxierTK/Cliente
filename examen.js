let numero30 = "999999999999999999999999999998";
alert("Vas a sumar valores al numero 999999999999999999999999999998");
let numSuma = prompt("Introduce el numero que le sumaras: ");
/*crea el array*/
function convierteArray(num) {
    let arrayN = new Array(num.length);
    for (let i = 0; i < num.length; i++) {
        arrayN[i] = num[i];
    }
    return arrayN;
}
numero30 = convierteArray(numero30);
console.log(numero30);
numSuma = convierteArray(numSuma);

function sumaNumerosLargos(numero30, numSuma) {
    /*le damos la vuelta al array */
    let largo = numero30.reverse();
    let arraySuma = new Array(numero30.length + 1);
    let num;
    
    for (let i = 0; i < numero30.length; i++) {
        if (i == 0) {
            num = largo[i] + numSuma[0];
            if (num > 10) {
                num = num -10;
                arraySuma.push(num);
                numSuma[0] = 1;
            }
        } else if (numSuma[0] == 1) {
            num = largo[i] + numSuma[0];
            if (num > 10) {
                num -= 10;
                arraySuma.push(num);
                numSuma[0] = 1;
                if (i == numero30.length - 1 && numSuma[0]==1) {
                    arraySuma.push(1);
                }
            }
        }
    }
    return arraySuma.reverse();
}

let c = sumaNumerosLargos(numero30,numSuma);
console.log(c.join(""));