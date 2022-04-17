<template>
    <main class="form-signin">
        <section class="forms">
            <div class="app-wrapper">
                <div class="app">
                    <h2>Change Password</h2>
                    <form @submit.prevent="changePassword">
                        <input 
                            type="password"
                            v-model="newPassword"
                            placeholder="New Password"
                            class="form-control inputbox"
                            autofocus 
                            required
                        />  
                        <input 
                            type="password"
                            v-model="checkPassword"
                            placeholder="Please Enter Again"
                            class="form-control inputbox"
                            required
                        />
                        <button class="w-100 btn btn-primary bnt-block inputbox"> Change Password</button>
                    </form> 
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { auth } from "../firebase"
import { updatePassword } from "firebase/auth"
import router from "../router/index.js"
export default {
    name: 'changePassword',
    data(){
        return {
            newPassword: null,
            checkPassword: null
        }
    },
    methods: {
        changePassword(){
            const newPass = this.newPassword
            const checkPass = this.checkPassword

            //double check the new password
            if(newPass == checkPass)
            {
                //try to update the password 
                updatePassword(auth.currentUser, this.newPassword).then(()=>{
                    alert("Successful!")
                    router.push("/login")
                }).catch(error => {
                    
                    //catch if there is an error
                    switch(error){
                        case "auth/invalid-password":
                            alert("The password should be at least six characters")
                            break
                        case "auth/requires-recent-login":
                            alert("Please login again to continue.")
                            router.push('/login')
                            break
                        default:
                            alert("Something went wrong.")
                    }
                })
            } else {
                alert("The passwords do not match!")
            }

        },

    },
}
</script>


<style scoped>
    html,
    h2 {
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


