<template>
  <div class="empty-container">
    <div class="divider"></div>
    <span>Please choose a product on the left</span>
  </div>
</template>

<script>
export default {
  name: "EmptyVue",
};
</script>

<style lang="scss" scoped>
.empty-container {
  width: 100%;
  text-align: left;
  color: $text-secondary;
  font-family: "RobotoBold";
}
.divider {
  background-color: $color-secondary-variation;
  height: 5px;
  width: 100%;
  margin-top: 45px;
  margin-bottom: 10px;
}
</style>
