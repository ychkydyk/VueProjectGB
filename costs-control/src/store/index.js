import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    payments: []
},
mutations: {
    setPaymentsData(state, payload){
        state.payments = payload
    },
    addDataToPayments(store, data) {
        store.payments.push(data)
    }
},
actions: {

},
getters: {
    getFullPaymentsAmount: state => {
        return state.payments.reduce((res, cur) => res + cur.amount, 0)
    },
    getPayments: state => state.payments
}
})
