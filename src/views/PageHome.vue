<template>
    <div id="home" >
        <PageHomeSlider />
        <div class="home-container">
            <router-link :to="'/category/' + 213213"> 123123 </router-link>
            
         </div>
    </div>
</template>

<script>
    import PageHomeSlider from '@/components/body/PageHomeSlider'
    
    export default {
        name: "PageHome",
        components: {
            PageHomeSlider
        }
    }
</script>

<style scoped lang="scss">

</style>