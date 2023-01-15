<template>
    <div class="header container">

        <div class="container text-center">
            <div class="row ">
                <div class="col info text-left">
                    <div>
                        +7 (800) 800-80-80
                    </div>
                    <div>
                        с 08:00 до 09:00
                    </div>
                </div>
                <div class="col ">
                    <ul>
                        <li><a href="">Оплата</a></li>
                        <li><a href="">Доставка</a></li>
                        <li><a href="">Обмен и возврат</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col">
                1 of 3
                </div>
                <div class="col">
                2 of 3
                </div>
                <div class="col">
                3 of 3
                </div>
            </div>
        </div>

        <div class="info">
        
        </div>
        <hr>
        <div class="logo"><img class="logo" src="@/assets/logo.png" alt=""></div>
        <div class="catalog"><button type="button" class="btn btn-danger">Каталог игр</button></div>
        <div class="search">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Поиск игр..." aria-label="Recipient's username" aria-describedby="button-addon2">
                <div class="input-group-append">
                    <button class="btn btn-secondary" type="button" id="button-addon2">Поиск</button>
                </div>
            </div>

        </div>
        <div  class="toolbar">туллбар</div>
    </div>
</template>

<script>
    export default {
        name: 'SiteHeader'
    }
</script>

<style lang="scss" scoped>

</style>