var comparacion = function(array1, array2){
  if (array1.length!==array2.length){
    return false;
  }else{
    for (var i = 0; i < array.length; i++) {
        console.log(array1,array2);
      if(array1[i]!==array[i]){
        document.write("Los arreglos son iguales");
        return false;

      }
    }
    return true;
  }
}

var arreglo1 = [1,2,3,4,5,6,7,8,9,0];
var arreglo2 = [1,2,3,4,5,6,7,8,9,0];

comparacion(arreglo1,arreglo2);
