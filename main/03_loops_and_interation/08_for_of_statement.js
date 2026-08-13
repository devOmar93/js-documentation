/* 
La for...of instrucción crea un bucle que itera sobre objetos iterables 
(incluidos Array, Map, Set, argumentsobjeto, etc.), 
invocando un gancho de iteración personalizado con instrucciones que se 
ejecutarán para el valor de cada propiedad distinta. 
*/

for (variable of iterable)
  statement

/* Ejemplo */
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}

for (const i of arr) {
  console.log(i);
}

/* Ejemplo */
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}

console.log(Object.entries(obj))