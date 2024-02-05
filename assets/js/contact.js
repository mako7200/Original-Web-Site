

//【ローディング】
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 2000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: 'white',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
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


//【背景の動き】水滴がポタポタ落ちるアニメーション

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


//【動く背景】雪が舞うアニメーション
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,//この数値を変更すると雪の数が増減できる
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#e0ffff"
      },
      "shape": {
        "type": "circle",   //形状は画像を指定
        "stroke": {
          "width": 3,
          "color": "#e0ffff"
        },
        "image": {
          "src": "./assets/img/白.jpg",   //画像を指定
          "width": 120,
          "height": 120
        }
      },
      "opacity": {
        "value": 0.7,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 20,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
      },
      "move": {
        "enable": true,
        "speed": 0.5,//この数値を小さくするとゆっくりな動きになる
        "direction": "bottom",//落ちる方向（上はtop・下はbottom）
        "random": true,//動きはランダム
        "straight": false,//動きをとどめない
        "out_mode": "out",//画面の外に出るように描写
        "bounce": false,//跳ね返りなし
        "attract": {
          "enable": true,
          "rotateX": 1200,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
        },
        "onclick": {
          "enable": false,
        },
        "resize": true
      }
    },
    "retina_detect": true
  }); 

