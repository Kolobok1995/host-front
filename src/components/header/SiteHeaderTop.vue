<template>
    <div class="header ">
        <div class="header-block">
            <a class="header-link" href=""> <i class="material-icons">phone</i> +7 (800) 800-80-80</a>
            <a class="header-link" href=""><i class="material-icons">access_time</i> с 08:00 до 09:00</a>
        </div>
        <div class="header-block">
            <a class="header-link" href="">Оплата</a>
            <a class="header-link" href="">Доставка</a>
            <a class="header-link" href="">Обмен и возврат</a>
            <a class="header-link" href="">Контакты</a>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .header {
        border-bottom: 1px solid #ccc;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        padding: 2px 0;
        flex-wrap: wrap;
    }

    .header-block {
        display: flex;
        padding: 0;
        white-space: nowrap;
    }
    .header-link {
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

    @media (max-width: 994px) {
        .header {
            justify-content: space-around;
        }

        .header-block {
            margin-top: 10px;
        }
    }
</style>