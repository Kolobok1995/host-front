<template>
    <div class="header-top">
        <div class="container-fluid header-top">
            <div class="header-left">
                <ul class="top-nav-ul">
                    <li>Оплата</li>
                    <li>Доставка</li>
                    <li>Обмен и возврат</li>
                    <li>Контакты</li>
                </ul>
            </div>
            
            <div class="header-right">
                <ul class="top-nav-ul">
                    <li>Доставка с 8:00 до 23:00</li>
                    <li>+7 (800) 800-80-80</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

  .header-top {
        background-color: #f3f3fa;
        display: flex;
        justify-content: space-between;
        padding: 3px 0;
    }

    .header-left {
        display: flex;
        width: 50%;
        justify-content: flex-start;
    }
    
    .header-right {
        display: flex;
        width: 50%;
        justify-content: flex-end;
    }

    .top-nav-ul {
        display: flex;
    }
    
    .top-nav-ul>li {
        display: flex;
        margin: 0 15px;
    }
    
    .top-nav-ul>li {
        display: flex;
    }

</style>