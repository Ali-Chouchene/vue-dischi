<script>
export default {
    name: 'GameCard',
    props: { game: Object }
}
</script>

<template>
    <div class="card h-100">
        <img v-if="game.image" :src="game.image" class="card-img-top" :alt="game.slug">
        <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <p class="card-text">{{ game.description }}</p>
            <p>{{ game.price }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>