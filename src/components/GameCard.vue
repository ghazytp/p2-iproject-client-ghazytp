<script>
import { mapActions } from 'pinia';
import { useGameStore } from '../stores/games';

export default {
    props: ['game'],
    methods: {
        ...mapActions(useGameStore, ['fetchAllGames'])
    },
}
</script>

<template>
    <!-- CARD -->
    <div class="w-56 flex flex-col rounded-xl bg-neutral-800 hover:bg-neutral-700  shadow-white hover:scale-105">
                <div class="h-2/3">
                    <!-- <img src="https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg" alt=""  class="object-fill h-full rounded-t-xl shadow-lg"> -->
                    <img :src="game.image_url" alt=""  class="object-fill h-full rounded-t-xl shadow-lg">
                </div>
                <div class="p-2 tracking-tight">
                    <div class="font-semibold text-2xl text-center">{{game.title.toUpperCase()}}</div> 
                    <div class="text-xs text-center">
                        <p>Release Date {{game.released_date}}</p>
                        <p>Rating {{game.rating}}</p>
                    </div>
                    <div class="font-semibold text-center">Rp {{game.price.toLocaleString()}}</div>
                </div>
                <div class="mx-auto pb-4">
                    <a href="" class="px-4 py-1 bg-red-600 rounded-xl font-bold tracking-widest text-white shadow-md hover:shadow-xl hover:bg-red-500 ">BUY</a>
                </div>
            </div>
            <!-- END CARD -->
</template>