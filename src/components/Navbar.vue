<script>
import { mapActions, mapState } from 'pinia';
import { RouterLink } from 'vue-router';
import { useClientStore } from '../stores/client';

export default {
    computed: {
        ...mapState(useClientStore, ['isLogin'])
    },
    methods: {
        ...mapActions(useClientStore, ['logout'])
    }
}

</script>

<template>

<nav class="py-6 px-8 font-bold flex justify-between ">
        <div class="text-5xl">
            GAMELITZ
        </div>
        <div class="mt-3 flex gap-12">
            <RouterLink to="/" href="" class="hover:text-yellow-200">HOME</RouterLink>
            <RouterLink to="/mygames" v-if="isLogin" class="hover:text-yellow-200">MY GAME</RouterLink>
            <RouterLink to="/login" v-if="!isLogin" class="hover:text-yellow-200">LOGIN</RouterLink>
            <RouterLink to="/register" v-if="!isLogin" class="hover:text-yellow-200">REGISTER</RouterLink>
            <RouterLink @click.prevent="logout" to="/" v-if="isLogin" class="hover:text-yellow-200">LOGOUT</RouterLink>
        </div>
    </nav>

</template>