<template>
    <div class="catalog-left">
        <ul>
            <li>Для мальчиков</li>
            <li>Для девочек</li>
        </ul>
    </div>
</template>

<style>
    .catalog-left {
        width: 320px;
        min-height: 150px;
        background-color: rgb(247, 4, 4);
    }

    .catalog-left ul {
        display: flex;
        flex-flow: column-reverse;
    }
    
    .catalog-left li {
        display: flex;
    }
    
</style>