import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    logs: [],
  }),
  mutations: {
    setLogs(state, payload) {
      state.logs = payload;
    },
    addLog(state, payload) {
      state.logs.unshift(payload);
    },
  },
  actions: {
    getAllLogs({ commit }, payload) {
      axios
        .get('https://attendance-system-api-d4d55f8107e2.herokuapp.com/logs')
        .then((r) => {
          commit('setLogs', r.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    SOCKET_LOGS_logCreated({ commit }, payload) {
      commit('addLog', payload);
    },
  },
};
