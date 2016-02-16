$(document).ready(function() {
  for (var index = 100; index >=0; index -= 1) {
    $(".lyrics").append("<p>" + index + " bottles of beer on the wall</p>");
    console.log("bottle# =" + index);
    }
});
