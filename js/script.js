let lg = document.querySelector(".login");
let regi = document.querySelector(".registro");
let back = document.querySelector(".back");
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
    back.style.width = '100%';
}