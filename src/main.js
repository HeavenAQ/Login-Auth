import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'

//to prevent unnecessary redirect to the login page
let app;
auth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(store).use(router).mount('#app')
    }
} )
