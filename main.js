let userE = localStorage.getItem('userD');
let semUsuario = document.getElementById('menu')
let comUsuario = document.getElementById('userInfo')
console.log(userE)
if(userE === null){
    semUsuario.style.display = 'none'
    comUsuario.style.display = 'flex'
}else{
    semUsuario.style.display = 'none'
    comUsuario.style.display = 'flex'
    document.getElementById('username').innerHTML = userE
}
