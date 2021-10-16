import { createStore } from 'vuex'
import axios from 'axios'

export default {
    namespaced: true,
    state:()=>({
        employees: [],
    }),
    mutations: {

        setEmployees(state, payload) {
            state.employees = payload
        },


    },
    actions: {


        getAllEmployees({ commit }, payload) {
            console.log(payload);
            axios
                .get('http://localhost:3000/employees')
                .then((r) => {
                    console.log("🚀 ~ file: employee.js ~ line 23 ~ .then ~ r", r)
                    commit('setEmployees', r.data)
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    },

}
