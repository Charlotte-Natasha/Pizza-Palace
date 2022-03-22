$(document).ready(function () {
  function Pizza(size, crust, toppings, price, quantity) {
    this.size = size;
    this.crust = crust;
    this.cheese = cheese;
    this.quantity = quantity;
    this.price = price;
  }
  Pizza.prototype.calculatePrice = function () {


    let buttons = $('.card button');
    buttons.click(function () {
      //let size=$(this).closest('.card').find('.prices').text();
      let crust = $(this).closest('.card').find('select[name=crust]').val();
      let cheese = $(this).closest('.card').find('select[name=cheese]').val();
      let price = $(this).closest('.card').find('select[name=size]').val();
    });
    //creating new object
    let Pizzeria = new Pizza(size, crust, cheese, price, quantity);
    console.log(Pizza)

    //generate price
    let table = $('table tbody');
    let tableData = `
<tr>
<td>${Pizzeria.size}</td>
<td>${Pizzeria.crust}</td>
<td>${Pizzeria.cheese}</td>
<td>${Pizzeria.price}</td>
<td>${Pizzeria.quantity}</td>

<td class= "capt">${newEntry.calculateTotalPrice()}.</td>
</tr>

`
    let tableBody = ('#table tbody');
    tableBody[0].innerHTML += tableData;


















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