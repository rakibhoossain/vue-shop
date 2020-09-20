import { createStore } from "vuex";
let cart = window.localStorage.getItem("cart");
let cartCount = window.localStorage.getItem("cartCount");

export default createStore({
  state: {
    cart: cart ? JSON.parse(cart) : [],
    cartCount: cartCount ? parseInt(cartCount) : 0
  },
  mutations: {
    ADD_PRODUCT(state, item) {
      let found = state.cart.find(product => product.id == item.id);

      if (found) {
        found.quantity++;
        found.totalPrice = found.quantity * found.price;
      } else {
        item.quantity = 1;
        item.totalPrice = item.price;
        state.cart.push(item);
      }
      state.cartCount++;

      this.commit("saveCart");
    },

    REMOVE_PRODUCT(state, id) {
      let item = state.cart.find(product => product.id == id);
      let index = state.cart.indexOf(item);
      if (index > -1) {
        state.cartCount -= item.quantity;
        state.cart.splice(index, 1);
        this.commit("saveCart");
      }
    },
    saveCart(state) {
      window.localStorage.setItem("cart", JSON.stringify(state.cart));
      window.localStorage.setItem("cartCount", state.cartCount);
    }
  },
  actions: {
    addToCart(context, product) {
      context.commit("ADD_PRODUCT", product);
    },

    removeFromCart(context, id) {
      context.commit("REMOVE_PRODUCT", id);
    }
  },
  modules: {}
});
