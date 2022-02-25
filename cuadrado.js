document.addEventListener("click",function(e){
    let cuadro=document.createElement("div");
    cuadro.style.position="absolute";
    cuadro.style.borderRadius="100%";
    cuadro.style.height="100px";
    cuadro.style.width="100px";
    cuadro.style.backgroundColor="red";
    cuadro.style.top=e.y-50+"px";
    cuadro.style.left=e.x-50+"px";
    cuadro.addEventListener("click",e=>{
        let R = Math.random() * 255;
        let G = Math.random() * 255;
        let B = Math.random() * 255;
        let RGB = R + ", " + G + ", " + B;
        cuadro.style.backgroundColor = "rgb(" + RGB + ")";
        e.stopPropagation();
    })
    document.body.appendChild(cuadro);
});