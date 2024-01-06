<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <h1>Shop Page</h1>
        <div class="item__wrapper">
          <shop-item
            v-for="product in shopList"
            :key="product.id"
            :product="product"
          ></shop-item>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ShopItem from "../components/ShopItem.vue";

export default {
  components: {
    ShopItem,
  },
  data() {
    return {
      shopList: null,
    };
  },
  created() {
    this.shopList = this.$store.getters.getShopList;
  },
};
</script>
<style lang="scss" scoped>
.item__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
