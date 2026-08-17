/* La instrucción for...in se utiliza para recorrer las propiedades enumerables de un objeto. */
/* En cada iteración, la variable recibe el nombre de una propiedad (la clave), no el valor. */

for (variable in object)
  statement

/* Ejemplo 1*/
function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
}

/* Ejemplo 2 */
const car = {
  make: "Ford",
  model: "Mustang"
};

for (const propiedad in car) {
  console.log(propiedad);
}

/* Problema al usar for...in con Arrays */
/* 
Aunque pueda resultar tentador utilizar esto como una forma de iterar sobre 
Array los elementos, la for...in instrucción devolverá el nombre de las 
propiedades definidas por el usuario, además de los índices numéricos.
*/

/* 
for...in instrucción itera sobre propiedades definidas por el usuario además 
de los elementos de la matriz, si se modifica el objeto Array (como agregar 
propiedades o métodos personalizados).
*/

console.log(typeof([1,2,3,4]))