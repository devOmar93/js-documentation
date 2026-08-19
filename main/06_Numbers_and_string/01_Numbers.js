/* 
En JavaScript, todos los valores Number usan el estándar IEEE 754 de 64 bits (doble precisión).
-Pueden almacenar números muy grandes y muy pequeños (aproximadamente entre 10⁻³⁰⁸ y 10⁺³⁰⁸).
-Los enteros se representan exactamente hasta ±(2⁵³ - 1) (9007199254740991).
-Además de números normales, existen tres valores especiales:
--  Infinity → infinito positivo.
--  -Infinity → infinito negativo.
--  NaN → "Not a Number" (resultado de operaciones numéricas inválidas).
*/

console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log("a" * 2);

10      // Decimal
0b1010  // Binario (10)
0o12    // Octal (10)
0xA     // Hexadecimal (10)

console.log(10 === 0b1010);
console.log(10 === 0o12);
console.log(10 === 0xA)

/* 
Separadores numéricos
Para todas las sintaxis literales mostradas anteriormente, 
_ se puede insertar un guion bajo ( ) entre los dígitos para mejorar la legibilidad.
1_000_000_000_000
*/