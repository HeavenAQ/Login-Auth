<template>
  <main class="home">
      <div class="app-wrapper">
          <div class="app">
              <h1>Hi there!</h1>
              <h3>{{ userEmail }}</h3>
          </div>
      </div>
  </main>
</template>

<script>
import { auth } from "../firebase"
export default{
    data(){
        return{
            userEmail: null,
        }
    },
    created(){
        this.getUserInfo();
    },
    methods: {
        getUserInfo(){
            this.userEmail = auth.currentUser.email;
            return;
        }

    }
}
</script>

<style scoped>
.app { text-align: center; margin-top: 50px;}
</style>
