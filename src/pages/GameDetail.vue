<script>
import axios from 'axios';
const apiBase = 'http://127.0.0.1:8000/api/videogames/';
export default {
    name: 'GameDetail',
    components: {},
    data: () => ({
        game: null,
    }),
    methods: {
        getGame() {
            const endpoint = apiBase + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.game = res.data;
            }).catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        this.getGame();
    }

}
</script>

<template></template>
<style lang="scss" scoped></style>