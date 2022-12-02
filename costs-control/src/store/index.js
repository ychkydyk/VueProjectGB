import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    payments: [],
    categoryList: []
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
    addDataToPayments(state, data) {
        state.payments.push(data)
    },
    removeCostsList: (state, payload) => state.payments.splice(
        state.payments.indexOf(payload),
        1
    ),
    editCostsList: (state, payload) => (state.payments = state.payments.map((item) => {
        if(item.id === payload.id){
            return payload;
        } else{
            return item
        }
    }))
},

actions: { // Эмитация загрузки с сервера
       async fetchData({commit}) { // в actions можно вызывать другие actions
            await new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = [{ id: 1, dateCreated: "20.09.2022", category: "food", amount: 1582 },
                        { id: 2, dateCreated: "15.09.2022", category: "transport", amount: 245 },
                        { id: 3, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 4, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 5, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 6, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 7, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 8, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 9, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },
                        { id: 10, dateCreated: "22.09.2022", category: "healthcare", amount: 780 },]

                    resolve(items)
                }, 800)
            }).then(res=> {
                // dispatch('fetchCategory')
                commit('setPaymentsData', res)
            })
        },
    fetchCategory({commit}) {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                const items = [ 'Food', 'Transport', 'Internet', 'Sport']
                resolve(items)
            }, 800)
        }).then(res=> commit('setPaymentsCategory', res))
    }
},
getters: {
    getFullPaymentAmount: state => {
        return state.payments.reduce((res, cur) => res + cur.amount, 0)
    },
    getPayments: state => state.payments,
    getCategory: state => state.categoryList,
    getId: state => {
        return (state.payments.length + 1)
    },
}
})
