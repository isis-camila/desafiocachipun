//piedra, papel, tijera
let resultados = document.getElementById("resultados");
let numeroJugadas = document.getElementById("numero-jugadas");
let boton = document.getElementById("boton");
let resultadosganador = document.getElementById("resultadosganador");
let contador = 0;


boton.addEventListener("click", function(){
    let input = Math.floor(parseInt(numeroJugadas.value))
  
    
    for(i=1; i<=input; i++){
        //random máquina
        let jugadamaquina = Math.floor(Math.random()*3 + 1);

        //jugadores
        let jugadora = 0;
        let jugadorb = 0;

        //tipo de jugada
        var tipodejugada = parseInt(prompt("ingrese el tipo de jugada (número) que desea realizar, siendo 1 = Piedra, 2 = Papel y 3 = Tijeras"))
       
        switch (tipodejugada){
            case 1: //piedra, papel, tijera
                if(tipodejugada == jugadamaquina){
                    alert("empataste")
                    resultados.innerHTML += `Empataste `
                    jugadora++
                    jugadorb++
                }
                if(tipodejugada == 2){
                    alert("perdiste")
                    resultados.innerHTML += `PerdisTe `
                    jugadorb++
                }
                if(tipodejugada == 3){
                    alert("ganaste")
                    resultados.innerHTML += `Ganaste `
                    jugadora++
                }
               
            break;
            
            case 2: //piedra, papel, tijera
                if(tipodejugada == jugadamaquina){
                    alert("empataste")
                    resultados.innerHTML += `Empataste `
                    jugadora++
                    jugadorb++
                }
                if(tipodejugada == 3){
                    alert("perdiste")
                    resultados.innerHTML += `Perdiste `
                    jugadorb++
                }
                if(tipodejugada == 1){
                    alert("ganaste")
                    resultados.innerHTML += `Ganaste `
                    jugadora++
                }
            break;
            
            case 3: //piedra, papel, tijera
                if(tipodejugada == jugadamaquina){
                    alert("empataste")
                    resultados.innerHTML += `Empataste `
                    jugadora++
                    jugadorb++
                }
                if(tipodejugada == 1){
                    alert("perdiste")
                    resultados.innerHTML += `Perdiste `
                    jugadorb++
                }
                if(tipodejugada == 2){
                    alert("ganaste")
                    resultados.innerHTML += `Ganaste `
                    jugadora++
                }
            break;
        
            //validación
            default:
                input--
                alert("tu jugada no corresponde a las opciones mencionadas 1= Piedra, 2 = Papel, 3 = Tijeras")
            
        }

        // Definir ganador
        
        if(jugadora > jugadorb){
            resultadosganador.innerHTML = `Ganaste la partida`
        } if(jugadorb>jugadora){
            resultadosganador.innerHTML = `Perdiste la partida`
        } else{
            resultadosganador.innerHTML = `Empataron`
        }

    }
    console.log(resultadosganador)
})

 
