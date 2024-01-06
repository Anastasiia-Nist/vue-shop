import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import shop from './shop';
import notes from './notes';

export default new Vuex.Store({
  modules: {
    shop,
    notes
  },
});
