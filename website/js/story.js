console.clear();
$(function() {
  var $g = $(".gallery, .gallery--item");
  var $gi = $(".gallery--item");
  //*
  $g.hover(function(evt) {
    $(this).addClass("hover");
  }, function (evt) {
    $(this).removeClass("hover");
  });
  //*/
  //*
  $gi.click(function(evt) {
    $(".hover").removeClass("hover");
    $(".gallery").addClass("hover");
    $(this).addClass("hover");
  });
  //*/
});