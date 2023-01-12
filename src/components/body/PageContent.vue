<template>
    <div class="main-page main-container container">
        <PageContentLeftBlock />
        <router-view />
    </div>
</template>

<script>
    import PageContentLeftBlock from '@/components/body/PageContentLeftBlock';

    export default {
        components: {
            PageContentLeftBlock
        }
    }
</script>

<style scoped lang="scss">
    .main-page {
        display: flex;
    }
</style>