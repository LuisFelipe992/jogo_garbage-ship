class Player {
    constructor(x,y,larg,alt,cor){
        this.x = x;
        this.y = y;
        this.larg = larg;
        this.alt = alt;
        this.cor = cor;
        this.e = false;
        this.d = false;
        this.vel =7;
        this.peso ;
        this.agregado;
    }
    update(){
        /**      MOVIMENTAÇÃO DO BARCO */
        if(this.e){
            this.x-= this.vel;
        }
        if(this.d){
            this.x+= this.vel;
        }
        /*********************** */

        /********MARGENS DO CAMPO DE VISÃO */
        if(this.x<=0){
            this.e = false
            this.x = 0;
        }
        else if(this.x + this.larg>= canva.width){
            this.d = false
            this.x = canva.width-this.larg;
        }

        

    }
    draw(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
        
    }
}

/***************************************************
 *          CLASSE LIXO
 * 
 ***************************************************/




class Lixo{
    constructor(x,y,larg,alt,kg,tipo,contamina){
        this.colidiu = false;
        this.foi = false;
        this.x = x;
        this.y = y;
        this.larg= larg;
        this.alt= alt;
        this.peso= kg;
        this.tipo=tipo;
        this.perigo= contamina;
        this.velx = 7
        this.vely = this.peso*0.05;
        this.cor = "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")";

    }
    update(){
        this.y+= this.vely;
        
        if(this.colidiu){
            if(jogador.e){
                this.x-= this.velx
            }
            if(jogador.d){
                this.x+= this.velx
            }
            
            
        }
    }
    draw(){
        ctx.fillStyle= this.cor;
        ctx.fillRect(this.x,this.y,this.larg,this.alt);
    }
}



/*** CLASSE DO AMBIENTE */

class Ambiente {
    constructor(){
        this.poluicao = 0
        this.radioatividade = 0.05
    }
}






