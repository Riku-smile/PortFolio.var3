$(function(){

    // SP
    if (window.matchMedia( '(max-width: 959px)' ).matches) {
        $(function(){
                // workSlide
    $('.work-slider').slick({
        lazyLoad: 'ondemand',
        centerMode: true,
        centerPadding: '15%',
        arrows: false
    });

    // langSlide
    $('.lang-slider').slick({
        lazyLoad: 'progressive',
        centerMode: true,
        centerPadding: '15%',
        arrows: false
    });

    // environmentTabs
    //タブクリック時
    $(".environment-nav").click(function() {
        //何個目のタブをクリックしたか
        var index = $('.environment-nav').index(this);

        //コンテンツを一旦非表示
        $('.environment-content').hide();

        //クリックしたタブに応じてコンテンツを表示
        $('.environment-content').eq(index).fadeIn();

        //タブに付与したクラス(act)を除去
        $('.environment-nav').removeClass('environment-active');

        //クリックしたタブにクラス(act)をつけます。
        $(this).addClass('environment-active')
    });
        });
    } else {
        // PC
        // workSlide
        $('.work-slider').slick({
            lazyLoad: 'ondemand',
            centerMode: true,
            centerPadding: '25%',
            prevArrow:'<div class="prev">PREV</div>',
    　　    nextArrow:'<div class="next">NEXT</div>'
        });

        // langSlide
        $('.lang-slider').slick({
            lazyLoad: 'progressive',
            centerMode: true,
            centerPadding: '25%',
            prevArrow:'<div class="prev">PREV</div>',
    　　    nextArrow:'<div class="next">NEXT</div>'
        });

        // environmentTabs
        //タブクリック時
        $(".environment-nav").click(function() {
            //何個目のタブをクリックしたか
            var index = $('.environment-nav').index(this);

            //コンテンツを一旦非表示
            $('.environment-content').hide();

            //クリックしたタブに応じてコンテンツを表示
            $('.environment-content').eq(index).fadeIn();

            //タブに付与したクラス(act)を除去
            $('.environment-nav').removeClass('environment-active');

            //クリックしたタブにクラス(act)をつけます。
            $(this).addClass('environment-active')
        });
    }
});