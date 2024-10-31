// Carrega os dados do usuário logado na página inicial
window.onload = function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Atualiza a imagem de perfil e o nome do usuário
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
    } else {
        // Se não houver um usuário logado, redireciona para a página de login
        window.location.href = '../login/login.html';
    }

};

// Funções para alternar a visibilidade dos menus
function toggleMainMenu() {
    const menu = document.getElementById('mainMenu');
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

function toggleProfileMenu() {
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
}

// Fecha o menu de perfil se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('#profile-image') && !event.target.matches('.menu-icon')) {
        const dropdowns = document.getElementsByClassName("menu-dropdown");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = 'none';
        }
    }
}
