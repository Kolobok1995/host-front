<template>
     <div class="pain-page-left">
            <ul>
                <li>Для компании</li>
                <li>Для вечеринки</li>
                <li>Настольные квесты</li>
                <li>Для детей</li>
                <li>Для взрослых</li>
            </ul>
            <button type="button" class="btn btn-outline-info catalog-more">Больше категорий</button>
        </div>
</template>


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