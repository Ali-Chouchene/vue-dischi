<script>
export default {
    name: 'GameCard',
    props: { game: Object }
}
</script>

<template>
    <div class="card h-100">
        <img v-if="game.image" :src="game.image" class="card-img-top" :alt="game.slug">
        <img v-else src='https://marcolanci.it/utils/placeholder.jpg' :alt="game.slug">
        <div class="card-body m-0 p-0">
            <h5 class="card-title">{{ game.title }}</h5>
            <!-- <p class="card-text">{{ game.description }}</p> -->
            <span class="card-price">{{ game.price }}</span>
            <a id="card-button" href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    position: relative;
    height: 240px;
    box-shadow: 5px 2px 15px 0px rgba(0, 0, 0, 0.75);
    border: 0;
    cursor: pointer;

    &:hover {
        border: 1px solid blue;
    }




    .card-title {
        position: absolute;
        top: 20px;
        left: 10px;
    }

    #card-button {
        position: absolute;
        bottom: -15px;
        right: -15px;
    }

    .card-price {
        height: 50px;
        width: 50px;
        position: absolute;
        bottom: 7px;
        left: 5px;
        background-color: rgb(255, 0, 0);
        color: #ffffff;
        border-radius: 50%;
        padding: 8px 2px;
        display: block;
        font-size: 12px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            background-color: rgb(17, 0, 255);
        }


    }
}

img {
    height: 100%;
    object-fit: cover;
    // width: 450px;
}

h5 {
    text-shadow: 0px 0px 25px rgba(255, 0, 0, 0.79);
    color: white;
    font-size: 1.5rem;

}
</style>