<template>
  <div>
    <div class="cart__title">
      <span>Shopping cart</span>
    </div>
    <div class="cart__divider"></div>
    <div class="cart__list">
      <div
        v-for="(product, index) in cart"
        :key="index"
        class="cart__list--item"
      >
        <div class="item-cart">
          <div class="item-count">
            <span>{{ product.count }}</span>
          </div>
          <img :src="product.image" />
        </div>
        <div v-if="index >= 0" class="cart__divider"></div>
      </div>
    </div>
    <div class="cart__total">
      <span class="total-text">Total: </span
      ><span class="price">${{ total }}</span>
    </div>
    <div class="cart__pay">
      <button
        style="
          background: blue;
          border-radius: 12px;
          color: white;
          width: 150px;
          height: 50px;
        "
      >
        PAY
      </button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const products = createNamespacedHelpers("products");

export default {
  name: "CardProducts",

  computed: {
    ...products.mapGetters(["cart", "total"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
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
  &__list {
    height: 450px;
    overflow: auto;
    &--item {
      height: 150px;
      margin-bottom: 20px;
    }
  }
  &__total {
    text-align: right;
  }

  &__pay {
    display: flex;
  }
}

.item-cart {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  & img {
    width: 50%;
    height: 100%;
    object-fit: contain;
  }
}

.item-count {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: $color-primary;
  text-align: center;
  & span {
    line-height: 40px;
    vertical-align: middle;
    color: white;
  }
}

.total-text {
  color: $text-secondary;
  font-family: "RobotoBold";
  font-size: 1.5rem;
}

.price {
  color: $color-primary;
  font-family: "RobotoBold";
  font-size: 1.5rem;
}
</style>
