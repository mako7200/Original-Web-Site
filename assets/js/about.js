


//【背景の動き】水滴がポタポタ落ちるアニメーション

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

//アイコンを一定時間ごとに自動で切り替える
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


