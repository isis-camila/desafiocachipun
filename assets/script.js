//llamar elementos del html
            //llamo boton del html para usar evento click
const boton = document.getElementById('boton');
            //numero de jugadas
const input = document.getElementById('numero-jugadas')
console.log(input)
            // jugada: piedra, papel o tijera
const select= parseInt(document.getElementById('jugada-usuario'));
        



boton.addEventListener("click", function(){

    
    for(i = 0; i < numjugadas; i++){
        console.log(select.value)
        
        //random máquina
        let jugadamaquina = Math.floor(Math.random()*3 + 1);
  
        switch(jugadas){
            case 1: //piedra, papel, tijera
                if( jugadas == jugadamaquina)
                document.write("empataste")

                if( jugadas == 2)
                document.write("perdiste")

                if( jugadas == 3)
                document.write("Ganaste")
                break;
            
            case 2: //piedra, papel, tijera
                if (jugadas == jugadamaquina)
                document.write("empataste")

                if(jugadas == 3)
                document.write("perdiste")

                if( opcionesjugadas == 1)
                document.write("Ganaste")
                break;
                
            case 3: //piedra, papel, tijera
                if (jugadas == jugadamaquina)
                document.write("empataste")

                if(jugadas == 1)
                document.write("perdiste")

                if(jugadas == 2)
                document.write("Ganaste")
                break;    
        }
    }
 
})
document.innerHTML= resultados