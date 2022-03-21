$(document).ready(function(){
function Pizza (size, crust, toppings, price, quantity){
  this.size=size;
  this.crust=crust;
  this.toppings=toppings;
  this.price=price;
  this.quantity=quantity;
}
Pizza.prototype.calculatePrice=function(){

}
let buttons=$('')





















/*
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
  <div class="prices">
      <label for="size-select">Pizza Sizes....</label>
      <select name="size" id="selectSize">
        <option value="sizes">Pizza Sizes...</option>
        <option value="small">Small... <span>600Ksh</span></option>
        <option value="medium">Medium... <span>1000Ksh</span></option>
        <option value="large">Large... <span>1200Ksh</span></option>
      </select>
    </div>