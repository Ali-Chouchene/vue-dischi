<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header class="bg-body-tertiary">
        <div class="container py-2">
            <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="/">
                            <h5>Home</h5>
                        </a>
                        <a class="nav-link" aria-current="page" href="7games-page">
                            <h5>Videogames</h5>
                        </a>
                        <a class="nav-link" href="7contact">
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
    z-index: 1;

}
</style>