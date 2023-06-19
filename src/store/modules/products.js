import data from "@/utils/data.json";
import { sumCart } from "@/utils/functions";

export default {
  namespaced: true,
  state: {
    products: [],
    cart: [],
    total: 0,
    show: false,
    productSelected: {},
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
    show: (state) => state.show,
    productSelected: (state) => state.productSelected,
    total: (state) => {
      if (state.cart.length > 0) {
        return sumCart(state.cart);
      }
      return 0;
    },
  },
  mutations: {
    SET_PRODUCTS: (state, payload) => {
      state.products = payload;
    },
    SET_CART: (state, payload) => {
      state.cart = payload;
    },
    SET_SHOW_CART: (state, payload) => {
      state.show = payload;
    },
    SET_PRODUCT: (state, payload) => {
      state.productSelected = payload;
    },
    ADD_TO_CART: (state, payload) => {
      var existItemIndex = state.cart.findIndex(
        (element) => element.id == payload.id
      );
      if (existItemIndex != -1) {
        state.cart[existItemIndex].count = parseInt(payload.count);
      } else {
        state.cart.push(payload);
      }
    },

    MINUS_OF_CART: (state, payload) => {
      var existItemIndex = state.cart.findIndex(
        (element) => element.id == payload.id
      );
      if (existItemIndex != -1) {
        if (payload.count < state.cart[existItemIndex].count) {
          state.cart[existItemIndex].count = payload.count;
        } else if (payload.count == 0) {
          state.cart.splice(existItemIndex, 1);
        }
      }
    },
  },
  actions: {
    getProducts({ commit }) {
      commit("SET_PRODUCTS", data);
    },

    setShowCart({ commit }, show) {
      commit("SET_SHOW_CART", show);
    },

    setProduct({ commit, state }, index) {
      commit("SET_PRODUCT", state.products[index]);
    },

    addCart({ commit, state }, { product }) {
      let count = 1;
      const index = state.cart.findIndex((element) => element.id == product.id);
      if (index != -1) {
        product.count++;
        commit("ADD_TO_CART", product);
      } else {
        product.count = count;
        commit("ADD_TO_CART", product);
      }
    },

    minusOfCart({ commit, state }, { product }) {
      const index = state.cart.findIndex((element) => element.id == product.id);
      if (index != -1) {
        if (product.count > 0) {
          product.count--;
        } else {
          product.count = 0;
        }
        commit("MINUS_OF_CART", product);
      }
    },

    clearProductSelected({ commit }) {
      commit("SET_PRODUCT", {});
    },
  },
};
