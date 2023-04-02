let userE = localStorage.getItem('userD');
let semUsuario = document.getElementById('menu')
let comUsuario = document.getElementById('userInfo')
let btnCadastro = document.getElementById('cadastroBtn')
let btnMapa = document.getElementById('mapaBtn')
console.log(userE)
if(userE === null){
    semUsuario.style.display = 'flex'
    comUsuario.style.display = 'none'
    btnCadastro.style.display = 'flex'
    btnMapa.style.display = 'none'
    console.log('você NÃO está logado')
}else{
    semUsuario.style.display = 'none'
    btnCadastro.style.display = 'none'
    btnMapa.style.display = 'flex'
    comUsuario.style.display = 'flex'
    console.log('você está logado')
    document.getElementById('username').innerHTML = userE
}