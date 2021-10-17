import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    logs: [],
  }),
  mutations: {
    setLogs(state, payload) {
      state.logs = payload;
    },
  },
  actions: {
    getAllLogs({ commit }, payload) {
      axios
        .get("http://localhost:3000/logs")
        .then((r) => {
          commit("setLogs", r.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
