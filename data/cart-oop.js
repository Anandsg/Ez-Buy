// OOPS

const cart = {
  cartItems: undefined,

  //   loadFromStorage: function () {
  loadFromStorage() {
    // shorthand property
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop"));

    if (!this.cartItems) {
      this.cartItems = [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 2,
          deliveryOptionsId: "1",
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 1,
          deliveryOptionsId: "2",
        },
      ];
    }
  },
  saveCartToLocalStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  addToCart(productId) {
    let matchingItem;
    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionsId: "1",
      });
    }
    this.saveCartToLocalStorage();
  },

  removeFromCart(productId) {
    const newCart = [];

    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveCartToLocalStorage();
  },

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;
    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveCartToLocalStorage();
  },
};

cart.loadFromStorage();

cart.addToCart("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");
// cart.removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

console.log(cart);
