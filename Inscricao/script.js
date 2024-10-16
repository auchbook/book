const profileImages = [
    'perfil1.png', 'perfil2.png', 'perfil3.png', 'perfil4.png', 'perfil5.png',
    'perfil6.png', 'perfil7.png', 'perfil8.png', 'perfil9.png', 'perfil10.png'
];

let currentImageIndex = 0;
const profileImageElement = document.getElementById('profile-image');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

// Navegação entre as imagens de perfil
prevArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + profileImages.length) % profileImages.length;
    profileImageElement.src = profileImages[currentImageIndex];
});

nextArrow.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % profileImages.length;
    profileImageElement.src = profileImages[currentImageIndex];
});

// Manipulação do formulário de inscrição
const form = document.getElementById('registration-form');
const emailError = document.getElementById('email-error');
const senhaError = document.getElementById('senha-error');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirm-senha').value;

    let emailCadastrado = false;
    let senhasIguais = senha === confirmSenha;

    // Verificação de e-mail existente (simulação de banco de dados)
    let usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios')) || [];
    usuariosCadastrados.forEach(user => {
        if (user.email === email) {
            emailCadastrado = true;
        }
    });

    if (emailCadastrado) {
        emailError.textContent = 'E-mail já cadastrado';
    } else {
        emailError.textContent = '';
    }

    if (!senhasIguais) {
        senhaError.textContent = 'As senhas não coincidem';
    } else {
        senhaError.textContent = '';
    }

    if (!emailCadastrado && senhasIguais) {
        const novoUsuario = {
            nome: nome,
            email: email,
            senha: senha,
            imagemPerfil: profileImages[currentImageIndex] // Armazena a imagem de perfil selecionada
        };

        usuariosCadastrados.push(novoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));

        alert('Usuário cadastrado com sucesso!'); // Mensagem de sucesso
        window.location.href = '../Login/login.html'; // Redireciona para a página de login
    }
});
