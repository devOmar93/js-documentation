/* Puedes llamar a métodos directamente sobre un valor de cadena: */
/* Las cadenas son primitivos, pero JavaScript crea temporalmente un
objeto String envoltorio (wrapper) para que puedas llamar métodos directamente: */
const texto = "Hola";

console.log(texto.at(1));          // o
console.log(texto.charAt(1));      // o
console.log(texto.charCodeAt(1));  // 111
console.log(texto.codePointAt(1)); // 111

const texto = "Hola Mundo Hola";

console.log(texto.indexOf("Hola"));      // 0
console.log(texto.lastIndexOf("Hola"));  // 11
console.log(texto.startsWith("Hola"));   // true
console.log(texto.endsWith("Hola"));     // true
console.log(texto.includes("Mundo"));    // true
console.log(texto.match(/Hola/g));       // ['Hola', 'Hola']
console.log(texto.search("Mundo"));      // 5

console.log("5".padStart(3, "0")); // 005
console.log("5".padEnd(3, "0"));   // 500
console.log("Hola".concat(" Mundo")); // Hola Mundo
console.log("ha".repeat(3)); // hahaha

const texto = " Hola Mundo ";

console.log(texto.split(" "));     // ['', 'Hola', 'Mundo', '']
console.log(texto.slice(1, 5));    // Hola
console.log(texto.substring(1, 5));// Hola
console.log(texto.substr(1, 4));   // Hola (obsoleto)
console.log(texto.trim());         // "Hola Mundo"
console.log(texto.trimStart());    // "Hola Mundo "
console.log(texto.trimEnd());      // " Hola Mundo"

const texto = "Hola Mundo";

console.log(texto.toLowerCase()); // hola mundo
console.log(texto.toUpperCase()); // HOLA MUNDO

console.log("mañana".toLocaleUpperCase());
// MAÑANA

console.log("á".normalize());
// á
