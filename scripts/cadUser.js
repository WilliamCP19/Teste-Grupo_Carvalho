const nome = document.getElementById("txtNome");
const email = document.getElementById("txtEmail")
let cpf = document.getElementById("txtCpf");
let telefone = document.getElementById("txtTelefone");
const senha = document.getElementById("txtSenha");

cpf.addEventListener('keypress', () => {
    let lengthCpf = cpf.value.length;
    if (lengthCpf === 3 || lengthCpf === 7) {
        cpf.value += '.';
    } else if (lengthCpf === 11) {
        cpf.value += '-'
    }
})

telefone.addEventListener("keypress", () => {
    let lengthTelefone = telefone.value.length;

    if (lengthTelefone === 0) {
        telefone.value += "("
    } else if (lengthTelefone === 3) {
        telefone.value += ') '
    } else if (lengthTelefone === 10) {
        telefone.value += "-";
    }
})

document.getElementById("checkSenha").addEventListener('click', () => {
    const senha = document.getElementById('txtSenha')
        if (senha.type == 'password') {
            senha.type = 'text';
        } else {
            senha.type = 'password'
        }
})

const cadastrarUsuario = () => {
    localStorage.nome = nome.value;
    localStorage.email = email.value;
    localStorage.cpf = cpf.value;
    localStorage.telefone = telefone.value;
    localStorage.senha = senha.value;
    location.href = './index.html';
}