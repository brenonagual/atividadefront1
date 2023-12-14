const emailInput = document.getElementById('email')
const senhaInput = document.getElementById('senha')

function logar() {
    if(emailInput.value === 'email@email.com' && senhaInput.value === 'senha') {
alert('logado')
window.location.href = 'painel.html'
    } else {
        alert('email ou senha incorretos')
    }
}