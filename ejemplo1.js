/*document.write("<pre>");
for(let i=0;i<9;i=i+2){
    let espaciosBlanco=(9-i)/2;
    for(let j=0;j<espaciosBlanco;j++){
        document.write(" ");
    }
    for(let b=0;b<=i;b++){
        document.write("*");
       
    }
    document.write("<br>");
}
for(let p=9;p>=0;p=p-2){
    let espaciosBlanco=(9-p)/2;
    for(let c=0;c<espaciosBlanco;c++){
        document.write(" ");
    }
    for(let b=0;b<p;b++){
        document.write("*");
       
    }
    document.write("<br>");
}


document.write("</pre>");


console.log(Number.MAX_VALUE * 2); // Imprime 
Infnityconsole.log(Number.POSITIVE_INFINITY); // Imprime 
Infnityconsole.log(Number.NEGATIVE_INFINITY); // Imprime 
-Infnityconsole.log(typeofNumber.POSITIVE_INFINITY); // Imprime 
let number = Number.POSITIVE_INFINITY / 2; // Sigue siendo todavía infnito!!
if(isFinite(number)) { // Es igual que (number !== Infnity && number !== -Infnity)
    console.log("El número es " + number);} else { 
        // Enters 
        hereconsole.log("El número no es fnito");  }
*/
/*    let a=5;
  a<<1;
    console.log(a);

    for($i=0;$i<32;$i++){
        a=a<<1;
        console.log(a);
    }*/
    /*
let ladoFuera = prompt("Numero de lados fuera: ")
ladoFuera = parseInt(ladoFuera);
let ladoDentro = prompt("Numero de lados Dentro: ")
ladoDentro = parseInt(ladoDentro);


document.writeln("Cruz");
document.writeln("<br>");
document.write("<pre>");
let pintar=(ladoFuera-ladoDentro)/2;
for(let i=1;i<=ladoFuera;i++){
    if(i<=pintar){
        for(let a=1;a<=ladoFuera;a++){
            if(a<=pintar||a>pintar+ladoDentro){
                document.write("#");
            }else{
                document.write(".");
            }
        }
    }else if(i>pintar && i<=ladoFuera-ladoDentro){
        for(let a=1;a<=ladoFuera;a++){
            document.write(".");
        }

    }else{
        for(let a=1;a<=ladoFuera;a++){
            if(a<=pintar||a>pintar+ladoDentro){
                document.write("#");
            }else{
                document.write(".");
            }
        }

    }
    document.write("<br>");

}
document.write("</pre>");

document.writeln("Marco");
document.writeln("<br>");
document.write("<pre>");
for(let i=1;i<=ladoFuera;i++){
        for(let a=1;a<=ladoFuera;a++){
            if(a<=pintar||a>pintar+ladoDentro|| i<=pintar||i>pintar+ladoDentro){
                document.write("#");
            }else{
                document.write(".");
            }
        }
    
    document.write("<br>");

}
document.write("</pre>");


let b="Hola";

for(let i=0;i<b.length;i++){
    console.log(b[i]);
}
*/


let personas=[[25,"Giorgi"],[24,"Miguel"],[48,"JoseJu"]];

console.log(personas.length);
console.log(personas[2][1]);

let personasOrdenadas;

console.log(personas.sort((a,b)=>b ));