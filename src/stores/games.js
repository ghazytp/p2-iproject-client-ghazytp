import { defineStore } from 'pinia'
import { useToast } from "vue-toastification";
import axios from 'axios'

const BASE_URL = "http://localhost:3000"

export const useGameStore = defineStore('game', {
    state: () => ({
        allGamesData: []
    }),
    actions: {
        async fetchAllGames(pageNum) {
            if(!pageNum) {
                pageNum = 1
            }
            console.log(pageNum, 'dari game');
            try {
                const { data } = await axios({
                    url: BASE_URL+'/games/lists',
                    method: 'GET',
                    params: {
                        page: pageNum
                    }
                })
                this.allGamesData = data
                console.log('BERHASIL FETCH DATA GAMES');
            } catch (err) {
                console.log(err);
                
            }
        },

        async buyGame(id){
            try {
                
            } catch (err) {
                console.log(err);
            }
        }
    }

})