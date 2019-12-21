$(window).on('load', function() {
  setTimeout(function(){
    $("#thunder").addClass("active");
    $("#smoke").addClass("active");
    $("#main_area").addClass("active");
  },200);
  setTimeout(function(){
    $("#thunder").removeClass("active");
    $("#hand").addClass("active");
    $("#head").addClass("active");
    $("#songs").addClass("active");
    $("#sp_wall").addClass("active");
  },500);
  setTimeout(function(){
    $("#wall").addClass("active");
    $("svg").css("display","none");
    $("#wall img").css("display","block");
  },600);
  setTimeout(function(){
    $("h1").addClass("active");
  },1000);
  setTimeout(function(){
    $("#this_site").addClass("active");
  },2000);

});