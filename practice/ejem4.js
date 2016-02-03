
/* Created by andres uzeda on 2/2/2016*/

var parOimpar = (function(valor){
        if(valor%2 == 0){
                return function() {console.log("es un número par"); } 
        }else{
                return function() {console.log("es un número impar");}
        }
})