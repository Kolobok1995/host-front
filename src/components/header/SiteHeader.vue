<template>
    <div class="header-main mb-4">
        <SiteHeaderTop />
        <SiteHeaderMiddle />
    </div>
</template>

<script>
    import SiteHeaderTop from '@/components/header/site_header_top/SiteHeaderTop';
    import SiteHeaderMiddle from '@/components/header/site_header_middle/SiteHeaderMiddle';

    export default {
        name: 'SiteHeader',
        components: {
            SiteHeaderTop,
            SiteHeaderMiddle
        }
    }
</script>
