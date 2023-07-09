export const END_POINTS = {
  products: "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
};

class Cart {
  constructor() {
    this.cart = this.#getLS("cart") || [];
  }

  add(item) {
    const currentCart = this.cart;
    const { index, isPresent } = this.exist(item.id);
    if (isPresent) {
      const currentItem = currentCart[index];
      currentCart[index] = { ...currentItem, count: currentItem.count + 1 };
    } else {
      currentCart.push({ ...item, count: 1 });
    }

    this.#addLS("cart", currentCart);

    this.updateCartIcon();
  }
  clear(){
    this.#clearLS();
    this.updateCartIcon()
  }

  exist(id) {
    const index = this.cart.findIndex((i) => i.id === id);
    return {
      index,
      isPresent: ~index,
    };
  }

  updateCartIcon() {
    const totalCount = this.cart.reduce((a,i)=>a+i.count,0)
    $("#cart-header-count").html(totalCount);
  }

  #getLS(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return null;
    }
  }
  #addLS(key, value) {
    if (typeof value !== "string") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
  #clearLS() {
    localStorage.clear();
  }
}


function initCart(){
    const cart = new Cart();
    cart.updateCartIcon();
}
export { Cart,initCart };
