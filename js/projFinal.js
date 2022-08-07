$(document).ready(function () {

  $("#ver-mais").click(function () {
    $("#mostrar-mais").addClass("vitrine-mais-menos");
    $("#ver-mais").hide();
    $("#ver-menos").show();
  });
  $("#ver-menos").click(function () {
    $("#mostrar-mais").removeClass("vitrine-mais-menos");
    $("#ver-mais").show();
    $("#ver-menos").hide();
  });
  $("#botao-menu").click(function () {
    $("nav").toggleClass("menu-hamburger");
    $("#botao-menu").toggleClass("fechar-menu");
    $(".abrir-menu").hide();
  });
  $("#abrir-menu").click(function() {
    $("#abrir-menu").toggleClass("abrir");
    $(".abrir-menu").toggle();
});
});
// Quando scroll rolar, começar minha função
window.onscroll = function () { myFunction() };

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


};
