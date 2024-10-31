window.onload = function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
        loadProgress(usuarioLogado);
    } else {
        window.location.href = '../login/login.html';
    }
};

function loadProgress(usuarioLogado) {
    const progresso = usuarioLogado.progressoLeitura || {};
    const checkboxes = document.querySelectorAll('.checkbox');

    console.log('Carregando progresso:', progresso);

    checkboxes.forEach((checkbox, index) => {
        const isChecked = progresso[`capitulo${index + 1}`] || false;
        checkbox.checked = isChecked;
        checkbox.parentElement.classList.toggle('checked', isChecked);
    });
}

function toggleCheck(element) {
    const checkbox = element.querySelector('.checkbox');
    console.log('Checkbox antes da mudança:', checkbox.checked);
    checkbox.checked = !checkbox.checked;
    console.log('Checkbox depois da mudança:', checkbox.checked);
    
    element.classList.toggle('checked', checkbox.checked);
    saveProgress(); // Chama a função para salvar o progresso após a mudança de estado
}

function saveProgress() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) return;

    usuarioLogado.progressoLeitura = {};
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox, index) => {
        usuarioLogado.progressoLeitura[`capitulo${index + 1}`] = checkbox.checked;
    });

    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

    console.log('Progresso salvo:', usuarioLogado.progressoLeitura);
}


// Função para alternar o estado de um capítulo e salvar o progresso
function toggleCheck(element) {
    const checkbox = element.querySelector('.checkbox');
    const unlockMessage = element.querySelector('.unlock-message');

    checkbox.checked = !checkbox.checked; // Alterna o estado do checkbox
    element.classList.toggle('checked', checkbox.checked); // Adiciona ou remove a classe checked

    if (checkbox.checked) {
        // Exibir mensagem correspondente com base no checkbox
        let message = '';
        switch (element.querySelector('span').innerText) {
            case 'Prólogo - A Última Chama':
                message = 'Parabéns, você finalizou a leitura do prólogo e desbloqueou um item:<br><br>- Comentários da autora sobre o prólogo';
                break;
            case 'Capítulo Um - A Última Festa':
                message = 'Parabéns, você finalizou a leitura do capítulo um e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o capítulo um<br>- Brinde 1';
                break;
            case 'Capítulo Dois - A Última Dança':
                message = 'Parabéns, você finalizou a leitura do capítulo dois e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o capítulo dois<br>- Brinde 2';
                break;
            case 'Capítulo Três - A Última Ligação':
                message = 'Parabéns, você finalizou a leitura do capítulo três e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o capítulo três<br>- Brinde 3';
                break;
            case 'Capítulo Quatro - A Última Esperança':
                message = 'Parabéns, você finalizou a leitura do capítulo quatro e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o capítulo quatro<br>- Brinde 4';
                break;
            case 'Capítulo Cinco - A Primeira Última Vez':
                message = 'Parabéns, você finalizou a leitura do capítulo cinco e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o capítulo cinco<br>- Brinde 5';
                break;
            case 'Capítulo Seis - A Última Morte':
                message = 'Parabéns, você finalizou a leitura do capítulo seis e desbloqueou um item:<br><br>- Comentários da autora sobre o capítulo seis';
                break;
            case 'Epílogo - A Última Foto':
                message = 'Parabéns, você finalizou a leitura do livro e desbloqueou alguns itens:<br><br>- Comentários da autora sobre o epílogo<br>- Comentários da autora sobre o livro<br>- Carta de amor';
                break;
        }
        unlockMessage.innerHTML = message; // Atualiza a mensagem
        unlockMessage.style.display = 'block'; // Exibe a mensagem
    } else {
        unlockMessage.innerHTML = ''; // Limpa a mensagem
        unlockMessage.style.display = 'none'; // Esconde a mensagem
    }

function toggleCheck(element) {
    const checkbox = element.querySelector('.checkbox');
    const unlockMessage = element.querySelector('.unlock-message');

    checkbox.checked = !checkbox.checked;
    element.classList.toggle('checked', checkbox.checked);

    // Salvar o estado da checkbox do Epílogo
    if (checkbox.id === 'epilogo-checkbox') {
        localStorage.setItem('epilogoLido', checkbox.checked);
    }

    if (checkbox.checked) {
        let message = '';
        // Exibir mensagem de acordo com o capítulo lido
        // (continua como antes)
    }

    saveProgress(); // Chama a função para salvar o progresso após a mudança de estado
}


    saveProgress(); // Chama a função para salvar o progresso após a mudança de estado
}

// Salva o progresso de leitura no localStorage para o usuário específico
function saveProgress() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (!usuarioLogado) return;

    // Atualiza o progresso no objeto do usuário
    usuarioLogado.progressoLeitura = {};
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox, index) => {
        usuarioLogado.progressoLeitura[`capitulo${index + 1}`] = checkbox.checked;
    });

    // Salva o objeto atualizado no localStorage
    localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

    // Opcional: Atualiza a lista completa de usuários com o progresso atualizado
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const index = usuarios.findIndex(u => u.id === usuarioLogado.id);
    if (index !== -1) {
        usuarios[index] = usuarioLogado;
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }
}

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

document.addEventListener("DOMContentLoaded", function () {
    const epilogoCheckbox = document.getElementById("epilogo-checkbox");

    // Carrega o estado inicial da checkbox a partir do localStorage
    const epilogoLido = localStorage.getItem("epilogoLido") === "true";
    epilogoCheckbox.checked = epilogoLido;

    // Atualiza o localStorage quando a checkbox é marcada ou desmarcada
    epilogoCheckbox.addEventListener("change", function () {
        localStorage.setItem("epilogoLido", epilogoCheckbox.checked);
        console.log(`Epílogo lido: ${epilogoCheckbox.checked}`);
    });
});