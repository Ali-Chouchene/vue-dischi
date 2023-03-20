<script >
export default {
    name: 'WelcomePage'
};
</script>

<template>
    <div class="container">
        <h2 class="mt-3">Our New Videogames</h2>
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="http://via.placeholder.com/600x300" class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="http://via.placeholder.com/600x300" class="d-block img-fluid w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="http://via.placeholder.com/600x300" class="d-block img-fluid w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
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