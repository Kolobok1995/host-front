<template>
    <div id="home">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="@/assets/slider/1.png" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/slider/2.png" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="@/assets/slider/3.png" alt="Third slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <div class="tile-block mt-5">
            <div class="card">
                Офигенная скидка
            </div>
            
            <div class="card">
                Просто скидка
            </div>
        </div>

        <div class="tile-block-title mt-3 mb-1">Популярные товары</div>
        <div class="tile-block products-populare">
            <div class="card">
                Игра 1
            </div>
            
            <div class="card">
                Игра 2
            </div>
            
            <div class="card">
                Игра 3
            </div>
            
            <div class="card">
                Игра 4
            </div>
        </div>

        <div class="tile-block mt-3">
            <div class="card">
                Офигенная скидка
            </div>
            
            <div class="card">
                Просто скидка
            </div>
            
            <div class="card">
                Просто скидка
            </div>
        </div>


        <div class="tile-block-title mt-3 mb-1">Для компании</div>
        <div class="tile-block products-populare">
            <div class="card">
                Игра 1
            </div>
            
            <div class="card">
                Игра 2
            </div>
            
            <div class="card">
                Игра 3
            </div>
            
            <div class="card">
                Игра 4
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card {
        border-color: $baseColor;
    }
    
    #home {
        width: 100%;
    }

    .tile-block {
        @include flex-row;
        flex-wrap: wrap;
    }

    .tile-block>div {
        flex-grow: 1;
        margin: 5px;
        height: 80px;
        justify-content: center;
        align-items: center;
    }
    
    .tile-block-title {
        font-size: 20px;
        font-weight: 600;
        padding-left: 6px;
    }

    .products-populare>div {
        height: 280px;
    }
</style>