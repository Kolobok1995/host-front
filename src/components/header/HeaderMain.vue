<template>
    <div class="header-main container-fluid">
        <HeaderTopBar />
        <HeaderMiddle />
    </div>
</template>

<script>
import HeaderTopBar from '@/components/header/HeaderTopBar'
import HeaderMiddle from '@/components/header/HeaderMiddle'

export default {
    name: 'HeaderMain',
    components: {
        HeaderTopBar,
        HeaderMiddle
    }
}
</script>

<style>
    dl, ol, ul {
        margin-top: 0;
        margin-bottom: 0;
        padding: 0;
    }

    .container-fluid {
        padding: 0 25px
    }
</style>