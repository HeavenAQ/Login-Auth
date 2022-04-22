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


</style>
