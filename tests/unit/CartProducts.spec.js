import { mount } from "@vue/test-utils";
import CardProducts from "@/components/CardProducts.vue";

describe("CardProducts", () => {
  test("renders cart items correctly", () => {
    const mockCart = [
      { id: 1, count: 2, image: "product1.jpg" },
      { id: 2, count: 1, image: "product2.jpg" },
    ];
    const mockTotal = 50;

    const wrapper = mount(CardProducts, {
      global: {
        mocks: {
          $store: {
            getters: {
              "products/cart": mockCart,
              "products/total": mockTotal,
            },
          },
        },
      },
    });

    const cartItems = wrapper.findAll(".cart__list--item");
    expect(cartItems.length).toBe(mockCart.length);

    mockCart.forEach((item, index) => {
      const cartItem = cartItems[index];
      const countElement = cartItem.find(".item-count span");
      const imageElement = cartItem.find("img");

      expect(countElement.text()).toBe(item.count.toString());
      expect(imageElement.attributes("src")).toBe(item.image);
    });

    const totalElement = wrapper.find(".cart__total .price");
    expect(totalElement.text()).toBe(`$${mockTotal.toFixed(2)}`);
  });
});
