
let numeroSecreto = 0;
let intentos = 0;
//console.log(numeroSecreto);
let listaNumerosSorteados= [];
let numeroMaximo = 10;
condicionesIniciales();


function asignarElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
};

function verificacionIntento(){
    let numeroDelUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(listaNumerosSorteados)

    if(numeroDelUsuario === numeroSecreto){
        asignarElemento(`p`,`Acertaste el numero, el cual era: ${numeroSecreto} , en ${intentos} ${intentos==1 ? `intento`:`intentos`}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.querySelector("#intentar").setAttribute("disabled","true");
        return;
    }else {
        
        if(numeroDelUsuario<numeroSecreto){
        asignarElemento(`p`,`El numero secreto es mayor.`)
        }else{
            asignarElemento(`p`,`El numero secreto es menor.`)
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    
    let numeroGenerado =  Math.floor(Math.random()*10)+1;
    if(listaNumerosSorteados.length === numeroMaximo){
        document.querySelector("#intentar").setAttribute("disabled","true");
        document.querySelector("#reiniciar").setAttribute("disabled","true");
        asignarElemento("p","Ya se sortearon todos los posibles números.");
        
        

    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

        }else{

            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
    }
    }

    
    
};

function limpiarCaja(){
    document.querySelector(`#valorUsuario`).value = "";
   
};

function condicionesIniciales(){
    asignarElemento(`h1`,`Juego del numero SECRETO`);
    asignarElemento(`p`,`Indique un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiarCaja();

    document.getElementById("intentar").removeAttribute("disabled")
    
};
function reiniciarJuego(){
    
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");


};


//  reiniciarJuego();
