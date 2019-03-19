var debug = true;

function log(mensaje){

    try {
        if(debug)
            console.log(mensaje);

    }catch(ex)
    {
        console.log(ex)        
    }
}

var players = document.getElementById('jugadores');
var partidasPermitidas;
var juegosGanados = 0;
var juegosPerdidos = 0;
var juegosJugados = 0;
var juegosEmpatados = 0;
var node; 
var respuesta = document.getElementById('divRespuesta');

function cambiaNumeroDePartidas(){
    juegosGanados = 0;
    juegosPerdidos = 0;
    juegosJugados = 0;
    juegosEmpatados = 0;
    node = document.createTextNode(" ");
    
    document.getElementById('lblEmpatados').innerText = juegosEmpatados;
    document.getElementById('lblGanados').innerText = juegosGanados;
    document.getElementById('lblPerdidos').innerText = juegosPerdidos;
    document.getElementById('lblPartidas').innerText = juegosJugados;
    document.getElementById('rival').src='./img/eleccion.png';
    document.getElementById('jugador').src='./img/eleccion.png';
    respuesta.innerHTML = node.nodeValue;

    //quitar mensaje de ganado o perdido
}

document.getElementById('bReiniciar');

function jugadorElige(foto, playerEleccion) { 

    partidasPermitidas = document.getElementById('contra').value;
    if (juegosJugados < partidasPermitidas)  {
        document.getElementById('jugador').src = foto;
        turnoRival(playerEleccion);
    } else {
    //     document.getElementById('bReiniciar').style.display = "block";
    } 

    if( juegosGanados >  (partidasPermitidas / 2) ){
        node = document.createTextNode("Fin del juego, has GANADO.");  
    }else if( (juegosPerdidos + juegosEmpatados) > (partidasPermitidas / 2)){
        node = document.createTextNode("Fin del juego, has PERDIDO.");
    }
    // if(juegosGanados > juegosPerdidos) {
    //     // alert("Ya no puedes jugar, ya has GANADO.");
    //     node = document.createTextNode("Ya no puedes jugar, ya has GANADO.");  
           
    //         } else if(juegosGanados < juegosPerdidos) {
    //             // alert("Ya no puedes jugar, ya has PERDIDO.");
    //             node = document.createTextNode("Ya no puedes jugar, ya has PERDIDO.");
    //             } else if(juegosGanados == juegosPerdidos) {
    //                 // alert("Ya no puedes jugar, empataste las partidas.");
    //                 node = document.createTextNode("Ya no puedes jugar, empataste las partidas.");
    //                 }
    if(node)
        respuesta.innerHTML = node.nodeValue;
}

// function jugadorElige(foto, playerEleccion) {    
//     partidasPermitidas = document.getElementById('contra').value;
//     if (juegosJugados < partidasPermitidas) {
//         document.getElementById('jugador').src = foto;
//         turnoRival(playerEleccion);
//     } else {
//         alert("Fin del juego ya has " + (juegosGanados > juegosPerdidos ? "GANADO." : "PERDIDO."));

//         }   
// }

function turnoRival(playerEleccion) {
    var rivalEleccion = Math.round (Math.random () * (3-1) + 1);

    if ( rivalEleccion == 1) {
        rivalEleccion = 'piedra';
        document.getElementById('rival').src='./img/piedra.png';
        } else if (rivalEleccion == 2) {
            rivalEleccion = 'papel';
            document.getElementById('rival').src='./img/papel.png';
            } else if (rivalEleccion == 3) {
                rivalEleccion = 'tijeras';
                document.getElementById('rival').src='./img/tijera.png';
                }

                compararEleccion(playerEleccion, rivalEleccion);
    }

function compararEleccion(p1, p2) {
    var resulta;
        if (p1 == p2) {
        resulta =  0;
        } else if (p1 == 'piedra' && p2 == 'tijeras') {
            resulta =  1;
            
            } else if (p1 == 'piedra' && p2 == 'papel') {
                resulta =  2;
                
                } else if (p1 == 'papel' && p2 == 'piedra') {
                    resulta =  1;
                    
                    } else if (p1 == 'papel' && p2 == 'tijeras') {
                        resulta = 2;
                        
                        } else if (p1 == 'tijeras' && p2 == 'papel') {
                            resulta =  1;
                            
                            } else if (p1 == 'tijeras' && p2 == 'piedra') {
                                resulta =  2;
                                
                            }
    

     estadistica(resulta);

     return resulta;
}

function estadistica(resultado) {

switch (resultado) {
    case 0: 
    juegosEmpatados++;
    document.getElementById('lblEmpatados').innerText = juegosEmpatados;
    // // document.getElementById('lblGanados').innerText = juegosGanados;
    // // document.getElementById('lblPerdidos').innerText = juegosPerdidos;
    break;
    case 1: 
    juegosGanados++;
    document.getElementById('lblGanados').innerText = juegosGanados;
    break;
    case 2: 
    juegosPerdidos++;
    document.getElementById('lblPerdidos').innerText = juegosPerdidos;
    break;
    }
    juegosJugados++; 
    document.getElementById('lblPartidas').innerText = juegosJugados;
} 

