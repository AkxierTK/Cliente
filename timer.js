contador=-1;
do{
setTimeout(()=>{
    contador++;
    document.write("Se ha ejecutadoe el timer "+contador);
},1000);
}while(contador<10);