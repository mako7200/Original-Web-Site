

//ハンバーガーメニュー
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



//アイコンを一定時間ごとに自動で切り替える
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




// 画像拡大
function zoomImage(img) {
  img.classList.toggle("zoomed"); // クリックされた画像の拡大状態を切り替える
}

