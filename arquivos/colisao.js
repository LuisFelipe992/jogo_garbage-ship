var pesoAgreagado = 0

function colisao(player,objeto=Array){
    for(var i in objeto){
        var obj = objeto[i];

        if(obj.y+ obj.alt > player.y && obj.y+ obj.alt < player.y + 10 && obj.y < player.y + player.alt){
            if(obj.x < player.x + player.larg && obj.x + obj.larg > player.x ){
                objeto[i].colidiu = true;
                achaColidido(objeto[i]) ;
                pesoAgreagado = objeto[i].peso
                console.log(player.agregado)
            }
                
        }
        if(obj.y> player.y){
            if(obj.foi == false)
                ambiente.poluicao+= obj.perigo;
                objeto[i].foi=true
                player.agregado+= pesoAgreagado;
                console.log(ambiente.poluicao);
        }
    }
}


function achaColidido(value){
    if(value.colidiu== true){
        value.vely=0
        
    }
}