$(document).ready(function(){
    $('.card').hover(function(){
        $('.overlay', this).show();
        $('.overlay-p', this).show();
    })

})



//adding items to cart

$(".card").hover(
    function () {
      $(".overlay", this).show();
      $(".overlay-p", this).show();
    },
    function () {
      $(".overlay", this).hide();
      $(".overlay-p", this).hide();
    }
  );