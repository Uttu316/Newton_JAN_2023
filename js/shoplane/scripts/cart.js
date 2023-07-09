import { Cart } from "./config.js";

$(() => {
  getCartDetails();
});

function getCartDetails() {
  const cartObj = new Cart();
  cartObj.updateCartIcon();
  if (cartObj.cart.length) {
    $("#cart-summary").show();
    calculateCartSummary();
    cartObj.cart.forEach((cartItem) => {
      const card = createCartCard(cartItem);
      $("#cart-products-table").append(card);
    });

    $('#cart-place-order').on('click',function(e){
        alert('Your Oder is Placed 😇')
        cartObj.clear()
        location.reload()
    })
  } else {
    $("#cart-summary").hide();
  }
}

function createCartCard(cartItem) {
  const { name, preview, count, price } = cartItem;

  return $(`
  <div class="cart-item">
  <div class="cart-item-photo">

  <img  src="${preview}" alt="${name}" />
    </div>
    <div class="cart-item-details">

  <p class="cart-item-title">${name}</p>

  <p  class="cart-item-qantity">Qty ${count}</p>

  <p class="cart-item-price">Rs: ${price}</p>
  <div class="cart-item-actions">
  <button class="cart-item-remove">
    Remove
  </button>
  <div>
  </div>
 
</div>

`);
}

function calculateCartSummary() {
  const cartObj = new Cart();

  const totalItems = cartObj.cart.length;
  const totalPrice = cartObj.cart.reduce((a, i) => a + i.price * i.count, 0);
  const discountPrice = totalPrice * 0.1;
  const total = totalPrice- discountPrice
  $("#cart-summary-items").html(totalItems);
  $("#cart-summary-price").html("Rs. " + parseInt(totalPrice));
  $("#cart-summary-discount").html("Rs. " + parseInt(discountPrice));
  $("#cart-summary-total").html("Rs. " + parseInt(total));

}
