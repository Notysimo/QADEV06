
/* Created by andres uzeda on 1/14/2016*/
console.log("Hola choco");
/*
Returns
@pram name
@returns string
*/
/*var sayHello = function (name) {
  if (name === undefined)
  {
    return "hola mundo"
  }else {
    return "hello " + name;
  }
}
var greatin = sayHello();
console.log(greatin);
function Student(nombre)
{
    this.nombre = nombre;
}
var stu1 = new Student("jose");
console.log(stu1.nombre);
var age = '';
function calculateAge(bornyear)
{
  age = 2014-bornyear;
  return age;
}*/
//functions definition
var numbers;
var operations=function(){
    //Max, min, average, total
    //var sum=0;
    //parameters.length
    numbers=arguments;
    console.log('SUM is ',getSum(0,numbers.length-1));
    console.log('MIN is',getMin(0,numbers.length-1,10000000));
    console.log('MAX is',getMax(0,numbers.length-1,0));
    console.log('AVG is',getAVGx(0,numbers.length-1,numbers.length));

};
//funcion suma
var getSum=function(ini,fin)
{
    if (ini===fin)
    {return numbers[fin];}
    else
    {
        return numbers[ini]+getSum(ini+1,fin);
    }
};
//funcion minimo
var getMin=function(ini,fin,v)
{
if(numbers[ini] <= v){
  if (ini===fin)
  {
    v = numbers[ini];
    return v;
  }else{
    v = numbers[ini];
   return getMin(ini+1,fin,v);
  }
}else{
  if(ini===fin)
  {
    return v;
  }else{
    return getMin(ini+1,fin,v);
  }
}
};
//funcion promedio
var getAVGx = function(ini,fin,tam)
{
  if (ini===fin)
  {return (numbers[fin]/tam);}
  else
  {
      return (numbers[ini]+getSum(ini+1,fin,tam))/tam;
  }
};
//funcion Max
var getMax=function(ini,fin,v)
{
  if(numbers[ini] >= v){
    if (ini===fin)
    {
      v = numbers[ini];
      return v;
    }else{
      v = numbers[ini];
     return getMax(ini+1,fin,v);
    }
  }else{
    if(ini===fin)
    {
      return v;
    }else{
      return getMax(ini+1,fin,v);
    }
  }
};

operations(5,1,6,3,4);
