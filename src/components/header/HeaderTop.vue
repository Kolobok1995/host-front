<template>
    <div class="top-menu">
        <div class="top-menu-container main-container container">
            <div class="top-menu-container-left">
                <div>
                     <a href="+78008008080"><i class="fa fa-phone-square"></i> +7 (800) 800-80-80</a>
                </div>
                <div>
                    <i class='far fa-clock'></i> Доставка с 8:00 до 23:00   
                </div>
            </div>
            
            <div class="top-menu-container-right">
                <div><a href="/pay">Оплата</a></div>
                <div><a href="/delivery">Доставка</a></div>
                <div><a href="/service">Обмен и возврат</a></div>
                <div><a href="/feedback">Написать нам</a></div>
            </div>
        </div>
    </div>
</template>

<style>
    .top-menu-container {
        background: #9679cf
    }

    .top-menu {
        background: #9679cf;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:hover {
        background: #F0DAA8
    }

    .top-menu-container-left {
        display: flex;
        width: 50%;
    }
    .top-menu-container-left>div i {
        margin-right: 5px;
        font-size: 16px;
    }

    .top-menu-container-left>div {
        margin-right: 20px;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;
        padding: 10px 0 ;
        color: #F0DAA8
    }

    .top-menu-container {
        display: flex;
        height: 30px;
    }

    .top-menu-container-right {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }
    
    .top-menu-container-right>div {
        margin-left: 20px;
        font-weight: 500;
        font-size: 15px;
        display: flex;
        align-items: center;
        padding: 10px 0 ;
    }
    .top-menu-container-left>div a, .top-menu-container-right>div a {
        color: #F0DAA8 !important;
    }
</style>