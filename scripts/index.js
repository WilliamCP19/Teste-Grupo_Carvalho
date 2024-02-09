const email = document.getElementById('txtEmail');
const senha = document.getElementById('txtSenha');

const logar = () => {
    if (email.value === localStorage.email) {
        if (senha.value === localStorage.senha) {
            dados = {
                "nome": email.value,
                "senha": senha.value
            }
            alert ("DADOS CADASTRADOS:\nEmail: "+dados.nome+"\nSenha: "+dados.senha);
        } else {
            if (senha.value.length > 0) {
                alert ("A Senha está Errada");
            }
        }
    } else {
        if (email.value.length > 0) {
            alert ("Este email não está cadastrado");
        }
    }
}
