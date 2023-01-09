<template>
    <div class="middle-header-toolbar-block">
        <div>
            <i class='far fa-user-circle'></i>
        </div>
        <div>
            <i class='far fa-heart'></i>
            <span class="badge badge-pill badge-light">1</span>
        </div>
        <CartBlock />
    </div>
</template>

<script>

import CartBlock from '@/components/header/site_header_middle/SiteHeaderMiddleToolbarCartBlock';

export default {
    name:'HeaderMiddleToolbar',
    components:{
        CartBlock
    }
}

</script>

<style scoped lang="scss">
    .middle-header-toolbar-block {
        @include flex-row;
        font-size: 30px;
        color: $baseColor;
    }
    .middle-header-toolbar-block>div {
        position: relative;
        width: 55px;
    }
    .middle-header-toolbar-block>div>span {
        @include toolbar-badge;
    }
</style>