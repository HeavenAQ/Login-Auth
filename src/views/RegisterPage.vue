<template>
    <main class="form-signin text-center">
        <section class="form">
            <form class="register" @submit.prevent="register">
                <h2>Register</h2>
                <input
                    type="text"
                    placeholder="First name"
                    v-model="register_form.firstName"
                    class="form-control inputbox"
                    autofocus
                    required
                />
                <input
                    type="text"
                    placeholder="Last name"
                    v-model="register_form.lastName"
                    class="form-control inputbox"
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    v-model="register_form.username"
                    class="form-control inputbox"
                    required
               />
                <input
                    type="email"
                    placeholder="Email Address"
                    v-model="register_form.email"
                    class="form-control inputbox"
                    required
                />
                <input 
                    type="password"
                    placeholder="Password"
                    v-model="register_form.password"
                    class="form-control inputbox"
                    required
               />
               <button 
                   type="submit"
                   class="w-100 btn btn-primary btn-block inputbox"
                >
                   Register
                </button>
               <p>Already have an account? <router-link to="/login">Sign in</router-link>!</p>
            </form>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default{
    setup(){
        const register_form = ref({});
        const store = useStore()
        
        const register = () => {
            return store.dispatch('register', register_form.value)
        }

        return {
            register_form,
            register,
        }
    }
}
</script>

<style scoped>
    html,
    h2 {
        margin: 50px auto;
    }
    main{
      align-items: center;
      padding-top: 40px;
      padding-bottom: 40px;
    }
   
    .form-signin {
      width: 100%;
      max-width: 330px;
      padding: 15px;
      margin: auto;
    }
    
    .inputbox {
      font-family: Verdana;
      height: 3.3rem;
      padding: 6px 25px;
      margin-bottom: 35px;
      border-radius: 4rem;
    }
    input{
        font-family: Verdana;
        letter-spacing: 0.125rem;
    }
    
</style>


