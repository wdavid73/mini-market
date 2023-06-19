<template>
  <div class="button-container">
    <div class="button-container__btn-info" @click="showCart">
      <i class="fa fa-shopping-cart icon-btn"></i> ${{ total }}
    </div>
    <button v-if="show" class="button-container__btn" @click="hideCart">
      <i class="fa fa-close"></i>
    </button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const products = createNamespacedHelpers("products");

export default {
  name: "CartButton",

  computed: {
    ...products.mapGetters(["cart", "total", "show"]),
  },

  methods: {
    ...products.mapActions(["setShowCart", "clearProductSelected"]),
    showCart() {
      this.setShowCart(true);
      this.clearProductSelected();
    },

    hideCart() {
      this.setShowCart(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.button-container {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  &__btn-info {
    background-color: $color-secondary;
    border: 1px solid $color-primary;
    color: $color-primary;
    padding: 12px 16px;
    font-size: 16px;
    width: 125px;
    cursor: pointer;
  }
  &__btn {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: white;
    padding: 12px 16px;
    font-size: 18px;
    cursor: pointer;
  }
}

.icon-btn {
  font-size: 22px;
}
</style>
