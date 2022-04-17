import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/LoginPage.vue'
import Register from '../views/RegisterPage.vue'
import ChangePassword from '../views/ChangePassword.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
        requiresAuth: true,    
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
        title: "Login",
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
        title: "Register"
    }
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
    meta: {
        title: "Change Password",
        requiresAuth: true,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/* setting page routing rules */
router.beforeEach((to, from, next) => {
    
    //stop the logged-in users from going to the login and register page

    if((to.path === '/login' || to.path === '/register') && auth.currentUser && from.path !== '/change-password'){
        next('/');
        return;
    }
    
    //Send the users to the login page if they do not log in.
    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){

        next('/login')
        return
    }

    //Just allow them to go to the next page if they do not emcouter the conditions above
    next();
})

export default router
