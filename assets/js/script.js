


/*===========================================================*/
/*【】*/
/*===========================================================*/




/*===========================================================*/
/*【ローディング】*/          // (テキストのカウントアップ+バーの設定)
/*===========================================================*/

var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 2000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: 'red',//進捗ゲージのカラー
	trailWidth:0.1,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'16px',
			color: 'white',
      'text-shadow':'1px 1px 4px rgb(255, 255, 255)'
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
  flag = false;   //常にモーダルを表示させるためには、flag を true にする
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
/*【ハンバーガーメニュー】*/
/*===========================================================*/

// $(".open-btn").click(function () {
//   $(this).toggleClass('active');
// });
$(document).ready(function(){
  $(".open-btn").click(function () {
    $(this).toggleClass('active');
    $(".navbar").toggle();
  });
  // メニューが表示された時にハンバーガーメニューを非表示にする
  $(".navbar a").click(function() {
    $(".open-btn").removeClass('active');
    $(".navbar").hide();
  });
});



/*===========================================================*/
/*【水滴がポタポタ落ちるアニメーション】*/      //(背景の動き)
/*===========================================================*/

jQuery('#wrapper').raindrops(//指定したエリアに描画
{
    color:'#061925e6',//水の色を指定
    canvasHeight:150, //canvasの高さを指定。初期値は親の高さの50%。
    waveLength: 100,//波の長さ(広がり)を指定。数値が大きいほど長さは小さくなる。初期値は340。
    waveHeight:500,//波の高さを指定。数値が大きいほど高さは高くなる。初期値は100。
    rippleSpeed: 0.02, //波紋のスピードを指定。数値が大きいほど波紋は速くなる。初期値は0.1。
    density: 0.01,//水の波紋の量を指定。数値が大きいほど波紋は小さくなる。初期値は0.02。
    frequency:3//雨粒の落ちる頻度を指定。数値が大きいほど頻度は多くなる。初期値は3。
}
);




/*===========================================================*/
/*【画像を自動で切替】*/
/*===========================================================*/

document.addEventListener("DOMContentLoaded", function() {
  var imageSwitch = document.querySelector('.image-switch');
  var images = ['./assets/img/26.jpg', './assets/img/M.jpg', './assets/img/M3.jpg', './assets/img/Sedaバー.jpg', './assets/img/21.jpg', './assets/img/16.jpg','./assets/img/17.jpg','./assets/img/15.jpg', './assets/img/25.jpg', './assets/img/27.jpg', './assets/img/11.jpg'];
  var currentIndex = 0;

  function changeImage() {
      imageSwitch.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 6000); // 秒数で画像を切り替える（1000＝1秒）
});





/*===========================================================*/
/*【画像を拡大】         ※ 後で外す予定     */
/*===========================================================*/
function zoomImage(img) {
  img.classList.toggle("zoomed"); // クリックされた画像の拡大状態を切り替える
}


