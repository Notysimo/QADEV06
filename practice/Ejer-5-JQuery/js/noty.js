/*
$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".

[name="someName"] by attribute
$("span .menu [href='http://www.jalasoft.com/success']")[0].click()
$($("form input")[2]).val("abc 123")
$("input#email").val("luffy@gmail.com")
*/
$(document).ready(function(){
//jquery es case sensitive
//$("p").fadeOut();
  $("#move_up").click( function() {
  $("#change_me").animate({top:30},200);
  });//end move_up
  $("#move_down").click( function() {
  $("#change_me").animate({top:500},2000);
  });//end move_down
  $("#color").click( function() {
  $("#change_me").css("color", "orange");
  });//end color
  $("#disappear").click( function() {
  $("#change_me").toggle("slow");
  });//end disappear 
});