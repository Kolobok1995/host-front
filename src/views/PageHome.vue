<template>
    <div id="home" >
        <PageHomeSlider />
        <div class="home-container">
            <router-link :to="'/category/' + 213213"> 123123 </router-link>
            <div class="container">
                <div class="tile-block mt-5">
                    <div class="card">
                        Офигенная скидка
                    </div>
                    
                    <div class="card">
                        Просто скидка
                    </div>
                </div>

                <div class="tile-block-title mt-3 mb-1">Популярные товары</div>
                <div class="tile-block products-populare">
                    <div class="card">
                        Игра 1
                    </div>
                    
                    <div class="card">
                        Игра 2
                    </div>
                    
                    <div class="card">
                        Игра 3
                    </div>
                    
                    <div class="card">
                        Игра 4
                    </div>
                </div>

                <div class="tile-block mt-3">
                    <div class="card">
                        Офигенная скидка
                    </div>
                    
                    <div class="card">
                        Просто скидка
                    </div>
                    
                    <div class="card">
                        Просто скидка
                    </div>
                </div>

                <div class="tile-block-title mt-3 mb-1">Для компании</div>
                <div class="tile-block products-populare">
                    <div class="card">
                        Игра 1
                    </div>
                    
                    <div class="card">
                        Игра 2
                    </div>
                    
                    <div class="card">
                        Игра 3
                    </div>
                    
                    <div class="card">
                        Игра 4
                    </div>
                </div>
            </div>
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