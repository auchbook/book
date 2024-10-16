// Formulário de login
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Previne o envio do formulário

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Obtendo os usuários cadastrados do localStorage
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Verificando se o usuário existe
    const usuarioEncontrado = usuariosCadastrados.find(user => user.email === email);
    if (usuarioEncontrado && usuarioEncontrado.senha === senha) {
        localStorage.setItem('emailLogado', email); // Armazena o e-mail do usuário logado
        window.location.href = '../inicial/inicial.html'; // Redireciona para a página inicial
    } else {
        alert('E-mail ou senha incorretos!'); // Mensagem de erro
    }
});
