<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header class="bg-body-tertiary">
        <div class="container py-2">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="nav-link d-lg-none" href="/">
                    <img class="page-icon img-fluid rounded"
                        src="https://img.freepik.com/premium-vector/video-game-shop-logo_1056-48.jpg?w=50" alt="">
                </a>
                <div class="collapse navbar-collapse" id="navbar">
                    <div class="navbar-nav">
                        <a class="nav-link d-none d-lg-block" href="/">
                            <img class="page-icon img-fluid rounded"
                                src="https://img.freepik.com/premium-vector/video-game-shop-logo_1056-48.jpg?w=50" alt="">
                        </a>
                        <a class="nav-link d-flex align-items-center" href="/">
                            <h5>Home</h5>
                        </a>
                        <a class="nav-link d-flex align-items-center" aria-current="page" href="/games">
                            <h5>Videogames</h5>
                        </a>
                        <a class="nav-link d-flex align-items-center" href="/contact">
                            <h5>Contact</h5>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss">
header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

}
</style>