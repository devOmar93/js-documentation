/* delete
Sirve para eliminar propiedades de objetos. */

const persona = {
  nombre: "Ana",
  edad: 20
};

delete persona.edad;

console.log(persona.edad); // undefined

//En arrays no es recomendable:
const arr = [1, 2, 3];
delete arr[1];
console.log(arr);
// [1, empty, 3]

/* 
typeof
Devuelve una cadena indicando el tipo de dato.
*/
typeof 10;         // "number"
typeof "Hola";     // "string"
typeof true;       // "boolean"
typeof undefined;  // "undefined"
typeof [];         // "object"
typeof {};         // "object"
typeof function(){}; // "function"
typeof null; // "object"


/* 
void
Evalúa una expresión y siempre devuelve undefined.
*/
void 0; // undefined
void (5 + 3); // undefined

/* Aunque la expresión se ejecuta, su resultado se descarta. */
void console.log("Hola");