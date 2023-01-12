<template>
    <div 
        v-bind:class="{ open: isShow }"
        v-on:mouseout="this.closeModal"
        class="open-cart"
    >
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <div class="card-text cart-products">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Колличество</th>
                    <th scope="col">Цена</th>
                    </tr>
                </thead>
                    <tbody class="text-center">
                        <tr 
                            v-for="item in [1,2,3]" :key="item[0]"
                        >
                            <th scope="row">{{item}}</th>
                            <td>Забытый остров</td>
                            <td>3</td>
                            <td>300р</td>
                        </tr>
                    </tbody>
                </table>
                <hr>
                <div class="cart-toolbar-tool-price">
                    <h6 class="card-subtitle text-muted text-left">Сумма заказа</h6>
                    <h6 class="card-subtitle text-muted text-right">{{ totalPrice }}</h6>
                </div>
                <div class="cart-toolbar-buttons mt-3">
                    <button type="button" class="btn btn-outline-info catalog-more">Перейти к оплате</button>
                    <button type="button" class="btn btn-outline-info catalog-more">Перейти в корзину</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SiteHeaderMiddleToolbarCartBlockModal",
        data() {
            return {
                title: "Товары в корзине",
                totalPrice: "3 000р",
                isShow: false,
            }
        },
        methods: {
            openModal: function() {
                this.isShow = true;
            },
            closeModal: function() {
                this.isShow = false;
            }
        }, 
        created: function() {
            this.$parent.$on('openModal', this.openModal);
        }
    }
</script>

<style scoped lang="scss">
    .open-cart.open{
        @include flex-row;
    }

    .open-cart {
        display: none;
        border: 1px solid $baseColor;
        background: #fff;
        border-radius: 4px;
        font-size: 16px;
        position: absolute;
        top: 47px;
        right: 0;
        z-index: 1000;
        width: 450px;
        min-height: 250px;

        .cart-toolbar-tool-price {
            @include flex-row(space-between);
            margin: 0 15px;
        }
        .cart-toolbar-buttons>* {
            margin-left: 10px;
        }
    }



</style>