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
  $("#abrir-menu").click(function () {
    $("#abrir-menu").toggleClass("abrir");
    $(".abrir-menu").toggle();
  });
});