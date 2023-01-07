<template>
    <div class="middle-header main-container container mt-2 nb-2">
        <div class="logo-block">
            <img class="logo" src="@/assets/logo.png" alt="">
        </div>

        <div class="serach-block">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Поиск по товарам" aria-label="Поиск по товарам" aria-describedby="basic-addon2">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Поиск</button>
                </div>
            </div>
        </div>
        
        <div class="middle-header-toolbar-block">
            <div>
                <i class='far fa-user-circle'></i>
            </div>
            <div>
                <i class='far fa-heart'></i>
            </div>
            <div class="cart-block">
                <i class='fas fa-shopping-basket'></i>
            </div>
        </div>
    </div>
</template>

<style>
   .middle-header {
        display: flex;
        align-items: center;
    }

    .logo-block {
        height: 60px;
        margin: 15px 0;
        position: relative;
        left: -4px;
        width: 200px;
    }

    .logo {
        display: block;
        height: 100%;
    }

    .serach-block {
        flex-grow: 1;
        margin: auto 40px;
    }
    
    .middle-header-toolbar-block {
        display: flex; 
        justify-content: flex-end;
        font-size: 30px;
        color: #5025a7;
    }
    .middle-header-toolbar-block>div {
        margin-right: 20px;
    }

    input.form-control, button.btn.btn-outline-secondary {
        border: 1px solid #5e31b8;
        color: #555
    }

    .cart-block {
        font-size: 31px;
    }

</style>