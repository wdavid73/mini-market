<template>
  <div>
    <div class="list__title">
      <span>Store</span>
    </div>
    <div class="list__divider"></div>
    <div class="products-list">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="products-list__item"
        v-bind:class="product.id == productSelected.id ? 'item-select' : ''"
        @click="selectProduct(index)"
      >
        <img :src="product.image" />
        <div
          v-if="product.hasOwnProperty('count') && product.count > 0"
          class="item-count"
        >
          <span>{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const products = createNamespacedHelpers("products");
export default {
  name: "ProductList",
  mounted() {
    this.getProducts();
    this.checkProductInCart();
  },

  computed: {
    ...products.mapGetters(["products", "cart", "total", "productSelected"]),
  },

  methods: {
    ...products.mapActions(["getProducts", "setProduct"]),

    selectProduct(index) {
      this.setProduct(index);
    },

    checkProductInCart() {
      this.products.forEach((product) => {
        const index = this.cart.findIndex((item) => item.id == product.id);
        if (index != -1) {
          product["count"] = this.cart[index].count;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  &__title {
    text-align: start;
    font-size: 1.5rem;
    color: $color-primary;
    font-family: "RobotoBold";
  }

  &__divider {
    background-color: $color-secondary-variation;
    height: 5px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.products-list {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  overflow: auto;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 810px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 435px) {
    grid-template-columns: repeat(2, 1fr);
  }
  &__item {
    border: 3.5px solid grey;
    height: 250px;
    position: relative;
    & img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      top: 0;
      left: 0;
    }
  }
}

.item-count {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: $color-primary;
  text-align: center;
  position: absolute;
  top: 3px;
  left: 3px;
  & span {
    line-height: 40px;
    vertical-align: middle;
    color: white;
  }
}

.item-select {
  border: 3.5px solid $color-primary;
  box-shadow: 10px 10px 46px -17px $color-primary;
}
</style>
