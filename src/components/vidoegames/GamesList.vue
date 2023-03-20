<script >
export default {
    name: 'GamesList',
};
</script>
<template>
    <div class="container my-4">
        <h2 class="mb-4">All Games</h2>
        <div class="row g-4 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            <div v-for="index in 21" class="col">
                <div class="card">
                    <img src="http://via.placeholder.com/600x500" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>