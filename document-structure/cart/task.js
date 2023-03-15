let addButtons = Array.from(document.getElementsByClassName("product__add"));
let decreaseBtns = Array.from(document.getElementsByClassName("product__quantity-control_dec"));
let increaseBtns = Array.from(document.getElementsByClassName("product__quantity-control_inc"));

function addItem() {
  let newItem = this.closest("div.product");
  let amount = Number(newItem.getElementsByClassName("product__quantity-value")[0].textContent);
  let picture = newItem.getElementsByClassName("product__image")[0].src;
  let idItem = newItem.getAttribute("data-id");
  let cart = document.getElementsByClassName("cart__products")[0];

  function addNewItem() {
    let newItemDiv =
      `<div class="cart__product" data-id=${idItem}>
        <img class="cart__product-image" src=${picture}>
        <div class="cart__product-count">${amount}</div>
      </div>`;
  cart.insertAdjacentHTML("afterBegin", newItemDiv);
  }

  let cartProd = Array.from(cart.getElementsByClassName("cart__product"));
  let cartProdId = [];
  for (let i = 0; i < cartProd.length; i++) {
    cartProdId[i] = cartProd[i].getAttribute("data-id");
  }
  if (cartProdId.indexOf(idItem) !== -1) {
    for (let i = 0; i < cartProdId.length; i++) {
      if (cartProdId[i] === idItem) {
        cartProd[i].querySelector(".cart__product-count").textContent = Number(cartProd[i].querySelector(".cart__product-count").textContent) + amount;
      }
    }  
  } else {
    addNewItem();
  } 
}

for (let addButton of addButtons) {
  addButton.addEventListener("click", addItem);
}

function decrBtnChange() {
  let counter = this.nextElementSibling;
  if (Number(counter.textContent) > 1) {
    counter.textContent = Number(counter.textContent) - 1;    
  }
}

function incrBtnChange() {
    let counter = this.previousElementSibling;
     counter.textContent = Number(counter.textContent) + 1; 
}

for (let decreaseBtn of decreaseBtns) {
  decreaseBtn.addEventListener("click", decrBtnChange);
}

for (let increaseBtn of increaseBtns) {
  increaseBtn.addEventListener("click", incrBtnChange);
}