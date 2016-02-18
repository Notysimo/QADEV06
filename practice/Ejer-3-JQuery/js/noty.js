/*
$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".
*/
$(document).ready(function(){
//jquery es case sensitive
//$("p").fadeOut();
  $("#test").click(function(){
  		//esto escribe txt y html
          //alert("Text: " + $("p").text());
          //alert("HTML: " + $("p").html());
        //los siguientes ejemplos son set
        //$("p").text("Hello world!");
        $("#test").html("<b>Hello world!</b>");
        //este funciona con inputs no mas xD
        //$("p").val("Chucho!!!");
     });
  $("#noty").click(function(){
  	$("a").attr({
        "href" : "http://www.w3schools.com/jquery",
        "title" : "W3Schools jQuery Tutorial"
    });
  });
  //prepend() existe pero este se abre antes del codigo hmtl
  $("#generator").click(function(){
  	$("#res1").append(" <b>generado al presionar el p </b>.");
  });
  //prueba de remove
  $("#cleaner").click(function(){
  	$("#res1").remove();
  });
  //esto creado por mi de prueba
  $("#limpiador").click(function(){
  	$("#res1").text("");
  });
  //uso de AJAX
  $("#finder").click(function(event){
  	$("#div1").load("demo_test.txt");
  });
});