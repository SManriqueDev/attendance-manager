import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    employees: [],
  }),
  mutations: {
    setEmployees(state, payload) {
      state.employees = payload;
    },
    updateEmployee(state, payload) {
      const employee = state.employees.find(
        (employee) => employee.id === payload.id,
      );

      if (employee) {
        employee.nextDirection = payload.nextDirection;
      }
    },
  },
  actions: {
    getAllEmployees({ commit }, payload) {
      axios
        .get('https://attendance-system-back-be7ef11e38c6.herokuapp.com/employees')
        .then((r) => {
          commit('setEmployees', r.data);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    SOCKET_LOGS_logCreated({ commit }, payload) {
      payload.employee.nextDirection = payload.direction * -1;
      commit('updateEmployee', payload.employee);
    },
  },
};
