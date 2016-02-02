
/* Created by andres uzeda on 1/28/2016*/
//funcion para invertir cadena
/*function invertir(cadena) {
  var x = cadena.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  return cadenaInvertida;
}

//fucion para factorial
function factorial(number){
  //n × (n-1)!
  //3*2*1
  var i = number;
  var x = 1;
  if (!/^[0-9]+$/.test(number))
  {
    console.log("solo numeros");

  }else{
    if(number === 0)
    {
      return 1;
    }else{
      for(i;  i>0; i--)
      {
        x = x*i;
      }
      return x;
    }
  }

}
*/

var sayHello = function(name,cb)
{
  console.log("Hello "+name);
  cb(name);
};
sayHello("jose",function (name){
  console.log("How are you? "+name);
});
//otro
//auto ejecutable una sola vez la function
(function(a,b)
{
  var res = a+b;
  console.log('Sum es : '+res );
})(2,6);
