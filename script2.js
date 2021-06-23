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

        //tipo de jugada
        var tipodejugada = parseInt(prompt("ingrese el tipo de jugada (número) que desea realizar, siendo 1 = Piedra, 2 = Papel y 3 = Tijeras"))
        
        switch (tipodejugada){
            case 1:
                if(tipodejugada === jugadamaquina){
                    alert('empataste')
                    resultados.innerHTML += `Empataste`
                }
                if(tipodejugada === 2){
                    alert('perdiste')
                    resultados.innerHTML += `PerdisTe`
                }
                if(tipodejugada === 3){
                    alert('ganaste')
                    resultados.innerHTML += `Ganaste`
                }
            break;
            
            case 2:
                if(tipodejugada === jugadamaquina){
                    alert('empataste')
                    resultados.innerHTML += `Empataste <br>`
                }
                if(tipodejugada === 1){
                    alert('perdiste')
                    resultados.innerHTML += `Perdiste <br>`
                }
                if(tipodejugada === 1){
                    alert('ganaste')
                    resultados.innerHTML += `Ganaste <br>`
                }
            break;
            
            case 3:
                if(tipodejugada === jugadamaquina){
                    alert('empataste')
                    resultados.innerHTML += `Empataste <br>`
                }
                if(tipodejugada === 1){
                    alert('perdiste')
                    resultados.innerHTML += `Perdiste <br>`
                }
                if(tipodejugada === 2){
                    alert('ganaste')
                    resultados.innerHTML += `Ganaste <br> `
                }
            break;
        
            //validación
            default:
                input +=1
                alert("tu jugada no corresponde a las opciones mencionadas 1= Piedra, 2 = Papel, 3 = Tijeras")
            
        }
    }
})

//define ganador
while(contador < numeroJugadas){
    
    ganador = defineGanador(jugadas, jugadamaquina());
    contador++;

    switch (ganador) {
      case 'humano':
        alert(`¡Felicidades haz ganado!`)
        resultadosganador.innerHTML = `¡Felicidades, ganaste!`
        break;
      case 'máquina':
        alert(`haz perdido contra la máquina`)
        resultadosganador.innerHTML = `¡Perdiste la ronda!`
        break;
      default:
        alert('Empataste')
    }
}
