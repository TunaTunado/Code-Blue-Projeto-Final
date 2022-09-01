$(document).ready(function () {
    $("#btn").click(function () {
        $("nav").toggleClass("dropdown");
        $("#btn").toggleClass("btn-close");
        $(".expand").hide();
    });
    $("#drop").click(function () {
        $("#drop").toggleClass("open");
        $(".expand").toggle();
    });
    $("#see-more").click(function () {
        $("#show-more").addClass("store-mobile");
        $("#see-more").hide();
        $("#see-less").show();
    });
    $("#see-less").click(function () {
        $("#show-more").removeClass("store-mobile");
        $("#see-more").show();
        $("#see-less").hide();
    });
    $("#add-to-cart").click(function () {
        $("#add-to-cart").toggleClass("added");
    });

    const minus = document.querySelector('.menos')
    const plus = document.querySelector('.mais');

    plus.addEventListener('click', () => document.getElementById("quantidade").textContent++);

    minus.addEventListener('click', () => document.getElementById("quantidade").textContent--);

    $(".mais").click(function(){
        if($('#quantidade').val() <="1"){
          var $n = $("#valor1");
          $n.val(Number($n.val())+9.99);
          var value = $n.val();
          $("#valor").val('$ '+value);
         }
      }); 
  
      $(".menos").click(function(){
        if($('#quantidade').val() <= '1'){
          var $n = $("#valor1");
          $n.val(Number($n.val())-9.99);
          var value = $n.val();
          $("#valor").val('$ '+value);
        }
      });
});