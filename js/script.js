let lg = document.querySelector(".login");
let regi = document.querySelector(".registro");
let back = document.querySelector(".back");
let voltar = document.querySelector(".voltar");
let vid = document.querySelector(".vd");
let iniciar = document.querySelector(".iniciar-bg");
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
    
    regi.style.marginLeft = '400px';
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