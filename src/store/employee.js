import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    employees: [],
  }),
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
  },
  actions: {
    getAllEmployees({ commit }, payload) {
      axios
        .get("http://localhost:3000/employees")
        .then((r) => {
          commit("setEmployees", r.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
