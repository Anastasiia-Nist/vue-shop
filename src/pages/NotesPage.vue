<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container__wrapper">
      <div class="container">
        <newNote :note="note" @onAddNote="handleAddNote" />
        <errorMessage v-if="errorMessage" :errorMessage="errorMessage" />
        <div class="note-header">
          <h1>{{ title }}</h1>
          <search
            :value="search"
            placeholder="Find your note"
            @search="handleSearchInNotes($event)"
          />
          <iconsGrid :grid="grid" @gridToggle="handleGridToggle" />
        </div>
        <notesList
          :notes="notes"
          :grid="grid"
          @onRemoveById="handleRemoveNoteById"
          @onEditNote="handleEditNote"
          @onSubmitEditNote="handleSubmitEditNote"
          @onCancelEditNote="handleCancelEditNote"
        />
      </div>
    </div>
  </div>
</template>
<script>
import errorMessage from "@/components/errorMessage.vue";
import notesList from "@/components/NotesList.vue";
import newNote from "@/components/NewNote.vue";
import search from "@/components/Search.vue";
import iconsGrid from "@/components/iconsGrid.vue";

export default {
  components: {
    errorMessage,
    notesList,
    newNote,
    search,
    iconsGrid,
  },
  data() {
    return {
      title: "Notes App",
      search: "",
      errorMessage: null,
      grid: true,
      note: {
        title: "",
        description: "",
        disabled: true,
        error: "",
        selected: "easy",
      },
      notes: null,
    };
  },
  created() {
    this.notes = this.$store.getters.getNotesList;
  },
  methods: {
    handleAddNote() {
      if (this.note.title === "") {
        this.errorMessage = "Error: Title can`t be blank!";
        return false;
      } else {
        this.$store.commit("addNote", this.note);
        this.errorMessage = null;
        this.note.title = "";
        this.note.description = "";
      }
      this.notes = this.$store.getters.getNotesList;
    },
    handleRemoveNoteById(id) {
      this.$store.commit("removeNoteById", id);
      this.handleSearchInNotes(localStorage.getItem("search"));
    },
    handleEditNote(id) {
      this.$store.commit("editNote", id);
    },
    handleCancelEditNote(id) {
      this.$store.commit("cancelEditNote", id);
    },
    handleSubmitEditNote(note) {
      this.$store.commit("submitEditNoteById", note);
    },
    handleGridToggle(grid) {
      this.grid = !grid;
    },
    handleSearchInNotes(search) {
      localStorage.setItem("search", search);
      this.$store.commit("setFilteredNotes", search.trim().toLowerCase());
      this.notes = this.$store.getters.getFilteredNotes;
    },
  },
};
</script>
<style lang="scss" scoped>
.container__wrapper {
  padding: 0 20px;
}
</style>