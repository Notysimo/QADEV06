/* Created by andres uzeda on 2/11/2016*/
var JSTest = function(number){
  this.number = number;
}
//function getFactorial @param number return int
JSTest.prototype.getFactorial = function () {
  var i = this.number;
  var x = 1;
  if (!/^[0-9]+$/.test(this.number))
  {
    console.log("solo numeros");
  }else{
    if(this.number === 0)
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
};
//

// function countVowels @param paragraph return vocals counts
JSTest.prototype.countVowels = function (paragraph) {
  var x = paragraph.length;
  var a=0;
  var e=0;
  var i=0;
  var o=0;
  var u=0;
  while (x>=0) {
    if(paragraph.charAt(x)==='a')
    {
      a=a+1;
    }
    if(paragraph.charAt(x)==='e')
    {
      e=e+1;
    }
    if(paragraph.charAt(x)==='i')
    {
      i=i+1;
    }
    if(paragraph.charAt(x)==='o')
    {
      o=o+1;
    }
    if(paragraph.charAt(x)==='u')
    {
      u=u+1;
    }
    x--;
  }
  return ' total de a: '+a+' total de e: '+e+' total de i: '+i+' total de o: '+o+' total de u: '+u;
};
//function evalParagraph
JSTest.prototype.evalParagraph = function(cadena,char) {
  var x = cadena.length;
  var count=0;
  var palabras=[];
  var palabras = cadena.split(" ");
  while (x>=0) {
    if(cadena.charAt(x)===char)
    {
      count=count+1;
    }
    x--;
  }
  for (var n in palabras) {
      var y = n.length;
      while (y>=0) {
        if(n.charAt(y)===char)
        {
          return n;
        }
        y--;
      }
  }
  return ' total de '+char+' : '+count+' El arreglo tiene: '+palabras.length;
};
