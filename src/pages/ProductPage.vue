<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section>
      <div class="container">
        <div class="product__wrapper">
          <div class="product__slider">
            <carousel
              :per-page="1"
              :paginationEnabled="true"
              :paginationColor="'#b3b3b3'"
              :paginationActiveColor="'#494ce8'"
              :mouse-drag="false"
            >
              <slide v-for="slide in product.gallery" :key="slide.name">
                <img :src="slide.img" :alt="slide.name" />
              </slide>
            </carousel>
          </div>
          <div class="product__content">
            <h1 class="title">{{ product.title }}</h1>
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.product = this.$store.getters.getProduct(id);
  },
};
</script>
<style lang="scss">
.product__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.product__slider,
.product__content {
  max-width: 46%;
  text-align: center;
}
</style>