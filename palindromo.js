let frase = prompt("Frase a comprobar: ");
let espacios = prompt("Quiere tener en cuenta los espacios?:(SI/NO)");
let fraseNoEspace = frase;
//si el usuario quiere no quiere tener en cuenta los espacios en blanco serán remplazados
if (espacios.toLocaleLowerCase() == "no") {
    fraseNoEspace = fraseNoEspace.replace(/ /g, "");
}
let minusculas = prompt("Quiere tener en cuenta las mayúsculas y minúsculas?:(SI/NO)");
//si el usuario quiere no quiere tener en cuenta loas mayúsculas y minúsculas serán remplazadas todas por minúsculas
if (minusculas.toLocaleLowerCase() == "no") {
    fraseNoEspace = fraseNoEspace.toLowerCase();
}
//si el usuario no quiere tener en cuenta los acentos serán remplazados por la misma letra sin acento
let acentos = prompt("Quiere tener en cuenta los acentos?:(SI/NO)")
if (acentos.toLocaleLowerCase() == "no") {
    if (minusculas.toLocaleLowerCase() == "no") {
        fraseNoEspace = fraseNoEspace.replace(/á/g, "a");
        fraseNoEspace = fraseNoEspace.replace(/é/g, "e");
        fraseNoEspace = fraseNoEspace.replace(/í/g, "i");
        fraseNoEspace = fraseNoEspace.replace(/ó/g, "o");
        fraseNoEspace = fraseNoEspace.replace(/ú/g, "u");
    } else {
        fraseNoEspace = fraseNoEspace.replace(/Á/g, "A");
        fraseNoEspace = fraseNoEspace.replace(/É/g, "E");
        fraseNoEspace = fraseNoEspace.replace(/Í/g, "I");
        fraseNoEspace = fraseNoEspace.replace(/Ó/g, "O");
        fraseNoEspace = fraseNoEspace.replace(/Ú/g, "U");
        fraseNoEspace = fraseNoEspace.replace(/á/g, "a");
        fraseNoEspace = fraseNoEspace.replace(/é/g, "e");
        fraseNoEspace = fraseNoEspace.replace(/í/g, "i");
        fraseNoEspace = fraseNoEspace.replace(/ó/g, "o");
        fraseNoEspace = fraseNoEspace.replace(/ú/g, "u");
    }

}
let tamaño = fraseNoEspace.length;
let cadenaInvertida = "";
//concatenamos la cadena invertida recorriendo de manera inversa la frase tratada
for (let i = tamaño; i >= 0; i--) {
    cadenaInvertida += fraseNoEspace.charAt(i);
}
console.log(fraseNoEspace);
console.log(cadenaInvertida);
//comparamos finalmente si es un palíndromo o no.
if (fraseNoEspace == cadenaInvertida) {
    alert("'" + frase + "' es un palíndromo");
} else {
    alert("'" + frase + "' no es un palíndromo");
}
