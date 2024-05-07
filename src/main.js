import Vue from 'vue';
import TestButton from './components/TestButton.vue';
// Импортируйте другие компоненты, если они есть

// Регистрация глобальных компонентов
Vue.component('TestButton', TestButton);
// Зарегистрируйте другие компоненты здесь

// Опционально: вы можете выполнить другие настройки, например, настройку Vue Router или Vuex, если это необходимо для вашего UI Kit

// Создайте новый экземпляр Vue (но это может быть необязательно в UI Kit)
new Vue({
  render: h => h(),
}).$mount('#app');