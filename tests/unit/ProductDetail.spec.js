import { mount } from "@vue/test-utils";
import ProductDetail from "@/views/products/ProductDetail";
import { createStore } from "vuex";
import products from "@/store/modules/products";

const store = createStore({
  modules: {
    products,
  },
  getters: {
    productSelected: () => ({
      id: 1,
      image: "product1.jpg",
      title: "Product 1",
      price: 9.99,
      description: "Product 1 description",
      count: 0,
    }),
  },
  actions: {
    addCart: jest.fn(),
    minusOfCart: jest.fn(),
  },
});

describe("ProductDetail", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(ProductDetail, {
      global: {
        plugins: [store], // Provide the Vuex store to the component
      },
    });
    expect(wrapper.find(".detail__title span").text()).toBe("Product");
    expect(wrapper.find(".item-count span").text()).toBe("2");
    expect(wrapper.find(".price").text()).toBe("$9.99");
  });

  it("triggers the addCart method on plus button click", async () => {
    const wrapper = mount(ProductDetail, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.find(".button-container__btn-plus").trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith("addCart", {
      product: store.getters.productSelected,
    });
  });

  it("triggers the minusOfCart method on minus button click", async () => {
    const wrapper = mount(ProductDetail, {
      global: {
        plugins: [store],
      },
    });
    await wrapper.find(".button-container__btn-minus").trigger("click");
    expect(store.dispatch).toHaveBeenCalledWith("minusOfCart", {
      product: store.getters.productSelected,
    });
  });
});
