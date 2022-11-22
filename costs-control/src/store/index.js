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
        // Vue.set(state.payments, 0, payload) реактивное изменение данных 1й способ.
        // state.payments[0] = payload                                     2й способ. - bad
        // state.payments = [...state.payments]
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
