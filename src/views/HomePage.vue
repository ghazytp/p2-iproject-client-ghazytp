<script>
import { mapActions, mapState } from "pinia";
import Carousel from "../components/Carousel.vue";
import GameCard from "../components/GameCard.vue";
import { useGameStore } from "../stores/games";
export default {
    data() {
        return {
            pageNum: 0
        }
    },
  components: {
    Carousel,
    GameCard,
  },
  computed: {
    ...mapState(useGameStore, ['allGamesData'])
  },
  methods: {
    ...mapActions(useGameStore, ['fetchAllGames']),
    nextPage() {
        this.pageNum++
        this.fetchAllGames(this.pageNum)
    },
    prevPage() {
        if(this.pageNum > 0) {
            this.pageNum--
        }
        this.fetchAllGames(this.pageNum)
    }
    
  },
  created() {
    this.fetchAllGames()
  }
};
</script>

<template>
  <Carousel />
  <section class="py-6 w-11/12 mx-auto mt-4">
    <div class="text-center text-3xl m-2 pb-4 font-bold">GAME DATA</div>
    <div class="flex gap-4 mx-20 mb-8 justify-end">
      <div  v-if="(pageNum > 0)" class="bg-blue-500 py-1 px-2 rounded-xl hover:bg-blue-300">
        <a @click.prevent="prevPage()" href="">PREVIOUS</a>
      </div>
      <div class="bg-blue-500 py-1 px-2 rounded-xl hover:bg-blue-300">
        <a @click.prevent="nextPage()"  href="">NEXT</a>
      </div>
    </div>
    <!-- GRID CONTAINER -->
    <div class="grid grid-cols-5 gap-y-8 gap-x-8 w-fit mx-auto">
      <GameCard v-for="game in allGamesData" :key="game.id" :game="game" />
    </div>
  </section>
</template>
