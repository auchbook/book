const textContainer = document.getElementById('text-container');
const buttons = document.getElementById('buttons');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');

// Função para mostrar texto letra por letra
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 50);
    } else if (typeof fnCallback === 'function') {
        setTimeout(fnCallback, 2000); // Espera 2 segundos antes de continuar
    }
}

// Exibir as frases
function startIntro() {
    const texts = [
        "Então você decidiu prosseguir e se aprofundar nesse mistério.",
        "Mas devo te alertar que você está prestes a entrar na jornada mais emocionante da sua vida.",
        "Deseja continuar?"
    ];
    
    let i = 0;

    function nextText() {
        if (i < texts.length) {
            textContainer.innerHTML = '';
            typeWriter(texts[i], 0, nextText);
            i++;
        } else {
            buttons.classList.remove('hidden');
        }
    }

    nextText();
}

// Eventos dos botões
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

noButton.addEventListener('click', () => {
    const video = document.getElementById('background-video');
    video.style.transition = 'opacity 1s ease';
    video.style.opacity = '0'; // Fazer o vídeo desaparecer
    buttons.classList.add('hidden'); // Esconder botões

    setTimeout(() => {
        textContainer.innerHTML = ''; // Limpar textotextContainer.innerHTML = ''; // Limpar texto
        document.body.style.backgroundColor = 'black'; // Muda o fundo para preto
        typeWriter("Entendemos seu receio, essa jornada não é para covardes.", 0, () => {
            textContainer.innerHTML = ''; // Apagar o texto
            setTimeout(() => {
                document.body.style.backgroundColor = 'black'; // Manter fundo preto
            }, 1000); // Esperar 1 segundo para a tela ficar preta
        });
    }, 1000); // Esperar 1 segundo até o vídeo desaparecer
});

// Iniciar a animação
setTimeout(startIntro, 2000);
