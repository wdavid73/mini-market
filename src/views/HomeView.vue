<template>
  <div>
    <div class="home-top">
      <div class="home-top__icon">
        <i class="fa fa-shopping-bag"></i>
      </div>
      <CartButton />
    </div>
    <div class="home">
      <div class="products">
        <ProductList />
      </div>
      <div class="cart" v-if="show">
        <CartProducts />
      </div>
      <div
        class="details"
        v-else-if="show == false && !isObjectEmpty(productSelected)"
      >
        <ProductDetail />
      </div>
      <div class="empty" v-else>
        <Empty />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ProductList from "@/views/products/ProductList.vue";
import CartProducts from "@/views/products/CartProducts.vue";
import ProductDetail from "@/views/products/ProductDetail.vue";
import CartButton from "@/components/CartButton.vue";
import Empty from "@/components/Empty.vue";

const products = createNamespacedHelpers("products");

export default {
  name: "HomeView",

  components: {
    ProductList,
    CartProducts,
    ProductDetail,
    CartButton,
    Empty,
  },

  computed: {
    ...products.mapGetters(["show", "productSelected"]),
  },
  methods: {
    isObjectEmpty(objectName) {
      return Object.keys(objectName).length === 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.home-top {
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  &__icon {
    width: 75px;
    height: 70px;
    background-color: $color-primary;
    color: white;
    font-size: 3rem;
    background: linear-gradient(
      150deg,
      rgba(112, 15, 149, 1) 0%,
      rgba(189, 58, 238, 1) 100%
    );
    border-radius: 12px;
  }
}
.home {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
  overflow: auto;
  background: white;
  & div {
    margin: 5px;
  }
}
.products {
  width: 65%;
  // height: 90vh;
}
.cart {
  width: 35%;
  // height: 90vh;
}

.details {
  width: 35%;
  // height: 55vh;
}

.empty {
  width: 35%;
  height: 55vh;
}
</style>
