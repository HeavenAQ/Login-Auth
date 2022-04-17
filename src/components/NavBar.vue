<template>
    <header>
        <nav class="container">
            <div class=branding>
                <router-link class="header" :to="{ name: 'Home' }">SAMPLE</router-link>
            </div>
            <div class="nav-links" v-if="!mobile">
                <ul>
                    <router-link class="link" :to="{name: 'Home'}"> Profile </router-link>
                    <router-link class="link" :to="{name: 'ChangePassword'}"> Change Password </router-link>
                    <router-link class="link" @click="$store.dispatch('logout')" to="#"> Logout </router-link>
                </ul>
            </div>
        </nav>
        <div @click="toggleMobileNav" class="menu-toggle" v-if="mobile">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <transition class="mobile-nav" v-if="mobileNav">
            <ul class="mobile-nav" v-if="mobile">
                <router-link class="link" :to="{name: 'Home'}"> Home </router-link>   
                <router-link class="link" :to="{name: 'ChangePassword'}"> Change Password </router-link>
                <router-link class="link" @click="$store.dispatch('logout')" to="#"> Logout </router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
export default {
    name: "NavBar",
    data(){
        return {
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },
    created(){
        //when the window is resized, run it
        window.addEventListener("resize", this.checkScreen);

        //when the navbar is first created, run it
        this.checkScreen();
    },
    //make the site responsive
    methods: {
        checkScreen() {
            this.windowWidth = window.innerWidth;
            
            if(this.windowWidth <= 750) {
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    },
};
</script>

<style lang="scss" scoped>
header{
    background-color: #fff;
    padding: 0, 25px;
    box-shadow: 0 4px 6px -1px hsla(0, 20%, 100%, 0.1), 0 2px 4px -1px hsla(0, 0%, 0%, 0.3);
    z-index: 99;

    .link{
        font-weight: 500;
        padding: 0 8px;
        transition: .3s color ease;

        &:hover {
            color: #1eb8b8;
            
        }
    }

    nav{
        display: flex;
        padding: 25px 0;
        
        .branding {
            position: relative;
            left: 20px;
            display: flex;
            align-item: center;
        

            .header{
                font-weight: 600;
                font-size: 24px;
                color: #000;
                text-decoration: none;
            }
        }

        .nav-links {
            position: relative;
            display: flex;
            flex: 1;
            align-items: center;
            justify-content: flex-end;
        

            ul {
                margin-right: 32px;

                .link {
                    margin-right: 32px;
                }
                .link:last-child{
                    margin-right: 0;
                }
            }
        
        }
    }

    .menu-toggle{
        position: absolute;
        top: 15px;
        right: 10px;
        width: 50px;
        height: 50px;
        background: #fff;
        box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.08);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items:center;
        cursor: pointer;

        span{
            position: absolute;
            width: 40px;
            height: 4px;
            background: #000;
            border-radius: 4px;
        }

        span:nth-child(1) {
            transform: translatey(-15px);
            width: 33px;
            right: 5px;
        }

        span:nth-child(2) {
            transform: translatey(15px);
            width: 25px;
            right: 5px;
        }
    }
    .mobile-nav{
        padding:20px;
        width: 70%;
        max-width:250px;
        display: flex;
        flex-direction: column;
        position: fixed;
        height: 100%;
        background-color: #303030;
        top: 0;
        left: 0;

        .link{
            padding: 15px 0;
            color: #fff;
        }
    }
    
}

</style>
