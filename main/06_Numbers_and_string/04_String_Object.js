/* Puedes llamar a métodos directamente sobre un valor de cadena: */
/* Las cadenas son primitivos, pero JavaScript crea temporalmente un
objeto String envoltorio (wrapper) para que puedas llamar métodos directamente: */
const texto = "Hola";

console.log(texto.at(1));          // o
console.log(texto.charAt(1));      // o
console.log(texto.charCodeAt(1));  // 111
console.log(texto.codePointAt(1)); // 111

const texto1 = "Hola Mundo Hola";

console.log(texto1.indexOf("Hola"));      // 0
console.log(texto1.lastIndexOf("Hola"));  // 11
console.log(texto1.startsWith("Hola"));   // true devuelve true si la cadena comienza con el texto indicado
console.log(texto1.endsWith("Hola"));     // true devuelve true si la cadena termina con el texto indicado.
console.log(texto1.includes("Mundo"));    // true
console.log(texto1.match(/Hola/g));       // ['Hola', 'Hola']
console.log(texto1.search("Mundo"));      // 5

console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0"));   // 500
console.log("Hola".concat(" Mundo")); // Hola Mundo
console.log("ha".repeat(3)); // hahaha

const texto2 = " Hola Mundo ";

console.log(texto2.split(" "));     // ['', 'Hola', 'Mundo', ''] Convierte una cadena en un array separándola por un delimitador.
console.log(texto2.slice(1, 5));    // Hola
console.log(texto2.substring(1, 5));// Hola
console.log(texto2.substr(1, 4));   // Hola (obsoleto)
console.log(texto2.trim());         // "Hola Mundo"
console.log(texto2.trimStart());    // "Hola Mundo "
console.log(texto2.trimEnd());      // " Hola Mundo"

const texto3 = "Hola Mundo";

console.log(texto3.toLowerCase()); // hola mundo
console.log(texto3.toUpperCase()); // HOLA MUNDO

console.log("mañana".toLocaleUpperCase());
// MAÑANA

console.log("á".normalize());
// á
