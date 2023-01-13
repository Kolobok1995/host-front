<template>
     <div class="pain-page-left">
            <ul>
                <li 
                    v-for="category of categories"
                    :key="category.id"
                ><router-link :to="'/categories/' + category.slug"> {{ category.name }} </router-link></li>
            </ul>
            <button type="button" class="btn btn-outline-info catalog-more">Больше категорий</button>
        </div>
</template>

<script>
    import Fetch from '@/service/Fetch'


    export default {
        name: 'PageContentLeftBlock',
        data() {
            return {
                categories: []
            }
        },
        async mounted() {
            let categories = await Fetch.doRequest('http://127.0.0.1:8099/api/exchanger', 'POST', {
                "mode" : "get_categories_data",
                "data": ['']
            })

            this.categories = categories.data;
        }
           // async mounted: () {
           //     await Fetch.doRequest('http://127.0.0.1:8099/api/exchanger', 'POST', ['test'])
         //   }
    }
</script>

<style scoped lang="scss">
    .pain-page-left {
        width: 295px;
        @include flex-column;
    }

    .pain-page-left ul, .pain-page-left li {
        @include flex-column(flex-start);
        font-size: 16px;
        margin-bottom: 10px;
    }
</style>