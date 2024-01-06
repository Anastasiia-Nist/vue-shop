export default {
  state: {
    notesList: [
      {
        title: 'First Note',
        description: 'Description for first note',
        date: new Date(Date.now()).toLocaleString(),
        id: Math.random() + ' First Note',
        disabled: true,
        error: '',
        selected: 'easy',
      },
      {
        title: 'Second Note',
        description: 'Description for second note',
        date: new Date(Date.now()).toLocaleString(),
        id: Math.random() + ' Second Note',
        disabled: true,
        error: '',
        selected: 'easy',
      },
      {
        title: 'Third Note',
        description: 'Description for third note',
        date: new Date(Date.now()).toLocaleString(),
        id: Math.random() + ' Third Note',
        disabled: true,
        error: '',
        selected: 'easy',
      },
    ],
    priorities: [
      { alias: 'easy', title: 'Simple' },
      { alias: 'medium', title: 'Hard' },
      { alias: 'hard', title: 'Extra hard' },
    ],
    filteredNotes: [],
  },
  // setters
  mutations: {
    addNote(state, payload) {
      state.notesList.push({
        ...payload,
        date: new Date(Date.now()).toLocaleString(),
        id: Math.random() + ' ' + payload.title,
        error: '',
      });
    },
    editNote(state, payload) {
      state.notesList.map((note) => {
        if (note.id === payload) {
          note.disabled = false;
          return note;
        }
        return note;
      });
    },
    cancelEditNote(state, payload) {
      state.notesList.map((note) => {
        if (note.id === payload) {
          note.disabled = true;
          return note;
        }
        return note;
      });
    },
    removeNoteById(state, payload) {
      const searchNote = state.notesList.find((note) => note.id === payload);
      state.notesList.splice(state.notesList.indexOf(searchNote), 1);
    },
    submitEditNoteById(state, { id, title, description }) {
      state.notesList.map((note) => {
        if (note.id === id) {
          if (title === '') {
            note.error = 'Error: Title can`t be blank!';
            return false;
          } else {
            note.disabled = true;
            if (title !== null) note.title = title;
            if (description !== null) note.description = description;
            note.date = new Date(Date.now()).toLocaleString();
            console.log({ id, title, description })
            console.log(note)
            return note;
          }
        }
        return note;
      });
    },
    setFilteredNotes: (state, search) => {
      if (!search || search === '') state.filteredNotes = state.notesList;
      state.filteredNotes = state.notesList.filter((item) => {
        if (item.title.toLowerCase().indexOf(search) !== -1) return item;
      });
    },
  },
  actions: {
    addNote({ commit }, note) {
      commit('addNote', note);
    },
    removeNoteById({ commit }, idNote) {
      commit('removeNote', idNote);
    },
    editNote({ commit }, idNote) {
      commit('editNote', idNote);
    },
    submitEditNoteById({ commit }, idNote) {
      commit('submitEditNote', idNote);
    },
    cancelEditNote({ commit }, idNote) {
      commit('cancelEdit', idNote);
    },
    setFilteredNotes({ commit }, search) {
      commit('setFilteredNotes', search);
    },
  },
  // getters
  getters: {
    getNotesList(state) {
      return state.notesList;
    },
    getFilteredNotes(state) {
      return state.filteredNotes;
    },
  },
};
