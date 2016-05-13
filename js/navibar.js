// JavaScript Document

$(function() {
  var nav = $('.navi');
  var unav = $('.uNavi')
  //navの位置
  var navTop = nav.offset().top;
  var uNavTop = unav.offset().top;
  //スクロールするたびに実行
  nav.hide();
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    //スクロール位置がnavの位置より下だったらクラスfixedを追加
    if (winTop >= uNavTop) {
      nav.fadeIn("fast");
      //nav.addClass('fixed')
    } else if (winTop <= uNavTop) {
      nav.fadeOut("fast");
      //nav.removeClass('fixed')
    }
  });
});
