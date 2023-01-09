<template>
    <div class="middle-header main-container container mt-2 nb-2">
        <div class="logo-block">
            <img class="logo" src="@/assets/logo.png" alt="">
        </div>
        <SiteHeaderMiddleSearch />
        <SiteHeaderMiddleToolbar />
    </div>
</template>

<script>
import SiteHeaderMiddleSearch from '@/components/header/site_header_middle/SiteHeaderMiddleSearch'
import SiteHeaderMiddleToolbar from '@/components/header/site_header_middle/SiteHeaderMiddleToolbar'

    export default {
        name: 'App',
        components: {
            SiteHeaderMiddleSearch,
            SiteHeaderMiddleToolbar
        }
    }
</script>

<style scoped lang="scss">
   .middle-header {
        @include flex-row;
    }

    .logo-block {
        height: 56px;
        margin: 15px 0;
        position: relative;
        left: -4px;
        width: 200px;

        .logo {
            display: block;
            height: 100%;
        }
    }

   
</style>