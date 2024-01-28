

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