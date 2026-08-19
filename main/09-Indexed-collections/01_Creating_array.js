/** Creando un array**/

/**
    Un array es una lista ordenada de valores a los que se hace referencia mediante un nombre y un índice.

    JavaScript no cuenta con un tipo de dato específico para arrays. Sin embargo, puedes usar el
    Array objeto predefinido y sus métodos para trabajar con arrays en tus aplicaciones.
    Este Array objeto incluye métodos para manipular arrays de diversas maneras, como unirlos,
    invertirlos y ordenarlos. Además, dispone de una propiedad para determinar la longitud del array
    y otras propiedades para usar con expresiones regulares.
**/

// Estructura para crear arrays. La length propiedad del array se establece al número de argumentos.
const arr1 = new Array(element0, element1, /* …, */ elementN);
const arr2 = Array(element0, element1, /* …, */ elementN);
const arr3 = [element0, element1, /* …, */ elementN];

// Ejemplo
const array = new Array(1,2,3);
const array2 = Array(1,2,3);
const array3 = [1, 2, 3];

console.log(array);
console.log(array2);
console.log(array3);
console.log(array.length); // longitud del array es 3


// Para crear una matriz con longitud distinta de cero, pero sin ningún elemento, se puede
// utilizar cualquiera de las siguientes opciones:
const arrayLength = 10; // arrayLength tiene que ser number.
const arr1 = new Array(arrayLength);
const arr2 = Array(arrayLength);

// Aquí se crea con longitud inicial 0 y luego se asigna el tamaño del array
const arr3 = [];
arr3.length = arrayLength;
console.log(arr3);

// Creación e inicialización de un array con un solo elemento
const arr = [42];
console.log(arr);
console.log(arr.length);