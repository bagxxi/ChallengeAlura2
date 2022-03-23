function cargaContextoCanvas(idCanvas){
    var elemento = document.getElementById(idCanvas);
    if(elemento && elemento.getContext){
       var contexto = elemento.getContext('2d');
       if(contexto){
          return contexto;
       }
    }
    return FALSE;
}
 
function dibujarJuego(){
    var ctx = cargaContextoCanvas('lienzo');
    if(ctx){
       var img = new Image();
       img.src = 'images/Ahorcado-' + contadorFallos.toString()+'.png';
       img.onload = function(){
          ctx.drawImage(img, 50, 30, 450, 400);
       }
    }
}

window.onload = dibujarJuego();