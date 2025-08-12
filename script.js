// Acessa o botão e o parágrafo pelo ID
const meuBotao = document.getElementById('meuBotao');
const mensagem = document.getElementById('mensagem');

// Adiciona um "ouvinte de evento" (event listener) de clique ao botão
meuBotao.addEventListener('click', function() {
    // Quando o botão é clicado, muda o conteúdo do parágrafo
    mensagem.textContent = 'O texto foi alterado com sucesso pelo JavaScript!';
});
