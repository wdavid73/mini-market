<template>
  <div class="home"></div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const products = createNamespacedHelpers("products");

export default {
  name: "HomeView",

  mounted() {
    this.getProducts();
  },

  computed: {
    ...products.mapGetters(["products"]),
  },

  methods: {
    ...products.mapActions(["getProducts"]),
  },
};
</script>
