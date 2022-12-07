import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
import axios from 'axios'

const toast = useToast()
const BASE_URL = "http://localhost:3000"

export const useClientStore = defineStore('client', {
    state: () => ({
        isLogin: false,
    }),
    actions: {
        // * LOGIN EMAIL & PASSWORD
        async login({email, password}) {
            try {
                console.log(email, password, 'EMAIL DAN PASSWORD DARI STORE');
                const {data} = await axios({
                    url: BASE_URL+'/users/login',
                    method: 'POST',
                    data: {
                        email,
                        password
                    }
                })

                localStorage.setItem("access_token", data.access_token)
                this.isLogin = true
                this.router.push({name: 'home_page'})
            } catch (err) {
                // console.log(err);
                toast.error(err.response.data.message)
            }
        },

        // * LOGOUT
        logout() {
            localStorage.clear()
            this.isLogin = false
            this.router.push({name: 'home_page'})
        },

        // * REGISTER
        async register({email, password, address}) {
            try {
                const { data } = await axios({
                    url: BASE_URL+'/users/register',
                    method: 'POST',
                    data: {
                        email,
                        password,
                        address
                    }
                })
                toast.success("SUCCESS REGISTER")
                this.router.push({name: 'login_page'})
            } catch (err) {
                toast.error(err.response.data.message)
            }
        }

        
    }
})