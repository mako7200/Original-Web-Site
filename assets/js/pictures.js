

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





//【背景の動き】雪が降るアニメーション
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
      "value": "#F6FF00"//中心の色を指定
    },
    "shape": {
      "type": "circle",//形状は画像を指定
      "stroke": {
        "width": 3,
        "color": "#F6FF00"//外側の色を指定
      },
      "image": {
        "src": "./assets/img/黄.jpg",//画像を指定
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
      "speed": 1,//この数値を小さくするとゆっくりな動きになる
      "direction": "top",//上に向かって落ちる（下はbottom）
      "random": true,//動きはランダム
      "straight": false,//動きをとどめない
      "out_mode": "out",//画面の外に出るように描写
      "bounce": false,//跳ね返りなし
      "attract": {
        "enable": true,
        "rotateX": 500,
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


// 画像拡大
function zoomImage(img) {
  img.classList.toggle("zoomed"); // クリックされた画像の拡大状態を切り替える
}

