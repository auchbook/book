const textContainer = document.getElementById('text-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const buttons = document.getElementById('button-container');
const overlay = document.getElementById('overlay');
const startButton = document.getElementById('start-button');
const video = document.getElementById('background-video');

// Carregar o som
const audio = new Audio('Som1.mp3'); // Nome do arquivo de som

// Função para escrever o texto letra por letra
function typeText(text, callback) {
    let index = 0;
    textContainer.innerHTML = '';
    const typingInterval = setInterval(() => {
        if (index < text.length) {
            textContainer.innerHTML += text[index++];
        } else {
            clearInterval(typingInterval);
            setTimeout(callback, 2000); // 2 segundos após o texto terminar
        }
    }, 100); // Velocidade da digitação
}

// Função para iniciar o vídeo e som após o clique
startButton.addEventListener('click', () => {
    overlay.style.display = 'none'; // Esconde o overlay
    video.style.display = 'block'; // Mostra o vídeo
    audio.play(); // Inicia o som

    // Iniciar o texto inicial
    typeText("Então você decidiu prosseguir e se aprofundar nesse mistério.", () => {
        typeText("Mas devo te alertar que você está prestes a entrar na jornada mais emocionante da sua vida.", () => {
            typeText("Deseja continuar?", () => {
                buttons.classList.remove('hidden'); // Mostrar os botões após o texto
            });
        });
    });
});

// Lidar com o clique no botão "Não"
noButton.addEventListener('click', () => {
    video.style.opacity = '0'; // Fazer o vídeo desaparecer
    buttons.classList.add('hidden'); // Esconder os botões
    textContainer.innerHTML = ''; // Esvaziar o texto

    setTimeout(() => {
        // Após 2 segundos, exibe o texto
        textContainer.innerHTML = 'Entendemos seu receio, essa jornada não é para covardes.';
        textContainer.style.fontSize = '3em'; // Ajuste para o tamanho maior
        textContainer.style.position = 'absolute'; // Centraliza verticalmente
        textContainer.style.top = '50%'; 
        textContainer.style.left = '50%';
        textContainer.style.transform = 'translate(-50%, -50%)';

        setTimeout(() => {
            textContainer.innerHTML = ''; // Esvazia o texto após alguns segundos
            document.body.style.backgroundColor = 'black'; // Deixa a tela preta
        }, 4000); // 4 segundos de duração do texto na tela
    }, 2000); // 2 segundos de espera antes de mostrar o texto
});

// Lidar com o clique no botão "Sim"
yesButton.addEventListener('click', () => {
    buttons.classList.add('hidden'); // Esconde os botões
    textContainer.innerHTML = '';

    const eraseText = () => {
        if (textContainer.innerHTML.length > 0) {
            textContainer.innerHTML = textContainer.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            // Esconder vídeo lentamente
            video.style.transition = 'opacity 1s ease';
            video.style.opacity = '0';

            setTimeout(() => {
                // Tela preta antes de mostrar "Boa escolha!"
                document.body.style.backgroundColor = 'black';
                textContainer.innerHTML = 'Boa escolha!';
                textContainer.style.fontSize = '3em'; // Aumentar o tamanho da fonte
                textContainer.style.position = 'absolute'; 
                textContainer.style.top = '50%'; 
                textContainer.style.left = '50%';
                textContainer.style.transform = 'translate(-50%, -50%)';

                setTimeout(() => {
                    textContainer.innerHTML = '';
                    // Piscar entre laranja e preto
                    let count = 0;
                    const blink = setInterval(() => {
                        document.body.style.backgroundColor = count % 2 === 0 ? '#DF6826' : 'black';
                        count++;
                        if (count >= 10) { // Piscar durante 5 segundos
                            clearInterval(blink);
                            window.location.href = 'Inscricao/inscricao.html'; // Redirecionar para a página de inscrição
                        }
                    }, 250); // Pisca mais rápido, 4 vezes por segundo
                }, 3000); // Esperar 3 segundos até a tela começar a piscar
            }, 1000); // Esperar 1 segundo até o vídeo sumir
        }
    };
    eraseText();
});
