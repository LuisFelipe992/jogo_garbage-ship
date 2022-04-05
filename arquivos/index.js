// VARIAVEIS DE TELA
var canva = document.createElement('canvas');
document.body.appendChild(canva);

var ctx = canva.getContext('2d');

var width = window.innerWidth;
var height= window.innerHeight;

/**************************  AJUSTAR TELA ******************/
canva.width = width;
canva.height = height;
window.addEventListener('resize', ()=>{
    canva.width  = width ;
    canva.height = height;
})
/**************************** OBJETOS DE JOGO************************* */
var ambiente = new Ambiente();

var jogador = new Player(100, 500,200,100,'red');

var lixo = new Array();
lixo.push(new Lixo(Math.random()*canva.width,0,50,80,20,'caixa',true));

/*************************** VARIAVEIS DE JOGO************************ */
var estado ={
    entrada: false,
    menu : false,
    sena: false,
    jogo : true,
    pause: false,
    fim : false
}
var frames = 0;


/****************************  FUNÇÕES PRINCIPAIS************************** */

function loop(){
    requestAnimationFrame(loop);
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(0,0,canva.width, canva.height);

    update();
    draw();


    frames++;
}
loop();

function update(){
    if(estado.jogo){
        jogador.update()

        for(var i in lixo){
            lixo[i].update()
        }
        colisao(jogador,lixo)


        if(frames%100 == 99)
            lixo.push(new Lixo(Math.random()*canva.width,0,60,80,Math.floor(Math.random()*85)+10,'caixa',Math.floor(Math.random()*30)));
        muda();
    }
 
}

function draw(){
    if(estado.jogo){
        jogador.draw();
        textos();
        for(var i in lixo){
            lixo[i].draw();
        }
    }
}

window.addEventListener('keydown',(e)=>{
    var evt = e.keyCode;
    
    switch(evt){
        case 37:
            jogador.e = true;
            break;
        case 39:
            jogador.d = true;
            break;
    }
    console.log(evt.keyCode)
})

window.addEventListener('keyup',(e)=>{
    var evt = e.keyCode;
    
    switch(evt){
        case 37:
            jogador.e = false;
            break;
        case 39:
            jogador.d = false;
            break;
    }
})