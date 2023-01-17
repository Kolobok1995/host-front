<template>
    <div class="category-block">
        <button 
            type="button" 
            class="btn btn-danger"
            v-on:click="visibleCategories = ! visibleCategories"
        >
            <i class="list-menu"
                :style="backgroundIcon"
                
            ></i>Каталог игр
        </button>
        <div 
            class="modal-window-block"
            :class="visibleClass"
            v-on:click="visibleCategories = ! visibleCategories"
        >
            <div class="modal-window card" 
            >
                <ul>
                    <li 
                        v-for="category in categories"
                        v-bind:key="category.id"
                    >
                        <router-link :to="'/category/' +  category.slug "> {{ category.name }} </router-link>
                    </li>
                </ul>
            </div>
            <div class="background-modal"></div>
        </div>
    </div>
</template>

<script>
import Fetch from "@/service/Fetch"

export default({
    name: 'SiteHeaderMiddleCategory',
    data() {
        return {
            categories: {},
            visibleCategories: false
        }
    },    
    props: {
        backgroundIcon: {
            type: String,
            required: true
        }
    },
    computed: {
        visibleClass: function () {
            return this.visibleCategories ? 'show' : 'hidden';
        }
    },
    async mounted() {
        const result = await Fetch.doRequest('http://127.0.0.1:8099/api/exchanger', 'POST', {
            "mode": "get_categories_data",
            "data": ["*"]
        });

        if (result.success) {
            this.categories = result.data;
        }
    }

})
</script>

<style lang="scss" scoped>
    .background-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 998;
        background-color: rgba(112, 112, 112, 0.25);
    }
   .category-block {
        position: relative;
   }
   .category-block > button {
        width: 100%;
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 999;
        position: relative;
    }

    .list-menu {
        height: 20px;
        width: 20px;
        margin-right: 10px;
    }

    .modal-window.card {
        transition: 3s;
        width: 180px;
        position: absolute;
        left: 0;
        z-index: 999;
        top: 45px;
    }

    ul {
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        margin: 5px 0;
    }
    li {
        padding: 10 0;
        display: flex;
        align-items: center;
        min-height: 30px;
        margin: 5px 0;
    }

    li>a {
        display: flex;
        padding: 0 10px;
        color: #333;
        font-size: 16px;
        text-decoration: none;
        &:first-child {
            padding-left: 0;
        }
        &:last-child {
            padding-right: 0;
        }
        i {
            font-size: 17px;
            display: inline-flex;
            align-items: center;
            margin-right: 5px;
        }

        &:hover {
            color: red;
        }
    }
</style>