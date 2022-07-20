//更新必要箇所->　#更新
$('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3500,//次のスライドに切り替わる待ち時間
    speed:1500,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
            pauseOnFocus: false,//フォーカスで一時停止を無効
            pauseOnHover: false,//マウスホバーで一時停止を無効
            pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
        });
        
    //スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
    $('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
        $('.slider').slick('slickPlay');
    });   

    $(".openbtn1").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
            $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
        });
        
        $("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
            $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
            $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
        });

        $('#bands-wrapper').multiscroll({
            //sectionsColor: ['#999', '#999', '#999'],//セクションごとの背景色設定

            //#更新　
            anchors: ['area1', 'area2', 'area3','area4','area5','area6','area7'],//セクションとリンクするページ内アンカーになる名前
            
            navigation: true,//右のナビゲーション出現、非表示は false
            //navigationTooltips:['Estrella', 'THiS is trio', 'THe duo'],//右のナビゲーション現在地時に入るテキスト
            loopTop: true,//最初のセクションを上にスクロールして最後のセクションまでスクロールするかどうかを定義します。
            loopBottom: true,//最後のセクションを下にスクロールして最初のセクションまでスクロールするかどうかを定義します。
        });
