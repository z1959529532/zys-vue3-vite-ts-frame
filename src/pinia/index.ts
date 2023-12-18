import {createPinia, defineStore} from 'pinia';
import createPersistedState from 'pinia-plugin-persistedstate';

const pinia = createPinia();
// import {createPersistedState} from 'pinia-plugin-persistedstate';
// pinia.use(
//     createPersistedState({
//         auto: true,
//         storage: localStorage
//     })
// );
pinia.use(createPersistedState)

export const useStore = defineStore('store', {
    state: () => ({}),
    getters: {},
    actions: {}
})

export default pinia