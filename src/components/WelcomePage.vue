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
        <h2 class="mt-3 test text-center">Our New Games</h2>
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                <div v-for="game in store.games" class="carousel-item active">
                    <router-link :to="{ name: 'game-detail', params: { slug: game.slug } }">
                        <img v-if="game.image" :src="game.image" class="img-fluid" :alt="game.slug">
                        <img v-else src='https://marcolanci.it/utils/placeholder.jpg' class="img-fluid" :alt="game.slug">
                    </router-link>

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

h2 {
    text-transform: uppercase;
    text-shadow: 0 0 5px black;
}

.test {

    background-image: linear-gradient(to right, #FF4136, #FFDC00, #FF851B);
    background-size: 0% 100%;
    background-position: 0% 100%;
    background-repeat: no-repeat;
    transition: background-size 1.5s ease-out;
    text-align: center;

    &:hover {

        background-size: 100% 100%;
        transition: background-size 1s ease-in-out;
        cursor: pointer;
    }
}
</style>