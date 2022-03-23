String.prototype.replaceAt = 

function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 
var palabras = [];
var agregada = "";

var palabraAgregada = '';
const saltoLinea = "<br>";

var contadorFallos = 0;

function cargarPalabras(){
    agregada = document.querySelector("#campo").value;
    document.querySelector("#campo").focus();
    palabras.push(agregada);
    console.log(palabras);
    if(palabraAgregada == ''){
        palabraAgregada = agregada;
    } else {
        palabraAgregada = palabraAgregada + saltoLinea + agregada;
    }
    console.log(palabraAgregada);
    document.querySelector('#palabrasAgregadas').innerHTML = palabraAgregada;
    return palabras;
}

console.log(palabras);

var palabra = '';
var palabraTruncada = '';
var letrasUsadas = [];
var letrasErroneas = '';

function elegirPalabra(){
    palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraTruncada = palabra.replace(/./g, "_ ");
    console.log(palabraTruncada);
    document.querySelector('#salida').innerHTML = palabraTruncada;
    document.getElementById('juego').style.display = "block";
    document.getElementById('inicioJuego').style.display = "none";
    letrasUsadas = [];
    letrasErroneas = '';
    contadorFallos = 0;
    document.querySelector('#incorrectas').innerHTML = letrasErroneas;
}


/* var palabraTruncada = palabra.replace(/./g, "_ ");
console.log(palabraTruncada); */
console.log("Contador: " + contadorFallos);

document.querySelector('#salida').innerHTML = palabraTruncada;


function calcular(e){
    // solo se ejecuta cuando la tecla es Enter//
    if (event.key !== 'Enter') return;
    
    const letra = document.querySelector('#letra').value;

    if (letrasUsadas.includes(letra)){
        document.querySelector('#letra').value = '';
        document.querySelector('#letra').focus();
        return;
    }
    letrasUsadas.push(letra)
    
    let haFallado = true;
    for(const i in palabra){
        if(letra == palabra[i]){
            palabraTruncada = palabraTruncada.replaceAt(i*2, letra.toUpperCase());
            haFallado = false;
        }

    }

    console.log("Variable: " + haFallado);
    console.log("Contador de fallos: " + contadorFallos);

   if(haFallado){
       contadorFallos++;
       dibujarJuego();
       console.log("Contador de fallos 2: " + contadorFallos);
       letrasErroneas = letrasErroneas + letra.toUpperCase() + ' ';
       document.querySelector('#incorrectas').innerHTML = letrasErroneas;
   }
           
   if(contadorFallos == 6){
       setTimeout(function() {
           alert("Has perdido");
        },1000)
    }
    if(palabraTruncada.indexOf('_') < 0){
        alert("Has ganado");
    }

    document.querySelector('#salida').innerHTML = palabraTruncada;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();

}

