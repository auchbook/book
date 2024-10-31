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

function verificarProgressoEpilogo() {
    // Recupera os dados do usuário logado
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");

    if (usuarioLogadoStr) {
        const usuarioLogado = JSON.parse(usuarioLogadoStr);
        const progressoLeitura = usuarioLogado.progressoLeitura;
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('message');
        const hint = document.getElementById('hint');
        const hintButton = document.getElementById('hintButton');
        const passwordInput = document.getElementById('passwordInput');
        const unlockButton = document.getElementById('unlockButton');
        const passwordContainer = document.getElementById('passwordContainer'); // Certifique-se de que este elemento existe

        // Verifica se o epílogo foi lido
        if (progressoLeitura.capitulo8) {
            overlay.style.display = 'flex';
            message.innerText = "Para desbloquear a carta você precisa descobrir a senha.";
            hint.innerText = "Dica: 03-02-19   80-25-32";
            hintButton.style.display = 'block'; // Exibe o botão "Já sei a senha"

            hintButton.addEventListener("click", function() {
                message.innerText = "Digite a senha"; // Atualiza a mensagem
                hint.innerText = "";
                hintButton.style.display = 'none'; // Esconde o botão "Já sei a senha"
                passwordContainer.style.display = 'flex'; // Mostra o campo de senha
                passwordInput.focus(); // Foca no campo de senha
                unlockButton.style.display = 'block'; // Mostra o botão de desbloqueio
            });

            unlockButton.addEventListener("click", function() {
                const password = passwordInput.value;
                if (password === "IGoldenYou") {
                    overlay.style.display = 'none'; // Esconde o overlay
                    cartaImage.style.filter = 'none'; // Remove o blur
                    localStorage.setItem("cartaDesbloqueada", "true"); // Marca como desbloqueada
                } else {
                    message.innerText = "Senha incorreta. Tente novamente.";
                    passwordInput.value = ''; // Limpa o campo
                }
            });
        } else {
            overlay.style.display = 'flex';
            message.innerText = "Você só pode acessar essa página quando concluir a leitura do livro.";
            hintButton.style.display = 'none'; // Esconde o botão "Já sei a senha"
        }
    }
}

verificarProgressoEpilogo(); // Chama a função
