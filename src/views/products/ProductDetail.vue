<template>
  <div>
    <div class="detail__title">
      <span>Product</span>
    </div>
    <div class="detail__divider"></div>
    <div class="detail__item">
      <div
        v-if="
          productSelected.hasOwnProperty('count') && productSelected.count > 0
        "
        class="item-count"
      >
        <span>{{ productSelected.count }}</span>
      </div>
      <div class="detail__item--img">
        <img :src="productSelected.image" />
      </div>
      <div class="divider"></div>
      <div class="detail__item--top">
        <div>
          {{ productSelected.title }} -
          <span class="price">${{ productSelected.price }}</span>
        </div>
        <div class="buttons-container">
          <button class="button-container__btn-minus" @click="minus">
            <i class="fa fa-minus"></i>
          </button>
          <button class="button-container__btn-plus" @click="add">
            <i class="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="divider"></div>
      <div class="detail__item--description">
        {{ productSelected.description }}
      </div>
      <div class="divider"></div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("products");
export default {
  name: "ProductDetail",

  computed: {
    ...mapGetters(["productSelected"]),
  },

  methods: {
    ...mapActions(["addCart", "minusOfCart"]),
    add() {
      this.addCart({ product: this.productSelected });
    },

    minus() {
      this.minusOfCart({ product: this.productSelected });
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
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
  &__item {
    &--top {
      font-family: "RobotoMedium";
      text-align: left;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;
    }
    &--img {
      height: 250px;
      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    &--description {
      font-family: "RobotoRegular";
      text-align: left;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}

.button-container {
  width: 50%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  &__btn-minus {
    background-color: $color-secondary-variation;
    border: 1px solid $color-secondary-variation;
    color: black;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
  }
  &__btn-plus {
    background-color: $color-primary;
    border: 1px solid $color-primary;
    color: white;
    padding: 6px 12px;
    font-size: 16px;
    cursor: pointer;
  }
}

.price {
  color: $color-primary;
  font-family: "RobotoBold";
}

.divider {
  background-color: $color-secondary-variation;
  height: 3px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.item-count {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: $color-primary;
  text-align: center;
  & span {
    line-height: 50px;
    vertical-align: middle;
    color: white;
  }
}
</style>
