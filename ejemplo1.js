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
/*

let personas=[[25,"Giorgi"],[24,"Miguel"],[48,"JoseJu"]];

console.log(personas.length);
console.log(personas[2][1]);

let personasOrdenadas;

console.log(personas.sort((a,b)=>b ));
*/

/*
let padre=document.getElementsByTagName("ul");
padre[0].appendChild(nuevoElemento);

 padre=document.querySelector("ul");
padre.appendChild(nuevoElemento);

 padre=document.querySelectorAll("ul");
padre[0].appendChild(nuevoElemento);

padre=document.body.children("ul");
padre.appendChild(nuevoElemento);
/*selecciona al 3 li*/
/*
let hermano=document.querySelector("li:nth-of-type(3n");
parent.insertBefore(nuevoElemento,hermano);
*/


let estilo = document.createElement("style")
estilo.innerText = ".rojo{background-color:red;}";
document.head.appendChild(estilo);



document.body.setAttribute("class", "rojo");
/* dos maneras de hacerlo ^ V*/
document.body.className = "rojo";



document.body.style.backgroundColor = "Green";
div = document.getElementById("div1");
div.style.backgroundColor = "Blue";
div.style.width = "200px";
div.style.width = "300px";
div.style.display = "none";
alert(div.style.width);
div.style.display = "block";

/*
elemento.onclick=()=>{
    //aqui el codigo de la funcion
    alert("Hola2");
}

*/


let elemento = document.getElementById("boton1");
let textarea = document.getElementById("textArea");
let pass = document.getElementById("pass");
let lista = document.getElementById("lista");
elemento.addEventListener("click", function (evento) {
    let nuevoElemento2 = document.createElement("li");
    nuevoElemento2.innerText = pass.value;
    alert(textarea.value);
    lista.appendChild(nuevoElemento2);
});

let check = document.getElementById("mostrar");

check.addEventListener("click", function (evento) {
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
})

/************************ */

let desplegable = document.getElementById("desplegable");
let textArea2 = document.getElementById("textArea2");
let añadir = document.getElementById("boton3");
let borrar = document.getElementById("boton2");

añadir.addEventListener("click", function (evento) {
    let option = document.createElement("option");
    option.innerText = textArea2.value;
    desplegable.appendChild(option);
});

borrar.addEventListener("click", function (option) {
    desplegable.removeChild(desplegable.lastChild);
});

let listaE = document.getElementById("listaE")
let desplegable2 = document.getElementById("desplegable2");
let borrar2 = document.getElementById("botonB");
let añadir2 = document.getElementById("botonA");
let textArea3 = document.getElementById("textArea3");

for (let i = 1; i <= listaE.children.length; i++) {
    let option2 = document.createElement("option");
    option2.innerText = i;
    desplegable2.appendChild(option2);
}

borrar2.addEventListener("click", function (option) {
    let eliminar = desplegable2.selectedIndex;
    listaE.removeChild(listaE.children[eliminar]);
    desplegable2.removeChild(desplegable2.lastChild);
});

añadir2.addEventListener("click", function (evento) {
    let li = document.createElement("li");
    li.innerText = textArea3.value;
    listaE.appendChild(li);
    let desplegableO = document.createElement("option");
    desplegableO.innerText = (desplegable2.children.length) + 1;
    desplegable2.appendChild(desplegableO);
});

/********************** */

let listaBorrar=document.getElementById("listaB");
let botonBA=document.getElementById("botonBA");
let textBA=document.getElementById("textAreaB");

for (let i = 0; i < listaBorrar.children.length; i++) {
    listaBorrar.children[i].addEventListener("click",function(evento){
        if(window.confirm("Quieres borrar el elemento?")){
            listaBorrar.removeChild(this);
        }
    });
}

botonBA.addEventListener("click", function (evento) {
    li = document.createElement("li");
    li.innerText = textBA.value;
    li.addEventListener("click",function(evento){
        if(window.confirm("Quieres borrar el elemento?")){
            listaBorrar.removeChild(this);
        }
    });
    listaBorrar.appendChild(li);
});

let cochesRelleno=document.getElementById("coches");
let añadirD=document.getElementById("unoD");
let añadirTD=document.getElementById("todosD");
let cochesVacio=document.getElementById("coches2");
let añadirI=document.getElementById("unoI");
let añadirTI=document.getElementById("todosI");
añadirD.addEventListener("click",function(evento){
    for(let i=0;i<cochesRelleno.children.length;i++){
        if(cochesRelleno.children[i].selected){
            let option=document.createElement("option");
            option.innerText=cochesRelleno.children[i].value;
            cochesVacio.appendChild(option);
            cochesRelleno.removeChild(cochesRelleno.children[i]);
        }
    }
});

añadirTD.addEventListener("click",function(evento){
    while(cochesVacio.children.length){
            let option=document.createElement("option");
            option.innerText=cochesRelleno.children[0].value;
            cochesVacio.appendChild(option);
            cochesRelleno.removeChild(cochesRelleno.children[0]);
    }
});

añadirI.addEventListener("click",function(evento){
    for(let i=0;i<cochesVacio.children.length;i++){
        if(cochesVacio.children[i].selected){
            let option=document.createElement("option");
            option.innerText=cochesVacio.children[i].value;
            cochesRelleno.appendChild(option);
            cochesVacio.removeChild(cochesVacio.children[i]);
        }
    }
});

añadirTI.addEventListener("click",function(evento){
    for(let i=0;i<cochesVacio.children.length;i++){
            let option=document.createElement("option");
            option.innerText=cochesVacio.children[i].value;
            cochesRelleno.appendChild(option);
            cochesVacio.removeChild(cochesVacio.children[i]);
    }
});
let textoAnterior="";
document.getElementById("numeros").addEventListener("keydown",function(e){
    console.log(this.value);
    if(e.key<"0"|| e.key>"9"){
        this.value=textoAnterior;
        e.preventDefault();
    }else{
        textoAnterior=this.value+e.key;
    }
})

 let div2= document.getElementById("cuadro");
 div2.style.width="300px";
 div2.style.height="300px";
 div2.style.backgroundColor="red";
 div2.style.borderRadius="5px";

