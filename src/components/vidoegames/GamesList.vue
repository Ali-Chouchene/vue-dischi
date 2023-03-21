<script >
import axios from 'axios';
import GameCard from '../vidoegames/GameCard.vue';
const apiUri = 'http://127.0.0.1:8000/api/videogames';
export default {
    name: 'GamesList',
    components: { GameCard },
    data: () => ({
        videogames: [],
    }),
    methods: {
        fetchVideogames() {
            axios.get(apiUri).then(res => {
                this.videogames = res.data;
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.fetchVideogames();
    }
};
</script>
<template>
    <div class="container my-4">
        <h2 class="mb-4">All Games</h2>
        <div class="row g-4 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            <div v-for="game in videogames" :key="game.id" class="col mb-3">
                <GameCard :game="game" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    height: 250px;
}
</style>