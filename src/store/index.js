import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import products from "./modules/products";

export default createStore({
  modules: {
    products,
  },
  /* plugins: [
    createPersistedState({
      key: "mini-market",
      path: ["products"],
      storage: window.sessionStorage, // sessionStorage or localStorage (default)
    }),
  ], */
});
