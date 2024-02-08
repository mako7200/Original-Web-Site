/*===========================================================*/
/*【】*/
/*===========================================================*/




/*===========================================================*/
/*【モーダルウィンドウ】*/
/*===========================================================*/

//初回のみモーダルをすぐ出す判定。
//flagがモーダル表示のstart_open後に代入される


var access = $.cookie('access');   //ユーザーのアクセス情報をクッキーから取得

if (!access) {   //アクセス情報がない場合
    flag = true;
  $.cookie('access', false);   //ページロード時に常にモーダルを表示させるためには、 $.cookie('access') の値を true にする
} else {    //アクセス情報がある場合
  flag = true;   //常にモーダルを表示させるためには、flag を true にする
}

// モーダル表示
$(".modal-open").modaal({
  start_open: flag,   //ページロード時に表示するか
  overlay_close: true,   //モーダル背景クリック時に閉じるか
  before_open: function() { // モーダルが開く前に行う動作
    $('html').css('overflow-y', 'hidden');   /*縦スクロールバーを出さない*/
},
  after_close: function() {   //モーダルが閉じた後に行う動作
    $('html').css('overflow-y', 'scroll');   /*縦スクロールバーを出す*/
}
});




/*===========================================================*/
/*【グローバルナビゲーション】*/
/*===========================================================*/

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





/*===========================================================*/
/*【水滴がポタポタ落ちる】*/
/*===========================================================*/

jQuery('#wrapper').raindrops(//指定したエリアに描画
{
    color:'#061925e6',//水の色を指定
    canvasHeight:50, //canvasの高さを指定。初期値は親の高さの50%。
    waveLength: 300,//波の長さ(広がり)を指定。数値が大きいほど長さは小さくなる。初期値は340。
    waveHeight:100,//波の高さを指定。数値が大きいほど高さは高くなる。初期値は100。
    rippleSpeed: 0.01, //波紋のスピードを指定。数値が大きいほど波紋は速くなる。初期値は0.1。
    density: 0.02,//水の波紋の量を指定。数値が大きいほど波紋は小さくなる。初期値は0.02。
    frequency:3//雨粒の落ちる頻度を指定。数値が大きいほど頻度は多くなる。初期値は3。
}
);




/*===========================================================*/
/*【画像の自動切り替え】*/
/*===========================================================*/

document.addEventListener("DOMContentLoaded", function() {
    var imageSwitch = document.querySelector('.image-switch');
    var images = ['./assets/img/59.jpg', './assets/img/26.jpg', './assets/img/11.jpg', './assets/img/32.jpg', './assets/img/55.jpg'];
    var currentIndex = 0;

    function changeImage() {
        imageSwitch.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 8000); // 秒数で画像を切り替える（1000＝1秒）
});



