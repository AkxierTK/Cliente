//realizamos las petición de la variable
let ladoFuera = prompt("Numero de lados fuera: ")
ladoFuera = parseInt(ladoFuera);
let ladoDentro = prompt("Numero de lados Dentro: ")
ladoDentro = parseInt(ladoDentro);


document.writeln("Cruz");
document.writeln("<br>");
document.write("<pre>");
//el valor del interior es el total - el interior /2
let pintar=(ladoFuera-ladoDentro)/2;
for(let i=1;i<=ladoFuera;i++){
    if(i<=pintar){
        //for para el primer bloque de 3
        for(let a=1;a<=ladoFuera;a++){
            if(a<=pintar||a>pintar+ladoDentro){
                document.write("#");
            }else{
                document.write(".");
            }
        }
        //for para el 2 bloque de 3
    }else if(i>pintar && i<=ladoFuera-ladoDentro){
        for(let a=1;a<=ladoFuera;a++){
            document.write(".");
        }

    }else{
        //for para el 3 bloque de 3
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
            //el if permite que solo se evite justamente el lugar del centro.
            if(a<=pintar||a>pintar+ladoDentro|| i<=pintar||i>pintar+ladoDentro){
                document.write("#");
            }else{
                document.write(".");
            }
        }
    
    document.write("<br>");

}
document.write("</pre>");