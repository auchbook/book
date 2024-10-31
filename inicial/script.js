// Carrega os dados do usuário logado na página inicial
window.onload = function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Atualiza a imagem de perfil e o nome do usuário
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
        document.getElementById('welcome-text').textContent = `Seja bem vinda, ${usuarioLogado.nome}`;
    } else {
        // Se não houver um usuário logado, redireciona para a página de login
        window.location.href = '../login/login.html';
    }

};

// Alterna visibilidade do menu de perfil
document.getElementById('profile-image').onclick = function() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
};

// Alterna visibilidade do menu principal
function toggleMenu() {
    const dropdown = document.getElementById('mainMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Código para o carrossel de imagens
let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 10000); // Muda a imagem a cada 7 segundos
