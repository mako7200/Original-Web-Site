
// 以下はチャットGPTによる記述。一旦コメントアウト。以下の記述でも反応する。

// $(document).ready(function() {
//     $(".open-btn").click(function () {
//         $(this).toggleClass('active');
//         $("#g-nav").toggleClass('panel-active');
//         $(".circle-bg").toggleClass('circle-active');
//     });

//     $("#g-nav a").click(function () {
//         $(".open-btn").removeClass('active');
//         $("#g-nav").removeClass('panel-active');
//         $(".circle-bg").removeClass('circle-active');
//     });
// });


//【グローバルナビゲーション】
$(".open-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panel-active');//ナビゲーションにpanel-activeクラスを付与
    $(".circle-bg").toggleClass('circle-active');//丸背景にcircle-activeクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".open-btn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panel-active');//ナビゲーションのpanel-activeクラスを除去
    $(".circle-bg").removeClass('circle-active');//丸背景のcircle-activeクラスを除去
});