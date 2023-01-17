<template>
    <div class="cart"
            v-on:mouseleave="visibleCart = false"
    >
        <i class="cart-icon"
             :style="backgroundIcon"
             v-on:mouseover="visibleCart = true"
        >
            <span class="badge rounded-pill text-bg-danger">
                +99
            </span>
        </i>

        <div class="modal-window card"
            :class="visibleClass"
         >
            <div class="card-body">
                <h5 class="cart-title text-end">Товары в корзине</h5>
                <h6 class="card-subtitle mb-2 text-end">Количество товаров: 256 штук</h6>
                <div class="cart-products">
                    <div class="cart-product mb-2 mt-1">
                        <div class="image">image</div>
                        <div class="name">Смертельные материалы: Освобождение</div>
                        <div class="count">5 000 шт.</div>
                        <div class="price">9 000 900 P</div>
                    </div>
                </div>
                <hr>
                <div class="result mb-3">
                    <h6>Итого</h6>
                    <h6>35 552 002 руб.</h6>
                </div>
                <button type="button" class="btn btn-danger to-cart">В корзину</button>
                <button type="button" class="btn btn-outline-danger to-first-cart">Быстрый заказ</button>
            </div>
        </div>
    </div>
</template>

<script>

export default({
    name: 'SiteHeaderMiddleCart',
    data() {
        return {
            visibleCart: false
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
            return this.visibleCart ? 'show' : 'hidden';
        }
    },
})
</script>

<style lang="scss" scoped>
    .cart-icon {
        display: flex;
        position: relative;
        height: 45px;
        width: 45px;
        margin: 6px;
        span {
            position: absolute;
            left: 25px;
            top: -3px;
            padding: 5px 8px;
            font-size: 12px;
        }
    }
    .cart {
        position: relative;
        display: float;
    }
    .modal-window {
        position: absolute;
        top: 55px;
        right: 0;
        width: 500px;
        min-height: 240px;
        background-color: #fff;
        z-index: 999;
        border: 1px solid #ccc;
        border-radius: 7px;
    }

    .cart-product {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .image {
            min-height: 50px;
            min-width: 50px;
            height: 60px;
            width: 60px;
            border: 1px solid #ccc;
            margin-right: 10px;
        }
        .name {
            width: 200px;
            margin-right: 15px;
        }
        .count {
            width: 70px;
            margin-right: 15px;
        }
        
        .price {
            width: 90px;
            text-align: end;
        }
    }
    .result {
        display: flex;
        justify-content: space-between;
    }

    .to-cart, .to-first-cart {
        margin-right: 20px;
    }

</style>