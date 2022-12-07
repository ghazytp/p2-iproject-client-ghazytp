<script>
import { mapActions } from 'pinia';
import { useClientStore } from '../stores/client';

export default {
    data () {
        return {
            userLogin : {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        
    },
    methods: {
        ...mapActions(useClientStore, ['login'])
    }
}
</script>

<template>
        <!-- LOGIN -->
        <section class="mx-auto  bg-[url('https://www.pixel4k.com/wp-content/uploads/2019/10/gears-of-war-5_1570392857.jpg')] text-black font-bold bg-center w-96 p-2 text-center rounded-xl m-2">
        <div class="text-2xl p-2">LOGIN</div>
        <form @submit.prevent="login(userLogin)" class="text-left w-11/12 mx-auto">
            <div class="m-3 flex justify-between">
                <label for="email">Email</label>
                <input v-model="userLogin.email" type="email" class="text-black px-2 rounded-lg text-center w-2/3" placeholder="Enter your email"/>
            </div>
            <div class="m-3 flex justify-between">
                <label for="password">Password</label>
                <input v-model="userLogin.password" type="password" class="text-black px-2 rounded-lg text-center w-2/3" placeholder="Enter your password"/>
            </div>
            <div class="text-center">
                <input type="submit" value="Submit" class="bg-red-600 px-2 py-1 rounded-lg m-2 shadow-lg  hover:bg-red-400">
            </div>
            
        </form>
    </section>
</template>