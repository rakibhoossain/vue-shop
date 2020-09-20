<template>
  <div class="mini_cart">
    <div class="cart_close">
      <div class="cart_text">
        <h3>cart</h3>
      </div>
      <div class="mini_cart_close">
        <a href="javascript:void(0)"><i class="icon-x"></i></a>
      </div>
    </div>
    <div v-if="$store.state.cart.length > 0">
      <div class="cart_gallery">
        <div class="cart_item" v-for="item in cart" :key="item.id">
          <div class="cart_img">
            <a href="#"><img src="assets/img/s-product/product.jpg" alt=""/></a>
          </div>
          <div class="cart_info">
            <a href="#">{{ item.name }}</a>
            <p>
              {{ item.quantity }} x <span>{{ item.price }}</span>
            </p>
          </div>
          <div class="cart_remove">
            <a href="#" @click.prevent="removeFromCart(item.id)"
              ><i class="icon-x"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="mini_cart_table">
        <div class="cart_table_border">
          <div class="cart_total">
            <span>Sub total:</span>
            <span class="price">{{ totalPrice }}</span>
          </div>
          <div class="cart_total mt-10">
            <span>total:</span>
            <span class="price">{{ totalPrice }}</span>
          </div>
        </div>
      </div>
      <div class="mini_cart_footer">
        <div class="cart_button">
          <a href="cart.html"><i class="fa fa-shopping-cart"></i> View cart</a>
        </div>
        <div class="cart_button">
          <a href="checkout.html"><i class="fa fa-sign-in"></i> Checkout</a>
        </div>
      </div>
    </div>
    <div v-else>Cart empty!</div>
  </div>
</template>
<script>
export default {
  name: "MiniCart",
  methods: {
    removeFromCart(id) {
      this.$store.dispatch("removeFromCart", id);
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cart;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
    totalPrice() {
      let total = 0;
      for (let item of this.$store.state.cart) {
        total += item.totalPrice;
      }
      return this.cartCount ? total.toFixed(2) : 0;
    }
  }
};
</script>
