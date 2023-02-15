/*<style>
    .category-feed{
        margin: auto;
    }
    
    .category-feed__title{
        font: normal normal 500 16px/20px Poppins !important;
        position: relative;
        z-index: 2;
        display: block;
        vertical-align: middle;
        padding: 0;
        margin-bottom: 22px;
    }
    @media screen and (min-width: 1026px){
        .category-feed__title{
            font: normal normal 500 20px/30px Poppins !important;
        }
    }
    .category-feed__title:after {
        content: "";
        width: 100%;
        position: relative;
        left: 0;
        bottom: -1px;
        height: 2px;
        display: block;
        background-color: #6b9cd6;
    }
    @media screen and (min-width: 1026px) {
        .category-feed__title:after {
            max-width: 360px;
        }
    }
    @media screen and (max-width: 1025px) {
        .category-feed__title:after {
            max-width: 80%;
        }
    }
    
    .category-feed__container__img{
        max-width: 106px;
        width: 106px;
        max-height: 106px;
        height: 106px;
        border-radius: 50%;
        border: 5px solid #C9C9C9;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.5; 
        transition: .2s linear;
    }
    .category-feed__story__img {
        width: 100%;
        border-radius: 10px;
    }
    @media screen and (max-width: 1025px) {
        .category-feed__container__img {
            max-width: 100px;
            width: 100px;
            max-height: 100px;
            height: 100px;
        }
    }
    .category-feed__container__img:hover {
        border: 5px solid #EF7B5E;
    }
    
    .slick-center .category-feed__container__img {
           border: 5px solid #EF7B5E;
           opacity: 1;
    }
    .category-feed__img{
        border-radius: 50%;
        transition: ease-in-out .3s;
        object-fit: contain;
    }
    @media screen and (min-width: 1026px) {
        .category-feed__img{
            max-width: 106px;
            width: 106px;
            max-height: 106px;
            height: 106px;
        }
    }
    @media screen and (max-width: 1025px) {
        .category-feed__img{
            max-width: 90px;
            width: 90px;
            max-height: 90px;
            height: 90px;
        }
    }
    .category-feed__items{
        width: calc(65% - 90px);
        position: relative;
    }
    
    .category-feed__stories{
        width: calc(40% - 90px);
        max-width: 500px;
        max-height: 300px;
        overflow: hidden;
        border-radius: 10px;
    }
    .category-feed__container{
        display: flex;
        align-items: center;
        gap: 55px;
    }
    .category-feed__items .slick-list{
        padding: 0 !important;
    }  
    @media screen and (max-width: 1025px){
        .category-feed__container{
            flex-direction: column;
            width: 100%;
            margin: auto;
        }   
        .category-feed__items{
            width: 100%;
        }
        .category-feed__stories{
            width: 100%;
        }
    }
    .category-feed__item{
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 15px;
        cursor: pointer;
    }
    .category-feed__text{
        margin-top: 5px;
        font: normal normal 400 14px/20px Poppins;
        text-align: center;
    }
    .stories__container{
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100%;
        z-index: 9999;
        padding: 70px 0;
    }
    .category-feed-arrow__next,
    .category-feed-arrow__prev{
        position: absolute;
        top: 30%;
        z-index: 9;
        cursor: pointer;
    }
    @media screen and (max-width:1025px) {
        .category-feed-arrow__next,
        .category-feed-arrow__prev{
            width: 24px;
            height: 24px;
        }
    }
    .category-feed-arrow__next{
        right: -65px;
    }
    
    .category-feed-arrow__prev{
        left: -25px;
        transform: rotate(180deg);
    }
    @media screen and (max-width: 1025px) {
        .category-feed-arrow__next{
            right: 0;
        }
    
        .category-feed-arrow__prev{
            left: 0;
        }
    }
    .category-feed-arrow__next path, .category-feed-arrow__prev path {
        transition: .2s linear;
    }
    .category-feed-arrow__next:hover path, .category-feed-arrow__prev:hover path {
        fill: #EF7B5E;
    }
</style>



<div class="category-feed" id="category-feed">
    <h3 class="category-feed__title">Busque por Categoria</h3>
    <div class="category-feed__container">
        <div class="category-feed__stories">
            <div class="category-feed__story">
                <img class="category-feed__story__img" src="https://i.imgur.com/rK1459O.png" alt="">
            </div>
            <div class="category-feed__story">
                <img class="category-feed__story__img" src="https://i.imgur.com/mNsc7Ma.png" alt="">
            </div>
            <div class="category-feed__story">
                <img class="category-feed__story__img" src="https://i.imgur.com/va5YTm7.png" alt="">
            </div>
            <div class="category-feed__story">
                <img class="category-feed__story__img" src="https://i.imgur.com/OJpDUjD.png" alt="">
            </div>
            <div class="category-feed__story">
                <img class="category-feed__story__img" src="https://i.imgur.com/MCcCGdl.png" alt="">
            </div>
        </div>
        <ul class="category-feed__items">
            <li class="category-feed__item">
                <div class="category-feed__container__img">
                    <img class="category-feed__img" src="https://i.imgur.com/rK1459O.png" alt="">
                </div>
                <span class="category-feed__text">
                    Departamentos
                </span>
            </li>
            <li class="category-feed__item">
                <div class="category-feed__container__img">
                    <img class="category-feed__img" src="https://i.imgur.com/mNsc7Ma.png" alt="">
                </div>
                <span class="category-feed__text">
                    Categoria Grande
                </span>
            </li>
            <li class="category-feed__item">
                <div class="category-feed__container__img">
                    <img class="category-feed__img" src="https://i.imgur.com/va5YTm7.png" alt="">
                </div>
                <span class="category-feed__text">
                    Categoria Muito Grande
                </span>
            </li>
            <li class="category-feed__item">
                <div class="category-feed__container__img">
                    <img class="category-feed__img" src="https://i.imgur.com/OJpDUjD.png" alt="">
                </div>
                <span class="category-feed__text">
                    Departamentos
                </span>
            </li>
            <li class="category-feed__item">
                <div class="category-feed__container__img">
                    <img class="category-feed__img" src="https://i.imgur.com/MCcCGdl.png" alt="">
                </div>
                <span class="category-feed__text">
                    Categoria Grande
                </span>
            </li>
        </ul>
    </div>
</div>




<script>
    $('.category-feed__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.category-feed__stories',
        nextArrow: '<svg class="category-feed-arrow__next" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="45" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m16 1a15 15 0 1 0 15 15 15.017 15.017 0 0 0 -15-15zm4.29 15.747-5.625 5c-.937.832-2.312-.622-1.33-1.494l4.785-4.253-4.785-4.253a1 1 0 0 1 1.33-1.494l5.625 5a1.015 1.015 0 0 1 0 1.494z" fill="#253140" data-original="#000000" class=""></path></g></svg>',
        prevArrow: '<svg class="category-feed-arrow__prev" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="40" height="45" x="0" y="0" viewBox="0 0 32 32" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path d="m16 1a15 15 0 1 0 15 15 15.017 15.017 0 0 0 -15-15zm4.29 15.747-5.625 5c-.937.832-2.312-.622-1.33-1.494l4.785-4.253-4.785-4.253a1 1 0 0 1 1.33-1.494l5.625 5a1.015 1.015 0 0 1 0 1.494z" fill="#253140" data-original="#000000" class=""></path></g></svg>',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.category-feed__stories').slick({
         slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.category-feed__items',
    });
</script>*/