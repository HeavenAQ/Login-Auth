import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

export default createStore({
  state: {
      user: null,
  },
  mutations: {
      //when user logs in 
      SET_USER(state, user) {
          state.user = user
      },

      //when user logs out 
      CLEAR_USER(state) {
          state.user = null }, },

  actions: {
      async login({commit}, details){
        //get the email and password from user
        const { email, password } = details
        
        //test if there is something wrong with the email or password
        try {
            await signInWithEmailAndPassword(auth, email, password)

        }catch(error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert("User not found")
                    break
                case 'auth/wrong-password':
                    alert("Wrong Password")
                    break
                default:
                    alert("Something went wrong")
            }
            //if there is something wrong, end the function  
            return 
        }
        
        //if everything goes smooth, log in the user
        commit('SET_USER', auth.currentUser)

        //direct the user to the home page
        router.push('/')
      },
        
      async register({commit}, details){
          //get the user input
          const {email, password} = details

          //try to create the user and check if there is something wrong when creating an account
          try{
            await createUserWithEmailAndPassword(auth, email, password)

          } catch(error) {
              switch(error.code){
                  case 'auth/email-already-in-use':
                      alert("The email has been used.")
                      break
                  case 'auth/invalid-email':
                      alert("The email is not valid.")
                      break
                  case 'auth/operation-not-allowed':
                      alert("Operation not allowed")
                      break
                  case 'auth/weak-password':
                      alert("Weak password")
                      break
                  default:
                      console.log(error.code)
                      alert("Something went wrong when creating the accout. Please try again.")
              }
              //end the function when there is something wrong
              return
          }

          //create the user account 
          commit('SET_USER', auth.currentUser)
          
          //redirect to the home page 
          router.push('/')
      },
      
      async logout({commit}){
        await signOut(auth)
        commit('CLEAR_USER')

        //direct to the login page
        router.push('/login')
      }, 

      //to check if the user exists and prevent non-registered users from entering through URL
      fetchUser({ commit }){
          auth.onAuthStateChanged(async user => {
              if(user === null){
                  commit('CLEAR_USER');
              } else {
                  commit('SET_USER', user);

                  //ensure the router is ready to respond
                  if(router.isReady() && router.currentRoute.value.path === '/login'){
                      router.push('/');
                  }
              }
          })
      }
  },
})
