<template>
    <div class="container" :key="$route.params.slug">
        <h1 class="mb-4">Настольные игры <span> {{ category.name }} </span></h1>
    
            <div class="category-block">
                <div class="filters">
                    <div class="card">

                        filter
                    </div>
                </div>
                <div class="grid">
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                    <div class="card">1</div>
                </div>
            </div>
 
    </div>
</template>


<script>
import Fetch from "@/service/Fetch"

export default {
    name: 'PageCategories',
    data() {
        return {
            slug: this.$route.params.slug,
            category: {}
        }
    },
    updated() {
        this.slug = this.$route.params.slug
    },
    watch: {
        slug() {
            this.loadCategory();
        }
    },
    mounted() {
        this.loadCategory();
    },
    
    methods: {
        async loadCategory() {
            const result = await Fetch.doRequest('http://127.0.0.1:8099/api/exchanger', 'POST', {
                "mode": "get_categories_data",
                "data": {
                    "slug": this.slug
                }
            });

            if (result.success) {
                this.category = result.data;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .category-block {
        display: flex;
    }
    .filters {
        min-width: 300px;
        margin-right: 15px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 320px);
        grid-auto-rows: 320px;
        gap: 15px;
        justify-content: end;
    }
    h1>span{
        text-transform: lowercase;
    }
</style>