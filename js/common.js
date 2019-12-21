$(function(){
  //アンカーリンク　スムーズスクロール
  var headH = $('header').height();
  $('a[href^="#"]').on("click", function() {
    console.log(headH);
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").stop().animate({scrollTop:position-headH}, 400, "swing");
    return false;
  });

  var topBtn = $('#pagetop');
  //topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
    //ボタンの表示方法
      //topBtn.fadeIn();
      topBtn.addClass('on');
    } else {
    //ボタンの非表示方法
      //topBtn.fadeOut();
      topBtn.removeClass('on');
    }
  });

  $('#pagetop a').on('click', function(){
    $(this).addClass('on');
    $('body, html').animate({ scrollTop: 0 }, function(){
      $('#pagetop a').removeClass('on');
    });
  })


  //アンカーメニューをスクロールで表示
  /*var $win = $(window),
  $cloneNav = $('header').clone(true).addClass('clone-nav').appendTo('body'),
  showClass = 'is-show';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 120 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });*/

  //sp用メニュー
  $('.menu-trigger').on('click', function(){
    $('#contents').toggleClass('blur');
    $('#page_visual').toggleClass('blur');
    $('.menu-trigger').toggleClass('active');
    if($('.menu-trigger').hasClass('active')){
      $('.menu-trigger').parent().next('ul').fadeIn();
      $('#menu_area').toggleClass('active');
    }else{
      $('.menu-trigger').parent().next('ul').fadeOut();
      $('#menu_area').toggleClass('active');
    }
  });

  $('.js-sec').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
      activePoint.addClass('active');
    }
  },{offset : '70%'});

  $('#page_visual h1').waypoint(function(direction){
    var activePoint = $(this.element);
    //scroll down
    if (direction === 'down') {
      activePoint.addClass('active');
    }
  },{offset : '70%'});

  /*var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
          $('.anchor_ul').removeAttr('style');
          $('.menu-trigger').removeClass('active');
      }, 200);
  });*/

  //アクセスがあったら記憶。
  //cookieの値がonじゃなかったら表示させる
  if ($.cookie('bnrRead') != 'on') {
    var num = $('body').data('num');
    if(num != undefined){
      var result = window.confirm(num+'巻への情報へアクセスしますが、よろしいでしょうか？');
      if(result){

      }else{
        $.cookie('bnrRead', 'off', {
          expires: 180
        });
        window.close();
      }
    }
  }

  $.cookie('bnrRead', 'on', {
    expires: 180 //cookieの有効日数
  });

});