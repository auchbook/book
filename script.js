const textContainer = document.getElementById('text-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const buttons = document.getElementById('button-container');

// Função para escrever texto letra por letra
function typeText(text, callback) {
    let index = 0;
    textContainer.innerHTML = '';
    const typingInterval = setInterval(() => {
        if (index < text.length) {if (índice 
            textContainer.innerHTML += text[index++];
        } else {
            clearInterval(typingInterval);
            setTimeout(callback, 2000); // Esperar 2 segundos após terminar de escrever
        }
    }, 100); // Velocidade da digitação
}

// Iniciar o texto inicial
typeText("Então você decidiu prosseguir e se aprofundar nesse mistério.", () => {
    typeText("Mas devo te alertar que você está prestes a entrar na jornada mais emocionante da sua vida.", () => {
        typeText("Deseja continuar?", () => {
            buttons.classList.remove('hidden'); // Mostrar botões após o texto
        });
    });
});

// Lidar com o botão "Não"
noButton.addEventListener('click', () => {
    const video = document.getElementById('background-video');
    video.style.opacity = '0'; // Fazer vídeo desaparecer
    buttons.classList.add('hidden'); // Esconder botões
    setTimeout(() => {
        textContainer.innerHTML = 'Entendemos seu receio, essa jornada não é para covardes.';
        textContainer.style.fontSize = '2em'; // Ajustar tamanho da fonte
        textContainer.style.position = 'absolute'; // Para centralizar a mensagem
        textContainer.style.top = '50%'; // Centralizar verticalmente
        textContainer.style.left = '50%'; // Centralizar horizontalmente
        textContainer.style.transform = 'translate(-50%, -50%)'; // Ajuste para centralização
        textContainer.style.zIndex = '1'; // Ficar acima do vídeo
        setTimeout(() => {
            textContainer.innerHTML = '';
            document.body.style.backgroundColor = 'black'; // Mudar fundo para preto
        }, 3000); // Mensagem fica por 3 segundos
    }, 1000); // Espera 1 segundo até o vídeo sumir
});

// Lidar com o botão "Sim"
yesButton.addEventListener('click', () => {
    buttons.classList.add('hidden'); // Esconder botões
    textContainer.innerHTML = '';
    
    const eraseText = () => {
        if (textContainer.innerHTML.length > 0) {
            textContainer.innerHTML = textContainer.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            // Esconder vídeo lentamente
            const video = document.getElementById('background-video');
            video.style.transition = 'opacity 1s ease';
            video.style.opacity = '0';

            setTimeout(() => {
                // Tela preta antes de mostrar "Boa escolha!"
                document.body.style.backgroundColor = 'black'; // Muda o fundo para preto
                textContainer.innerHTML = 'Boa escolha!';
                textContainer.style.fontSize = '3em'; // Aumentar o tamanho da fonte da mensagem
                textContainer.style.position = 'absolute'; // Para centralizar a mensagem
                textContainer.style.top = '50%'; // Centralizar verticalmente
                textContainer.style.left = '50%'; // Centralizar horizontalmente
                textContainer.style.transform = 'translate(-50%, -50%)'; // Ajuste para centralização
                textContainer.style.zIndex = '1'; // Ficar acima do vídeo
                setTimeout(() => {
                    textContainer.innerHTML = '';
                    // Piscar entre laranja e preto
                    let count = 0;
                    const blink = setInterval(() => {
                        document.body.style.backgroundColor = count % 2 === 0 ? '#DF6826' : 'black';
                        count++;
                        if (count === 6) { // 3 segundos de piscadas
                            clearInterval(blink);
                            window.location.href = 'inscricao.html'; // Redirecionar para a página de inscrição
                        }
                    }, 500);
                }, 3000); // Esperar 3 segundos até a tela piscar
            }, 1000); // Esperar 1 segundo até o vídeo sumir
        }
    };
    eraseText();
});
