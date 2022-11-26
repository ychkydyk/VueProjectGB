export default {
    install (Vue) {
        if (this.installed) {
            return
        }
        this.installed = true

        Vue.prototype.$modal = {
            EventBus: new Vue(),

            show(modalId) {
                this.EventBus.$emit('modalShow', modalId)
            },
            hide(modalId) {
                this.EventBus.$emit('modalHide', modalId)
            }
        }
    }
}
