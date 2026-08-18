/* 
**Los operadores bit a bit trabajan con la representación binaria de los números 
(bits 0 y 1), no con su valor decimal directamente.

**JavaScript convierte los números a enteros de 32 bits, realiza la operación bit 
a bit y devuelve un número normal.
*/

//& (AND)
//Devuelve 1 solo cuando ambos bits son 1.
console.log(5 & 3)

//| (OR)
//Devuelve 1 cuando al menos uno de los bits es 1.
console.log(5 | 3)

//^ (XOR)
//Devuelve 1 cuando los bits son diferentes.
console.log(5 ^ 3)

//~ (NOT)
//Invierte todos los bits (0 → 1, 1 → 0).
console.log(~5)