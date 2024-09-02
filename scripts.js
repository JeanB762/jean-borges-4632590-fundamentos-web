// Abre o menu mobile ao clicar no botão de menu
document.getElementById('menu-toggle').addEventListener('click', function () {
  var menu = document.getElementById('menu-list');
  menu.classList.toggle('show');
});

// Adiciona o evento de clique a todos os links do menu
// para que quando o usuário clicar em um deles, o menu se feche automaticamente
var menuLinks = document.querySelectorAll('#menu-list a');
menuLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var menu = document.getElementById('menu-list');
    menu.classList.remove('show');
  });
});
