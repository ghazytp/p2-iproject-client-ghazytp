<script>
import { mapActions } from 'pinia';
import { useClientStore } from '../stores/client';

export default {
    data() {
        return {
            userRegister: {
                email: '',
                password: ''
            }
        }
    },
    computed: {
        
    },
    methods: {
        ...mapActions(useClientStore, ['register'])
    }
}
</script>

<template>
        <!-- REGISTER -->
        <section class="mx-auto bg-[url('https://www.pixel4k.com/wp-content/uploads/2019/10/gears-of-war-5_1570392857.jpg')] bg-center w-96 p-2 text-center text-black font-semibold rounded-xl m-2">
        <div class="text-2xl p-2">REGISTER</div>
        <form @submit.prevent="register(userRegister)" class="text-left w-11/12 mx-auto">
            <div class="m-3 flex justify-between">
                <label for="email">Email</label>
                <input v-model="userRegister.email" type="email" class="w-2/3 text-black px-2 rounded-lg text-center" placeholder="Enter your email"/>
            </div>
            <div class="m-3 flex justify-between">
                <label for="password">Password</label>
                <input v-model="userRegister.password" type="password" class="w-2/3 text-black px-2 rounded-lg text-center" placeholder="Enter your password"/>
            </div>
            <div class="m-3 flex justify-between">
                <label for="address">Address</label>
                <textarea v-model="userRegister.address" name="address" id="" cols="" rows="" class="w-2/3 p-2 rounded-lg text-black placeholder:text-center" placeholder="Enter your address"></textarea>
            </div>
            <div class="text-center">
                <input type="submit" value="Submit" class="bg-red-600 px-2 py-1 rounded-lg m-2 shadow-lg  hover:bg-red-400">
            </div>
            
        </form>
    </section>
</template>