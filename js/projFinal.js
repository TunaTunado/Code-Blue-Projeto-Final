// Quando scroll rolar, começar minha função
window.onscroll = function() {myFunction()};

//Variavel p header
var header = document.getElementById("meuHeader");

// Get the offset position of the navbar
var topofixo = header.offsetTop;

// fazer o topo ficar fixo
function myFunction() {
  if (window.pageYOffset > topofixo) {
    header.classList.add("topo-fixo");
  } else {
    header.classList.remove("topo-fixo");
  }

  // Esconder o menu mobile
  $(function () {
    $('#menuescondido').removeClass('hidden');
});

}
