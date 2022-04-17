<template>
    <div class="app-wrapper">
        <div class="app">
            <NavBar v-if="$store.state.user"/>
        </div>
    </div>
  <router-view/>
</template>

<script>
import NavBar from "./components/NavBar.vue"
import { onBeforeMount } from "vue"
import { useStore } from "vuex"
import 'bootstrap/dist/css/bootstrap.min.css'
export default {
    name: "app",
    components: {NavBar},
    setup(){
        const store = useStore()

        onBeforeMount(() => {
            store.dispatch('fetchUser')
        })
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Quicksand", sans-serif;
}

.app{
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1440px;
    margin: 0 auto;
}

.link {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    color: black;
}

.link-light {
    color: #fff;
}


.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.top {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.middle {
  border-radius: 0;
  margin-bottom: -1px;
}

.bottom {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
