$(function(){
  //rollmenu
  //$(".path_link ul").css("width","1000px");
  $(".path_link ul").mousewheel(function(e, delta) {
    var sl;
    sl = $(this).parent().scrollLeft() + (delta * -22);
    $(this).parent().scrollLeft(sl);
    return e.preventDefault();
  });

  var num = $('body').data('num');
  $(".path_link ul li").eq(num).addClass("on");

});