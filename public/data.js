$("button").click(function(){
  $.getJSON("https://barrycumbie.github.io/filehost/data.json", function(result){
    $.each(result, function(i, field){
      $("div").append(field + " ");
    });
  });
});