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
 