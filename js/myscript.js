// JavaScript Document

$(function() {
  var topBtn = $('#moveTop');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop > 2000) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
});

// Lazy Loadを起動する
$(function(){
  $('img.lazy').lazyload({
    threshold: 200,			// 200pxの距離まで近づいたら表示する
    effect: "fadeIn",		// じわじわっと表示させる
    effect_speed: 1000,		// 1秒かけて表示させる
  });
});
