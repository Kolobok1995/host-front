<template>
    <div class="header-main mb-4">
        <HeaderTop />
        <HeaderMiddle />
    </div>
</template>

<script>
    import HeaderTop from '@/components/header/HeaderTop';
    import HeaderMiddle from '@/components/header/HeaderMiddle';

    export default {
        name: 'HeaderMain',
        components: {
            HeaderTop,
            HeaderMiddle
        }
    }
</script>