

// 🟦アニメーションを試験的に導入ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 600 - Math.random() * 100;   //テキストの変化速度を変更
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
//   🟦---------------------------------------------------------------------------------





// 🟢試験的に導入（動く背景）ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
particlesJS("particles-js",{
    "particles":{
      "number":{
        "value":38,//この数値を変更すると幾何学模様の数が増減できる
        "density":{
          "enable":true,
          "value_area":800
        }
      },
      "color":{
        "value":"#ffffff"//色
      },
      "shape":{
        "type":"polygon",//形状はpolygonを指定
        "stroke":{
          "width":0,
        },
    "polygon":{
      "nb_sides":3//多角形の角の数
    },
    "image":{
      "width":190,
      "height":100
    }
    },
      "opacity":{
      "value":0.664994832269074,
      "random":false,
      "anim":{
        "enable":true,
        "speed":2.2722661797524872,
        "opacity_min":0.08115236356258881,
        "sync":false
      }
      },
      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":false,
          "speed":40,
          "size_min":0.1,
          "sync":false
        }
      },
      "line_linked":{
        "enable":true,
        "distance":150,
        "color":"#ffffff",
        "opacity":0.6,
        "width":1
      },
      "move":{
        "enable":true,
        "speed":6,//この数値を小さくするとゆっくりな動きになる
        "direction":"none",//方向指定なし
        "random":false,//動きはランダムにしない
        "straight":false,//動きをとどめない
        "out_mode":"out",//画面の外に出るように描写
        "bounce":false,//跳ね返りなし
        "attract":{
          "enable":false,
          "rotateX":600,
          "rotateY":961.4383117143238
        }
      }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":false,
          "mode":"repulse"
        },
    "onclick":{
      "enable":false
    },
    "resize":true
      }
    },
    "retina_detect":true
  });
  // 🟢試験的に導入（動く背景）ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー




  