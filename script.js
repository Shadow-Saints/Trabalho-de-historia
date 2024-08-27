document.addEventListener('DOMContentLoaded', function() {
     const header = document.getElementById('header');
     let hideTimeout;
 
     function hideHeader() {
         header.style.top = '-200px'; // Ajuste o valor para o tamanho do seu cabeçalho
     }
 
     function showHeader() {
         header.style.top = '0';
         clearTimeout(hideTimeout); // Limpa o timeout para que o cabeçalho não se esconda imediatamente
     }
 
     // Verifica a posição do mouse
     document.addEventListener('mousemove', function(event) {
         if (event.clientY <= 50) { // Ajuste o valor para a altura que você deseja para exibir o cabeçalho
             showHeader();
         } else {
             clearTimeout(hideTimeout); // Limpa o timeout anterior se o mouse se mover para baixo
             hideTimeout = setTimeout(hideHeader, 1000); // Esconde o cabeçalho após 5 segundos
         }
     });
 });

 document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio('AUDIO_CHINAMUITOLOCA.mp3');
    audio.volume = 0.5;
    audio.loop = true;

    // Função para tentar iniciar a reprodução do áudio
    function playAudio() {
        audio.play().catch(function(error) {
            console.log('Erro ao tentar tocar a música:', error);
        });
    }

    // Tenta tocar o áudio automaticamente
    playAudio();

    // Adiciona um manipulador de eventos para garantir que o áudio seja tocado após interação do usuário, se necessário
    document.addEventListener('click', playAudio);
});