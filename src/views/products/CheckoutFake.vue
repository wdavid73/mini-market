<template>
  <form ref="payment"></form>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const products = createNamespacedHelpers("products");
export default {
  name: "CheckoutFake",

  mounted() {
    let script = document.createElement("script");
    script.setAttribute("src", "https://checkout.wompi.co/widget.js");
    script.setAttribute("data-render", "button");
    script.setAttribute(
      "data-public-key",
      "pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
    );
    script.setAttribute("data-currency", "COP");
    script.setAttribute("data-amount-in-cents", parseInt(this.total));
    script.setAttribute("data-reference", "4XMPGKWWPKWQ");
    script.setAttribute(
      "data-signature:integrity",
      "37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
    );
    this.$refs["payment"].appendChild(script);
  },

  computed: {
    ...products.mapGetters(["total"]),
  },
};
</script>
