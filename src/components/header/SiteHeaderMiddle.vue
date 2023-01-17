<template>
    <div class="header-middle">
        <div class="logo">
            <router-link :to="'/'">
                <img class="logo" src="@/assets/logo.png" alt="">
            </router-link>
        </div>
        <div class="catalog">
            <SiteHeaderMiddleCategory
                v-bind:backgroundIcon = "backgroundIcon('list_menu')"
             />
        </div>
        <div class="search">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Поиск игр..." aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button" id="button-addon2">Поиск</button>
                </div>
            </div>
        </div>
        <div class="toolbar">
            <div><i class="user" :style="backgroundIcon('user')"></i></div>
            <div><i class="heart" :style="backgroundIcon('heart')"><span class="badge rounded-pill text-bg-danger">+99</span></i></div>
            <SiteHeaderMiddleCart
                v-bind:backgroundIcon = "backgroundIcon('cart')"
             />
        </div>
    </div>
</template>

<script>
import SiteHeaderMiddleCart from '@/components/header/SiteHeaderMiddleCart'
import SiteHeaderMiddleCategory from '@/components/header/SiteHeaderMiddleCategory'

export default({
    name: 'HeaderMiddle',
    components: {
        SiteHeaderMiddleCart,
        SiteHeaderMiddleCategory
    },
    data() {
        return {
            //
        }
    },
    methods: {
        backgroundIcon(iconName) {
            try {
                const pathIcon = require('@/assets/icons/' + iconName + '.svg');
                return 'background-image: url('+ pathIcon + ');'
            } catch (e) {
                console.error('Icon not found: ' + iconName);
            }
        }
    }
})
</script>



<style lang="scss" scoped>
    .header-middle {
        display: grid;
        grid-template-columns: 1fr 180px 3fr 1fr;
        align-items: center;
        gap: 15px;
        padding: 10px 0;
        .logo {
            height: 70px;
            span {
                font-size: 20px;

            }
        }
        
        .toolbar {
            display: flex;
            justify-self: end;
            position: relative;
            i {
                display: block;
                height: 45px;
                width: 45px;
                margin: 6px;
            }
            .heart {
                position: relative;
                span {
                    position: absolute;
                    left: 25px;
                    top: -3px;
                    padding: 5px;
                    font-size: 12px;
                }
            }
        }
    }

    
    @media (max-width: 994px) {
        .header-middle {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            gap: 0px;
            .logo {
                grid-area: 1 / 1 / 2 / 3;
                text-align: center;
            }
            .search {
                grid-area: 2 / 1 / 3 / 3;
            }
            
            .catalog {
                grid-area: 3 / 1 / 4 / 2;
            }
            .toolbar {
                margin-right: 10px;
            }
        }
    }
</style>