/** Métodos de arrays **/

// Método concat() //
/* Este método concat() combina dos o más arrays y devuelve una nuevo array. */
let myArray = ["1", "2", "3"];
const newArray = myArray.concat("a", "b", "c");
console.log(newArray);

// Método join() //
/* Este método join() combina todos los elementos de un array en una cadena de texto. */
const myArray2 = ["Wind", "Rain", "Fire"];
const list = myArray2.join(" - "); // list is "Wind - Rain - Fire"
console.log(list);

// Método push() //
/* Este método push() es mutable (altera el array), agrega uno o más elementos
   al final de un array y devuelve el length array resultante. */
const myArray3 = ["1", "2"];
const lengthmyArray3 = myArray3.push("3"); // myArray is now ["1", "2", "3"]
console.log(lengthmyArray3);
console.log(myArray3);

// Método pop() //
/* Este método pop() es mutable (altera el array), elimina el último elemento de un array
   y devuelve dicho elemento. */
const myArray4 = ["1", "2", "3"];
const last = myArray4.pop(); // myArray4 is now ["1", "2"], last = "3"
console.log(last);
console.log(myArray4);

// Método shift() //
/* Este método shift() es mutable (altera el array), elimina el primer elemento de un array
   y devuelve dicho elemento. */
const myArray5 = ["1", "2", "3"];
const first = myArray5.shift(); // myArray5 is now ["2", "3"], first is "1"
console.log(first);
console.log(myArray5);

// Método unshift() //
/* Este método unshift() es mutable (altera el array), agrega uno o más elementos al principio
   de un array y devuelve la nueva longitud del array. */
const myArray6 = ["1", "2", "3"];
const lengthmyArray6 = myArray6.unshift("4", "5"); // myArray6 becomes ["4", "5", "1", "2", "3"]
console.log(lengthmyArray6);
console.log(myArray6);

// Método slice() //
/* Este método slice() extrae una sección de un array y devuelve un nuevo array. */
const myArray7 = ["a", "b", "c", "d", "e"];
const newArray7 = myArray7.slice(1, 4); // [ "b", "c", "d"]
// inicia con el index 1 hasta la cantidad de elementos (4) solicitados.
console.log(newArray7);
console.log(myArray7);

// Método at() //
/* Este método at() devuelve el elemento en el índice especificado del array,
   o undefined un valor nulo si el índice está fuera de rango. Se utiliza especialmente
   para índices negativos que acceden a elementos desde el final del array. */
const myArray8 = ["a", "b", "c", "d", "e"];
const itemmyArray8 = myArray8.at(-2); // "d", the second-last element of myArray8
console.log(itemmyArray8);
console.log(myArray8);

// Método splice() //
/* Este método splice() es mutable (altera el array), elimina elementos de un array y
   (opcionalmente) los reemplaza. Devuelve los elementos que se eliminaron del array. */
const myArray9 = ["1", "2", "3", "4", "5"];
const deletedItems = myArray9.splice(1, 3, "a", "b", "c", "d");
// myArray9 is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.
console.log(deletedItems);
console.log(myArray9);

// Método reverse() //
/* Este método reverse() es mutable (altera el array), transpone los elementos de un array,
   in situ: el primer elemento se convierte en el último y el último en el primero.
   Devuelve una referencia al array. */
const myArray10 = ["1", "2", "3"];
myArray10.reverse(); // transposes the array so that myArray10 = ["3", "2", "1"]
console.log(myArray10);

// Método flat() //
/* El método flat() devuelve un nuevo array con todos los elementos del sub-array concatenados
   recursivamente hasta la profundidad especificada. */

// Ejemplo sin especificar la profundidad.
const myArray11 = [1, 2, [3, 4]];
const newArray11 = myArray11.flat(); // myArray11 is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
console.log(newArray11);
console.log(myArray11);

// Ejemplo con especificación de la profundidad.
const myArray12 = [1, 2, [3, [4, 5]]];
const newArray12 = myArray12.flat(2);
console.log(newArray12);
console.log(myArray12);

// Método sort() //
/* Este método sort() es mutable (altera el array), ordena los elementos de un array directamente
   en ella y devuelve una referencia a dicho array. */

// Ejemplo
const myArray13 = ["Wind", "Rain", "Fire"];
myArray13.sort(); // sorts the array so that myArray13 = ["Fire", "Rain", "Wind"]
console.log(myArray13);

/* sort() también puede recibir una función de devolución de llamada para determinar cómo se comparan
   los elementos del array. Esta función se invoca con dos argumentos, que son dos valores del array.
   La función compara estos dos valores y devuelve un número positivo, negativo o cero, indicando
   el orden de los dos valores. */

// Ejemplo ordenará el array por la última letra de una cadena:
const myArray14 = ["Wind", "Rain", "Fire"];
const sortFn = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1; // Negative number => a < b, a comes before b
  } else if (a[a.length - 1] > b[b.length - 1]) {
    return 1; // Positive number => a > b, a comes after b
  }
  return 0; // Zero => a = b, a and b keep their original order
};
myArray14.sort(sortFn); // sorts the array so that myArray14 = ["Wind","Fire","Rain"]
console.log(myArray14);

// Ejemplo ordenar números de menor a mayor
const numbers = [10, 5, 80, 1];
numbers.sort((a, b) => a - b); // [1, 5, 10, 80]
console.log(numbers);

// Método indexOf() //
/* El método indexOf() busca en el array searchElement y devuelve el índice de la
   primera coincidencia. El segundo parámetro indica el índice del array por
   el cual comenzará la búsqueda. */
const letters = ["a", "b", "a", "b", "a"];
console.log(letters.indexOf("b")); // 1
console.log(letters.indexOf("b", 2)); // 3
console.log(letters.indexOf("z")); // -1, because 'z' was not found

// Método lastIndexOf() //
/* El método lastIndexOf() funciona como indexOf, pero comienza por el final
   y busca hacia atrás. El segundo parámetro indica el índice del array por
   el cual comenzará la búsqueda. */
const letters2 = ["a", "b", "c", "d", "a", "b"];
console.log(letters2.lastIndexOf("b")); // 5
console.log(letters2.lastIndexOf("b", 4)); // 1
console.log(letters2.lastIndexOf("z")); // -1

// Método forEach() //
/* El método forEach() se ejecuta callback en cada elemento del array y devuelve undefined. */
const letters3 = ["a", "b", "c"];
letters3.forEach((element) => {
  console.log(element);
});
// Logs:
// a
// b
// c

// Método map() //
/* El método map() devuelve un nuevo array con el valor de retorno obtenido al
   ejecutarlo callback en cada elemento del array. */
const letters4 = ["a", "b", "c"];
const letters5 = letters4.map((item) => item.toUpperCase());
console.log(letters5); // ['A', 'B', 'C']

// Método flatMap() //
/* El método flatMap() se ejecuta map() seguido de una flat() de profundidad 1. */
const letters6 = ["a", "b", "c"];
const letters7 = letters6.flatMap((item) => [
  item.toUpperCase(),
  item.toLowerCase(),
]);
console.log(letters7); // ['A', 'a', 'B', 'b', 'C', 'c']

// Método filter() //
/* El método filter() devuelve una nueva matriz que contiene los elementos para
   los que callbackse devolvió true. */
const myArray15 = ["a", 10, "b", 20, "c", 30];
const newArray15 = myArray15.filter((item) => typeof item === "number");
console.log(newArray15); // [10, 20, 30]

// Método find() //
/* El método find() devuelve el primer elemento para el que callback se devolvió true. */
const myArray16 = ["a", 10, "b", 20, "c", 30];
const item = myArray16.find((item) => typeof item === "number");
console.log(item); // 10

// Método findLast() //
/* El método findLast() devuelve el último elemento para el que callbackse devolvió true. */
const myArray17 = ["a", 10, "b", 20, "c", 30];
const element = myArray17.findLast((item) => typeof item === "number");
console.log(element); // 30

// Método findIndex() //
/* El método findIndex() devuelve el índice del primer elemento para el que
   callback se devolvió true. */
const myArray18 = ["a", 10, "b", 20, "c", 30];
const newElement = myArray18.findIndex((item) => typeof item === "number");
console.log(newElement); // 1

// Método findLastIndex() //
/* El método findLastIndex() devuelve el índice del último elemento para el
   que callbackse devolvió true. */
const myArray19 = ["a", 10, "b", 20, "c", 30];
const newElement2 = myArray19.findLastIndex((item) => typeof item === "number");
console.log(newElement2); // 5

// Método every() //
/* El método every() devuelve true si callback devuelve true para cada elemento en el array. */
function isNumber(value) {
  return typeof value === "number";
}
const myArray20 = [1, 2, 3];
console.log(myArray20.every(isNumber)); // true
const myArray21 = [1, "2", 3];
console.log(myArray21.every(isNumber)); // false

// Método some() //
/* El método some() devuelve verdadero true si callback devuelve verdadero true para
   al menos un elemento en el array. */
function isNumber2(value) {
  console.log(value);
  return typeof value === "number";
}
const myArray22 = [1, 2, 3];
console.log(myArray22.some(isNumber2)); // true
const myArray23 = [1, "2", 3];
console.log(myArray23.some(isNumber2)); // true
const myArray24 = ["1", "2", "3"];
console.log(myArray24.some(isNumber2)); // false

// Método reduce() //
/* Este método reduce() se aplica callback(accumulator, currentValue, currentIndex, array)
   a cada valor del array con el fin de reducir la lista de elementos a un único valor.
   La reduce función devuelve el valor final obtenido callback.

   Si initialValuese especifica, entonces callbackse llama con initialValuecomo primer valor
   de parámetro y el valor del primer elemento en la matriz como segundo valor de parámetro.

   Si no initialValue se especifica, los dos primeros parámetros serán el primer y el segundo
   elemento del array. En cada llamada posterior, el valor del primer parámetro será el que
   se devolvió en la llamada anterior, y el valor del segundo parámetro será el siguiente
   elemento del array.callbackcallback

   Si callbackse necesita acceder al índice del elemento que se está procesando, o acceder a
   todo el array, están disponibles como parámetros opcionales.*/

const myArray25 = [10, 20, 30];
const total = myArray25.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60
// Observación:
// El reduceRight()método funciona como reduce(), pero comienza con el último elemento.
// reduce y reduceRight son los métodos iterativos para matrices menos obvios.
// Deben utilizarse para algoritmos que combinan dos valores de forma recursiva
// para reducir una secuencia a un único valor.
