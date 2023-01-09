<template>
    <div class="top-menu">
        <div class="top-menu-container main-container container">
            <div class="container-left">
                <div class="link-block">
                     <a href="+78008008080"><i class="fa fa-phone-square top-icon"></i> +7 (800) 800-80-80</a>
                </div>
                <div class="link-block">
                    <a href=""><i class='far fa-clock top-icon'></i> Доставка с 8:00 до 23:00</a>
                </div>
            </div>
            
            <div class="container-right">
                <div class="link-block"><a href="/pay">Оплата</a></div>
                <div class="link-block"><a href="/delivery">Доставка</a></div>
                <div class="link-block"><a href="/service">Обмен и возврат</a></div>
                <div class="link-block"><a href="/feedback">Написать нам</a></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
   .top-menu-container {
        display: flex;
        height: 30px;
    }

    .top-menu {
        background: $baseColor;

        a {
            color: $baseColorText
        }

        .container-left {
            @include flex-row;
            width: 50%;

            .link-block {
                margin-right: 20px;
            }
        }

        .container-right {
            @include flex-row;
            justify-content: flex-end;
            width: 50%;
            
            .link-block {
                margin-left: 20px;
            }
        }

        .top-icon {
            margin-right: 5px;
            font-size: 16px;
        }

        .link-block {
            @include flex-row;
            font-weight: 500;
            font-size: 15px;
        }
    }
</style>