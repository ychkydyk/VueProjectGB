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
    addDataToPayments(store, data) {
        store.payments.push(data)
    },
    editPaymentList: (state, payload) => (state.payments = state.payments.map((item) => {
        if (item.id === payload.id) {
            console.log(payload)
            return payload;
        } else {
            return item
        }
    })),
    removePaymentList: (state, payload) => state.payments.splice(
        state.payments.indexOf(payload),
        1),
},


actions: {// Эмитация загрузки с сервера
        fetchData({commit}) { // в actions можно вызывать другие actions
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    const items = [
                        { id: 1, category: "food", dateCreated: "08.11.2022", amount: 1 },
                        { id: 2, category: "food", dateCreated: "10.11.2022", amount: 2 },
                        { id: 3, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 4, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 5, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 6, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 7, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 8, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 9, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 10, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 11, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 12, category: "food", dateCreated: "12.11.2022", amount: 3 },
                        { id: 13, category: "food", dateCreated: "12.11.2022", amount: 3 }]
                    // for(let i = 1; i < 21 ; i++){
                    //     items.push({
                    //         id: (items.length + 1),
                    //         dateCreated: '01.01.2023',
                    //         category: 'Food',
                    //         amount: i
                    //     })
                    // }
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
        return state.payments.reduce((res, cur) => res + Number(cur.amount), 0)
    },
    getPayments: state => state.payments,
    getCategory: state => state.categoryList,
    getId: state => {
        return (state.payments.length + 1)
    },
}
})
