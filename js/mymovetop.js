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
