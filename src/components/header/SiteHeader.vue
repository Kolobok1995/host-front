<template>
    <div class="header container">

        <SiteHeaderTop />
        <SiteHeaderMiddle />
    </div>
</template>

<script>
    import SiteHeaderTop from '@/components/header/SiteHeaderTop'
    import SiteHeaderMiddle from '@/components/header/SiteHeaderMiddle'

    export default {
        name: 'SiteHeader',
        components: {
            SiteHeaderTop,
            SiteHeaderMiddle
        }
    }
</script>

<style lang="scss" scoped>

</style>