<template>
    <main class="form-signin">
        <section class="forms">
            <form @submit.prevent="login">
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email Address"
                    v-model="login_form.email"
                    class="form-control inputbox"
                />
                <input
                    type="password"
                    placeholder="Password"
                    v-model="login_form.password"
                    class="form-control inputbox"
                />
                <button class="w-100 btn btn-primary btn-block inputbox">Login</button>
                <p>No account? <router-link to="/register">Create one</router-link>!</p>
            </form>
        </section>
    </main>
</template>

<script>
    import { ref } from 'vue';
    import { useStore } from 'vuex';

    export default {
        setup() {
            const login_form = ref({});
            const store = useStore();

            const login = () =>{
                store.dispatch('login', login_form.value)
            }

            return {
                login_form,
                login,
            }
        }
    }
</script>


<style scoped>
    html,
    h2, p {
        text-align: center;
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


