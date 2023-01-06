<template>
    <div class="header-middle  ">
        <div class="logo-block">
            <img class="logo" src="@/assets/logo.png" alt="">
        </div>

        <div class="header-middle-search-block">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>

        <div class="header-middle-toolbar">
            <div>
                <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
            <div>
                <i class="fa fa-heart" aria-hidden="true"></i>
            </div>
            <div>
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>

        </div>
        
    </div>
</template>

<style>
  .header-middle {
        height: 100px;
        justify-content: space-around;
        display: flex;
    }

    .header-middle > div {
        justify-content: center;
        margin: 0 10px;
    }

    .logo-block {
        width: 300px;

        display: flex;
        align-items: center;
    }

    .logo {
        width: 100%;
    }

    .header-middle-search-block {
        display: flex;
        flex-grow: 1;
        align-items: center;
    }

    .header-middle-toolbar {
        display: flex;
        align-items: center;
    }
    
    .header-middle-toolbar i {
        font-size: 35px;
        margin: 15px;
        
    }

</style>