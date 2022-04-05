function muda(){
    if(ambiente.poluicao>= 100){
        estado.jogo = false;
        estado.fim = true;
    }
}