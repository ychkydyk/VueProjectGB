export default {
    install(Vue) {
        Vue.prototype.$context = {
            EventEmitter: new Vue(),
            //costId прокинули из List.vue
            show(element, cost) {

                console.log(element.getBoundingClientRect());
                const widthContextMenu = 100;
                const {x,y, height} = element.getBoundingClientRect(); // функция для определения координат
                this.EventEmitter.$emit("showContextMenu", {x: x - widthContextMenu, y: y + height, cost}); // прокидываем координаты трех точек

            },
            hide(cost) {
                this.EventEmitter.$emit("hideContextMenu", {cost}); // передаем вторым параметром ОБЪЕКТ
            },
        };
    },
};