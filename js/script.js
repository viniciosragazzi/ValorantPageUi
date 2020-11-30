let lg = document.querySelector(".login");
let regi = document.querySelector(".registro");
let back = document.querySelector(".back");
let voltar = document.querySelector(".voltar");
let vid = document.querySelector(".vd");
let iniciar = document.querySelector(".iniciar-bg");
let textoIniciar = document.querySelector(".text")
let telaGame = document.querySelector(".tela-game")
let corpo = document.querySelector(".corpo")
let social =  document.querySelector(".area-social")
let socialL =  document.querySelector(".social-lateral")
let ptexto =  document.querySelector(".pp")
let picon =  document.querySelector(".pp2")
let icos =  document.querySelector(".icos")
let prin =  document.querySelector(".area-usuario")
let chat = document.querySelector(".chat")
let fechar = document.querySelector(".fechar")
let down = document.querySelector(".down")
let nc = document.querySelector(".nome-chat")
let con = document.querySelector(".config")
let arealogo2 = document.querySelector(".area-logo2")
let arealogom = document.querySelector(".area-logom")
let rank = document.querySelector(".rank")
let imgg = document.querySelector(".imgrank")
let rankimg = document.querySelector(".img-rank")
const botaoj = document.querySelector(".jogar")
function regis(){
   
    regi.style.marginLeft = '0px';
    regi.style.width = '600px';
    regi.style.height = '600px';
    back.style.width = '60%';
    back.style.position = 'relative';
    back.style.left = '120px';
    lg.style.position = 'relative'
    lg.style.left = '300px'
}
function logar(){
    
    regi.style.marginLeft = '600px';
    regi.style.width = '600px';
    regi.style.height = '600px';
    back.style.width = '70%';
    back.style.position = 'relative';
    back.style.left = '0';
    lg.style.position = 'relative'
    lg.style.left = '0'
}

function entrar(){
    lg.style.display = 'none'
    voltar.style.display = 'flex'
    regi.style.Marginleft = '900px'
    back.style.width = '100%';
    vid.style.right = '0';
    iniciar.style.display = 'block';
    vid.style.filter = "blur(5px)";
    regi.style.display = 'none'
}
function vt(){
    lg.style.display = 'flex'
    voltar.style.display = 'none'
    regi.style.Marginleft = '800px'
    back.style.width = '70%';
    vid.style.right = '200px';
    iniciar.style.display = 'none';
    vid.style.filter = "blur(0)";
    regi.style.display = 'flex'
    
    
}

function clickJogar(){
    lg.style.display = "none";
    regi.style.display = "none";
    back.style.display = "none";
    voltar.style.display = "none";
    iniciar.style.display = "none";
    textoIniciar.style.display = "none";
    telaGame.style.display = "flex"
    vid.style.filter = "blur(0)";
    corpo.style.backgroundColor = '#4F0F63';
}

function clicksocial(){
 
    socialL.style.transform = "translateY(40px)";
    socialL.style.width = "200px"; 
    socialL.style.height = "400px"; 
    ptexto.style.display = "none";
    picon.style.display = "flex"
    socialL.style.display = "flex"
    imgg.style.display = "block";
    rankimg.style.display = "none"
    rank.style.display = 'none'
    rank.style.transform = "translateX(400px)"
}

function fecharsocial(){
    socialL.style.transform = "translateY(0)";
    socialL.style.width = "100px"; 
    socialL.style.height = "40px"; 
    ptexto.style.display = "flex";
    picon.style.display = "none"
    icos.style.paddingTop="12px"
    socialL.style.display = "none"
   
}

function clickChat(){
    chat.style.height = "300px"
    down.style.display = "none"
    fechar.style.display = "flex"
    nc.style.borderBottom = "2px solid rgb(114 10 155)"
    
}
function fecharChat(){
    chat.style.height = "20px"
    down.style.display = "flex"
    fechar.style.display = "none"
    nc.style.borderBottom = "none"
}
function clickLogo(){
    con.style.display = "flex"
    con.style.transform = "translateY(90px)"
    arealogom.style.display = "none"
    arealogo2.style.display = "flex"
}
function fecharConfig(){
    con.style.display = "none"
    con.style.transform = "translateY(-90px)"
    arealogom.style.display = "flex"
    arealogo2.style.display = "none"
}

function mostrarRank(){
    imgg.style.display = "none";
    rankimg.style.display = "block"
    rank.style.display = 'flex'
    rank.style.transform = "translateX(-400px)"
    socialL.style.transform = "translateY(0)";
    socialL.style.width = "100px"; 
    socialL.style.height = "40px"; 
    ptexto.style.display = "flex";
    picon.style.display = "none"
    icos.style.paddingTop="12px"
    socialL.style.display = "none"
}

function esconderRank(){
    imgg.style.display = "block";
    rankimg.style.display = "none"
    rank.style.display = 'none'
    rank.style.transform = "translateX(400px)"
}

