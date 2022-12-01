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
                    const items = []
                    for(let i = 1; i < 21 ; i++){
                        items.push({
                            id: (items.length + 1),
                            dateCreated: '01.01.2023',
                            category: 'Food',
                            amount: i
                        })
                    }
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
