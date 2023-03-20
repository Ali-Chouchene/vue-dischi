<script >
import AppHeader from './components/AppHeader.vue';
export default {
    name: 'App',
    components: { AppHeader, },
    data: () => ({

    }),

};
</script>

<template >
    <AppHeader></AppHeader>
    <main id="base">
        <RouterView />
    </main>
</template>

<style lang="scss"></style>