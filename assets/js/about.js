/*===========================================================*/
/*【】*/
/*===========================================================*/





/*===========================================================*/
/*【ローディング】*/          // (テキストのカウントアップ+バーの設定)
/*===========================================================*/

//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 2000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: 'black',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: 'white',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
      'text-shadow':'1px 1px 10px rgb(255, 255, 255)'
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash_text").fadeOut(10);//フェイドアウトでローディングテキストを削除
	$(".loader_cover-up").addClass("coveranime");//カバーが上に上がるクラス追加
	$(".loader_cover-down").addClass("coveranime");//カバーが下に下がるクラス追加
	$("#splash").fadeOut();//#splashエリアをフェードアウト
});





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



/*===========================================================*/
/*【アコーディオン】*/
/*===========================================================*/

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});