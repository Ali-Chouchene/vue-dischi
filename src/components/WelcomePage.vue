<script >
import { store } from '../data/store.js'
export default {
    name: 'WelcomePage',
    data: () => ({
        store
    }),
}
</script>

<template>
    <div class="container">
        <h2 class="mt-3 text-center">Our New Games</h2>
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div v-for="game in store.games" class="carousel-item active">
                    <img v-if="game.image" :src="game.image" class="img-fluid" :alt="game.slug">
                    <img v-else src='https://marcolanci.it/utils/placeholder.jpg' class="img-fluid" :alt="game.slug">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#carousel {
    height: 650px;
    width: 100%;
    margin: 2rem 0;

    .carousel-inner {
        height: 100%;
        width: 100%;
    }

    .carousel-item {
        height: 100%;
        width: 100%;
    }

    img {
        width: 100%;
        height: 100%;
    }
}
</style>