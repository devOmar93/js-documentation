/* 
El objeto integrado Number tiene propiedades para constantes numéricas, como valor máximo, 
no es un número e infinito. 
No se pueden cambiar los valores de estas propiedades y se utilizan de la siguiente manera:
*/

// CONSTANTES

console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308
console.log(Number.MIN_VALUE);         // 5e-324
console.log(Number.NaN);               // NaN
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.EPSILON);           // 2.220446049250313e-16
console.log(Number.MIN_SAFE_INTEGER);  // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991

// MÉTODOS ESTÁTICOS - metodos que no le pertenecen al objeto sino a la clase

console.log(Number.parseFloat("12.34"));         // 12.34
console.log(Number.parseInt("12.34"));           // 12
console.log(Number.parseInt("FF", 16));          // 255

console.log(Number.isFinite(10));                // true
console.log(Number.isFinite(Infinity));          // false

console.log(Number.isInteger(10));              // true
console.log(Number.isInteger(10.5));            // false

console.log(Number.isNaN(NaN));                 // true
console.log(Number.isNaN("Hola"));              // false

console.log(Number.isSafeInteger(100));         // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// MÉTODOS DE Number.prototype

const numero = 123.456;

console.log(numero.toExponential());    // "1.23456e+2"
console.log(numero.toExponential(2));   // "1.23e+2"

console.log(numero.toFixed(2));         // "123.46"
console.log(numero.toFixed(0));         // "123"

console.log(numero.toPrecision(4));     // "123.5"
console.log(numero.toPrecision(2));     // "1.2e+2"