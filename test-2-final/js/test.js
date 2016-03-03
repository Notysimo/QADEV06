 var  Calulator = function(){

 };


 Calulator.prototype.draw = function(){
  var content = document.createElement("DIV");
  var size = 10;
  var input = document.createElement("INPUT");
  input.id = "result";
  content.appendChild(input);
  for (var i = 0; i < size; i++)
        {
          var span = document.createElement("span");
          span.innerText = ""+i;
          span.id = "button";
          span.addEventListener('click', addInput());
          content.appendChild(span);
        }
  var plus =  document.createElement("span");
  plus.innerText = "+";
  plus.id = "button";
  var equals =  document.createElement("span");
  equals.innerText = "=";
  equals.id = "button";
  content.appendChild(plus);
  content.appendChild(equals);
  $('body').append(content);
 };

var addInput = function(){
  $("#result").text("1");
};