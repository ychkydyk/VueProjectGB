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
    setPaymentsCategory(state, payload){
        state.categoryList = payload
    },
    addDataToPayments(store, data) {
        store.payments.push(data)
    }
},

actions: { // Эмитация загрузки с сервера
        fetchData({commit, dispatch}) { // в actions можно вызывать другие actions
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = []
                    for(let i = 1; i < 101 ; i++){
                        items.push({
                            dateCreated: '01.01.2023',
                            category: 'Food',
                            amount: i
                        })
                    }
                    resolve (items)
                }, 800)
            }).then(res=> {
                dispatch('fetchCategory')
                commit('setPaymentsData', res)
            })
        },
    fetchCategory({commit}) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const items = [ 'Food', 'Transport', 'Internet', 'Sport']
                resolve (items)
            }, 800)
        }).then(res=> commit('setPaymentsCategory', res))
    }
},
getters: {
    getFullPaymentsAmount: state => {
        return state.payments.reduce((res, cur) => res + cur.amount, 0)
    },
    getPayments: state => state.payments
}
})
