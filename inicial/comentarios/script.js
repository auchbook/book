// Carrega os dados do usuário logado na página inicial
window.onload = function() {
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Atualiza a imagem de perfil e o nome do usuário
        document.getElementById('profile-image').src = usuarioLogado.imagemPerfil;
	verificarProgressoCapitulos();
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


function verificarProgressoCapitulos() { 
    const usuarioLogadoStr = localStorage.getItem("usuarioLogado");
    const usuarioLogado = JSON.parse(usuarioLogadoStr);
    console.log(usuarioLogado);

    if (usuarioLogado && usuarioLogado.progressoLeitura) {
        const progressoLeitura = usuarioLogado.progressoLeitura;
        console.log(progressoLeitura);

        let comentario = document.getElementById(`comentario1`);
        if (progressoLeitura[`capitulo1`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o prólogo:<br><br>Escrever o prólogo foi ter a certeza de que eu iria começar essa jornada. E, por mais que tenha sido algo pequeno, que mal deu uma página, eu demorei muuuuito para escrever, porque eu não queria entregar logo sobre o que seria o livro, então eu me esforcei ao máximo para fazer mistério. Bom, se você está lendo isso, então eu te desejo boa sorte e uma ótima leitura.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }

        comentario = document.getElementById(`comentario2`);
        if (progressoLeitura[`capitulo2`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo um:<br><br>"ai meu deus, como assim universo paralelo? será que ela endoidou?"<br>Olha, é bem provável; não sei se você entendeu a referência que eu tive, mas foi do filme "Dezesseis facadas", só que ao invés de voltar no tempo, eu decidi manipular o multiverso hahaha. Eu tenho certeza que você não esperava por essa. Escrever esse capítulo foi muito emocionante, mas não no sentindo de tristeza ou algo assim, mas sim que eu estava tão ansiosa e medrosa ao mesmo tempo, pensando se aquilo fazia algum sentindo ou não. Enfim, espero que tenha gostado.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }

        comentario = document.getElementById(`comentario3`);
        if (progressoLeitura[`capitulo3`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo dois:<br><br>Tá, tenho tantas coisas a falar sobre esse capítulo. Primeiro, você tentou tocar o nariz e a orelha ao mesmo tempo? Se fez isso: eu não acredito que você realmente fez isso; Se não fez: que vergonha que eu passei então. Segundo, será que você notou a referência de BE? Da Gyoza dançando para a Manaow. Terceiro: Pois é, eu acredito que você imaginou que algo assim fosse acontecer, mas você chegou a duvidar em algum momento que não aconteceria nenhuma morte? Quarto: O que será que aconteceu com o Jom? E, por último, mas não menos importante: Quinto, escrever esse capítulo foi uma montanha russa de sentimentos, desde a confusão e incerteza no começo do capítulo até esse último momento de tensão. Me diz, está ansiosa pra continuar?`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
        comentario = document.getElementById(`comentario4`);
        if (progressoLeitura[`capitulo4`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo três:<br><br>MEU DEUS, MAIS DUAS MORTES? COMO ASSIM? E por isso? Você esperava? Tentei sem gráfica sem ser nojenta ao descrever as cenas. Você gostou do meu assassino super no tema de Halloween? Eu escrevi esse com uma pedra de gelo no lugar do coração, mas não por eu estar sendo fria, e sim pelo nervosismo que percorria minhas veias enquanto eu tirava as cenas tenebrosas de dentro da minha cabeça e tentava colocá-las no papel.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
        comentario = document.getElementById(`comentario5`);
        if (progressoLeitura[`capitulo5`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo quatro:<br><br>Nossa, esse daí eu escrevi com uma dor muito forte no peito, a cena da morte da Prang foi tão dolorida, principalmente pela reação da Noon. Não me odeia, por favor. Doeu mais em mim do que em você, pode acreditar. Mas e aí? Você suspeitava do Bonus? Ficou chocada com a morte dele? E agora, o que será que irá acontecer com esse grupo azarado?`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
        comentario = document.getElementById(`comentario6`);
        if (progressoLeitura[`capitulo6`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo cinco:<br><br>Gente, esse era o melhor momento para essas duas? Sinceramente, estou um pouco envergonhada pelo o que eu escrevi, então vou pular essa parte e te fazer duas perguntas: 1 - que dor o finalzinho desse capítulo, né? Quando a gente cai na real de que aquilo ali não vai durar. 2 - FOI A MANAOW!!! E aí, você sabia disso? Desconfiou em algum momento? Ficou chocada? Ai, eu vou ficar muito triste se você já sabia antes mesmo de revelarem.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
        comentario = document.getElementById(`comentario7`);
        if (progressoLeitura[`capitulo7`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o capítulo seis:<br><br>AAAAAAH ENGANEI A BOBAAAAA (isso vai ser tão vergonhoso se você já tinha a Belle como suspeita, mas releva). ALÉM DE SEREM DUAS FUCKING ASSASSINAS, A SEGUNDA ERA A BELLE. Gente, eu tava tão ansiosa para fazer essas revelações, FINALMENTE. Se foi surpreendente para você, signfica que eu sou incrível e vou escrever mais coisas nesse gênero hahaha.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
        comentario = document.getElementById(`comentario8`);
        if (progressoLeitura[`capitulo8`] === true) {
            comentario.innerHTML = `Comentários da autora sobre o epílogo e o livro:<br><br>Bom, chegamos no final do livro. Infelizmente elas esqueceram tudo, espero que você não tenha ficada chateada com isso. Mas e aí? Superou BE?<br><br>Escrever esse livro foi incrível, planejar cada surpresinha, fazer cada detalhe, quebrar a cabeça tentando criar o site. Tudo isso foi incrível e eu sei que valeu a pena. Obviamente escrevi isso antes de te dar o livro, mas eu tenho certeza que você amou ler e amou essa experiência tanto quanto eu. Você é incrível, e nada disso seria possível sem você. Você me deu a oportunidade de alcançar o que eu sempre sonhei. Sou grata por isso.`; 
            comentario.style.backgroundColor = "#DF6826";
        } else {
            comentario.innerHTML = "Comentário bloqueado.";
            comentario.style.backgroundColor = "black";
        }
    } else {
        console.log("Usuário não encontrado ou progresso de leitura não disponível.");
    }
}

