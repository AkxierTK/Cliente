'use strict';

let nombre = prompt("What's your name?", "Nobody");
if (nombre !== "null") {
    console.log("Your name is: " + nombre);
} else {
    console.log("You didn't answer!");
}

function myFunction() {
    if (confirm("Do you like dogs?")) {
        console.log("You are a good person");
    } else {
        console.log("You have no soul");
    }
}

console.log(new Date().toString()); // Imprime inmediatamente la fecha actual
setTimeout(() => console.log(new Date().toString()), 5000); // Se ejecutará en 5 segundos (5000 ms)

let num = 1;
let idInterval = setInterval(() => {
    console.log(num++);
    if (num > 10) { // Cuando imprimimos 10, paramos el timer para que no se repita más
        clearInterval(idInterval);
    }
}, 1000);

let element = document.createElement("div");
element.innerHTML = document.documentElement;
document.body.appendChild(element);

document.documentElement // Devuelve el elemento <html>
document.head // Devuelve el elemento <head>
document.body // Devuelve el elemento <body>
document.getElementById("id") // Devuelve el elemento que tiene el id especifcado, o null si no existe.
document.getElementsByClassName("class") // Devuelve un array de elementos que tengan la clase especifcada. Al llamar a este método desde un nodo (en lugar de document), buscará los elementos a partir de dicho nodo.
document.getElementsByTagName("HTML tag") // Devuelve un array con los elementos con la etiqueta HTML especifcada. Por ejemplo “p” (párrafos).
element.childNodes // Devuelve un array con los descendientes (hijos) del nodo. Esto incluye los nodos de tipo texto y comentarios.
element.chidren // Igual que arriba pero excluye los comentarios y las etiquetas de texto (sólo nodos HTML). Normalmente es el recomendado.
element.parentNode // Devuelve el nodo padre de un elemento.
element.nextSibling // Devuelve el siguiente nodo del mismo nivel

let frstLi = document.getElementById("frstListElement"); // Devuelve <li>
console.log(frstLi.nodeName); // Imprime "LI"
console.log(frstLi.nodeType); // Imprime 1. (elemento -> 1, atributo -> 2, texto -> 3, comentario -> 8)
//console.log(frstLi.frstChild.nodeValue); // Imprime "Element 1". El primer (y único) hijo es un nodo de texto
console.log(frstLi.textContent); // Imprime "Element 1". Otra forma de obtener el contenido (texto)

document.querySelector("selector") // Devuelve el primer elemento que coincide con el selector
document.querySelectorAll("selector") // Devuelve un array con todos los elementos que coinciden con el selector

console.log(document.querySelector("#div1 a").title); // Imprime "hello world"
//console.log(document.querySelector("#div1 > a").title); // ERROR: No hay un hijo inmediato dentro de <div id="div1"> el cual sea un enlace <a>
console.log(document.querySelector("#div1 > p > a").title); // Imprime "hello world"
console.log(document.querySelector(".normalLink[title^='bye']").title); // Imprime "bye world"
console.log(document.querySelector(".normalLink[title^='bye'] + a").title); // Imprime "hello again"

let elems = document.querySelectorAll(".normalLink");
elems.forEach(function(elem) { // Imprime "hello world" y "bye world"
    console.log(elem.title);
});

let elems2 = document.querySelectorAll("a[title='hello world'] ~ a"); // Hermanos de <a title="hello world">
elems2.forEach(function(elem) { // Imprime "bye world" y "hello again"
    console.log(elem.title);
});

document.createElement("tag") // Crea un elemento HTML. Todavía no estará en el DOM, hasta que lo insertemos (usando appendChild, por ejemplo) dentro de otro elemento del DOM.
document.createTextNode("text") // Crea un nodo de texto que podemos introducir dentro de un elemento. Equivale a element.innerText = “texto”.
element.appendChild(childElement) // Añade un nuevo elemento hijo al fnal del elemento padre.
element.insertBefore(newChildElement, childElem) // Inserta un nuevo elemento hijo antes del elemento hijo recibido como segundo parámetro.
element.removeChild(childElement) // Elimina el nodo hijo que recibe por parámetro.
element.replaceChild(newChildElem, oldChildElem) // Reemplaza un nodo hijo con un nuevo nodo.

let ul = document.getElementsByTagName("ul")[0]; // Obtiene la primera lista (ul)
let li3 = ul.children[2]; // Tercer elemento de la lista (li)
let newLi3 = document.createElement("li"); // Crea un nuevo elemento de lista
newLi3.innerText = "Now I'm the third element"; // Y le asigna un texto
ul.insertBefore(newLi3, li3); // Ahora li3 es el cuarto elemento de la lista (newLi3 se inserta antes)
li3.innerText = "I'm the fourth element..."; // Cambiamos el texto para refejar que es el cuarto elemento

element.attributes // Devuelve el array con los atributos de un elemento
element.className // Se usa para acceder (leer o cambiar) al atributo class. Otros atributos a los que se puede acceder directamente son: element.id, element.title, element.style (propiedades CSS), … .
element.hasAttribute("attrName") // Devuelve cierto si el elemento tiene un atributo con el nombre especifcado
element.getAttribute("attrName") // Devuelve el valor del atributo
element.setAttribute("attrName", "newValue") // Cambia el valor

let div = document.getElementById("normalDiv");
div.style.boxSizing = "border-box";
div.style.maxWidth = "200px";
div.style.padding = "50px";
div.style.color = "white";
div.style.backgroundColor = "red";

let divClick = function(event) {
    // eventPhase: 1 -> capture, 2 -> target (objetivo), 3 -> bubble
    console.log("Has pulsado: " + this.id + ". Fase: " + event.eventPhase);
    event.stopPropagation();
};
let verde = document.getElementById("verde");
let rojo = document.getElementById("rojo");
let azul = document.getElementById("azul");
verde.addEventListener('click', divClick);
rojo.addEventListener('click', divClick);
azul.addEventListener('click', divClick);

let nowMs = Date.now();
console.log(nowMs);

let now = new Date();
console.log(now.toString());
console.log(now.toISOString()); // Imprime 2016-06-26T18:00:31.246Z
console.log(now.toUTCString()); // Imprime Sun, 26 Jun 2016 18:02:48 GMT
console.log(now.toDateString()); // Imprime Sun Jun 26 2016
console.log(now.toLocaleDateString()); // Imprime 26/6/2016
console.log(now.toTimeString()); // Imprime 20:00:31 GMT+0200 (CEST)
console.log(now.toLocaleTimeString()); // Imprime 20:00:31