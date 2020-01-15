$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var result = $("#name").val();
    var result2 = $("#food").val();
    var result3 = $("#band").val();
    var result4 = $("#color").val();
    //var number2 = parseInt($("#add2").val());
    // alert(add(number1, number2));
    //var result = add(number1, number2); //removes the alert box
    $("#output").text(result).toggle();
    $("#output2").text(result2).toggle();
    $("#output3").text(result3).toggle();
    $("#output4").text(result4).toggle();
    });
  });