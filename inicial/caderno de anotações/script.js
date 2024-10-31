// Carrega os dados do usuário logado na página inicial
document.addEventListener('DOMContentLoaded', function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Atualiza a imagem de perfil e o nome do usuário
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
    } else {
        // Se não houver um usuário logado, redireciona para a página de login
        window.location.href = '../login/login.html';
    }

// Função para salvar as informações no localStorage
function saveData() {
    // Obter os dados das entradas de texto da seção de personagens
    const characters = [];
    const characterRows = document.querySelectorAll('.character-row');

    characterRows.forEach(row => {
        const nameInput = row.querySelector('input[type="text"]');
        const roleSelect = row.querySelector('select');
        if (nameInput.value && roleSelect.value) {
            characters.push({ name: nameInput.value, role: roleSelect.value });
        }
    });

    // Obter os dados das seções de pistas e observações
    const pistas = document.querySelector('.pistas-textarea').value;
    const observacoes = document.querySelectorAll('.large-textarea')[1].value;

    // Armazenar os dados no localStorage
    const userData = {
        characters: characters,
        pistas: pistas,
        observacoes: observacoes
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Dados salvos com sucesso!');
}

// Função para carregar as informações do localStorage
function loadData() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    
    if (userData) {
        // Carregar os dados da seção de personagens
        userData.characters.forEach((character, index) => {
            const row = document.querySelectorAll('.character-row')[index];
            if (row) {
                const nameInput = row.querySelector('input[type="text"]');
                const roleSelect = row.querySelector('select');

                nameInput.value = character.name;
                roleSelect.value = character.role;
            }
        });

        // Carregar os dados das seções de pistas e observações
        document.querySelector('.pistas-textarea').value = userData.pistas;
        document.querySelectorAll('.large-textarea')[1].value = userData.observacoes;
    } else {
        alert('Nenhum dado encontrado para carregar.');
    }
}

// Adiciona os eventos de clique aos botões
document.getElementById('save-button').addEventListener('click', saveData);
document.getElementById('load-button').addEventListener('click', loadData);

function salvarPersonagens() {
    const personagens = [];
    const personagemElements = document.querySelectorAll('.personagem');

    personagemElements.forEach(element => {
        const nome = element.querySelector('.nome').value;
        const classificacao = element.querySelector('.classificacao').value;

        if (nome) {
            personagens.push({ nome, classificacao });
        }
    });

    localStorage.setItem('personagens', JSON.stringify(personagens));
    alert('Personagens salvos com sucesso!');
}

function carregarPersonagens() {
    const personagens = JSON.parse(localStorage.getItem('personagens')) || [];
    const container = document.getElementById('personagens-container');
    container.innerHTML = ''; // Limpa o container antes de carregar

    personagens.forEach(personagem => {
        const personagemDiv = document.createElement('div');
        personagemDiv.classList.add('personagem');
        personagemDiv.innerHTML = `
            <input type="text" class="nome" placeholder="Nome do Personagem" value="${personagem.nome}" />
            <select class="classificacao">
                <option value="suspeito" ${personagem.classificacao === 'suspeito' ? 'selected' : ''}>Suspeito</option>
                <option value="vítima" ${personagem.classificacao === 'vítima' ? 'selected' : ''}>Vítima</option>
                <option value="desconfiando" ${personagem.classificacao === 'desconfiando' ? 'selected' : ''}>Desconfiando</option>
            </select>
            <button onclick="removerPersonagem(this)">Remover</button>
        `;
        container.appendChild(personagemDiv);
    });

    if (personagens.length > 0) {
        alert('Personagens carregados com sucesso!');
    } else {
        alert('Nenhum personagem encontrado para carregar.');
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
});
