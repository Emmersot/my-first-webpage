$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $(document).ready(function() {
    $("button#light").click(function() {
      $("body").removeClass();
      $("body").addClass("light-background");
    });
  });
});