
/* Created by andres uzeda on 2/2/2016*/

var i;
   var max = -Infinity;
   for(i = 0; i < arguments.length; i++) {
       if (arguments[i] > max) {
           max = arguments[i];
       }
   }
   return max;
