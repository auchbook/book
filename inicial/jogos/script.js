// Função chamada quando a página é carregada
window.onload = function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Atualiza a imagem de perfil e o nome do usuário
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
function verificarProgressoEpilogo() {
    // Recupera os dados do usuário logado
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");

    if (usuarioLogadoStr) {
        const usuarioLogado = JSON.parse(usuarioLogadoStr);
        const progressoLeitura = usuarioLogado.progressoLeitura;
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('message');
        const hintButton = document.getElementById('hintButton');
        const cartaImage = document.getElementById('cartaImage'); // Certifique-se de que este elemento existe

        if (overlay && message && hintButton && cartaImage) { // Verifica se todos os elementos existem
            // Verifica se o epílogo foi lido
            if (progressoLeitura.capitulo8) {
                overlay.style.display = 'none'; // Esconde o overlay
                cartaImage.style.filter = 'none'; // Remove o blur
            } else {
                overlay.style.display = 'flex';
                message.innerText = "Você só pode acessar essa página quando concluir a leitura do livro.";
                hintButton.style.display = 'none'; // Esconde o botão "Já sei a senha"
            }
        }
    }
}

    } else {
        // Se não houver um usuário logado, redireciona para a página de login
        window.location.href = '../login/login.html';
    }

    // Adiciona o evento de clique ao botão de início do quiz
    document.getElementById('start-quiz-button').onclick = startQuiz;
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

const questions = [
    {
        question: "Qual a data do Halloween?",
        answers: ["31 de outubro", "1 de novembro", "30 de outubro", "29 de outubro"],
        correct: 0
    },
    {
        question: "Qual a cor tradicional do Halloween?",
        answers: ["Verde", "Amarelo", "Laranja", "Azul"],
        correct: 2
    },
    {
        question: "Qual símbolo é associado ao Halloween?",
        answers: ["Coração", "Abóbora", "Estrela", "Sol"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('welcome-text').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'flex';
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const nextButton = document.getElementById("next-button");

    questionElement.textContent = questions[currentQuestionIndex].question;
    answersElement.innerHTML = '';
    questions[currentQuestionIndex].answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });

    nextButton.style.display = "none"; // Esconde o botão "Próxima Pergunta"
}

function selectAnswer(index) {
    if (index === questions[currentQuestionIndex].correct) {
        score++;
    }
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block"; // Mostra o botão "Próxima Pergunta"
}

document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
};

function showScore() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
}


