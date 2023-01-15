<template>
    <div class="content">
        <div :class="classNameBackground">
            <router-view />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                classNameBackground: 'background-home',
            };
        },
        beforeUpdate() {
            this.classNameBackground = this.$route.fullPath !== '/' ? 'background' : 'background-home';
        }
    }
</script>
