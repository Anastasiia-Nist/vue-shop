<!-- eslint-disable vue/no-mutating-props -->
<template>
  <section class="new-note">
    <form @submit.prevent="onAddNote">
      <label for="title">Title</label>
      <input v-model="note.title" type="text" id="title" />
      <label for="priority">Priority</label>
      <select v-model="note.selected" id="priority">
        <option v-for="(priority, index) in priorities" :key="index">
          {{ priority.alias }}
        </option>
      </select>
      <label for="description">Description</label>
      <textarea v-model="note.description" id="description"></textarea>
      <button type="submit" class="btn btnPrimary">New Note</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      priorities: null,
    };
  },
  props: {
    note: {
      type: Object,
      requires: true,
    },
  },
  created() {
    this.priorities = this.$store.state.notes.priorities;
  },
  methods: {
    onAddNote() {
      this.$emit("onAddNote", this.note);
    },
  },
};
</script>
<style lang="scss">
.new-note {
  text-align: center;
  select {
    width: 60%;
    padding: 16px 26px;
    margin-bottom: 30px;
    border-radius: 20px;
  }
}
</style>