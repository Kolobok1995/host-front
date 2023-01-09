<template>
    <div 
        class="cart-block" 
        v-on:mouseover="this.openModal"
    >
        <i class='fas fa-shopping-basket'></i>
        <span class="badge badge-pill badge-light">1</span>
        <SiteHeaderMiddleToolbarCartBlockModal />

    </div>
</template>

<script>
    import SiteHeaderMiddleToolbarCartBlockModal from "@/components/header/site_header_middle/SiteHeaderMiddleToolbarCartBlockModal";

    export default {
        name: "CartBlock",
        components: {
            SiteHeaderMiddleToolbarCartBlockModal
        },
        methods: {
            openModal: function () {
                this.$emit('openModal');
            }
        }
    }
</script>

<style scoped lang="scss">
    .middle-header-toolbar-block>div>span {
        @include toolbar-badge;
    }
</style>