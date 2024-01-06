<template>
  <div class="errorMessage">
    <p>{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.errorMessage {
  text-align: center;
  padding: 20px;
  p {
    color: #d01111;
  }
}
</style>