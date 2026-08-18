/* 
**Los operadores de comparación comparan dos valores y devuelven un resultado booleano:
true o false.

**Los operandos pueden ser de distintos tipos:
Números
Cadenas de texto (strings)
Booleanos
Objetos

**Las cadenas se comparan lexicográficamente, es decir, según el orden de 
los caracteres Unicode.
"Ana" < "Carlos" // true

**Cuando los operandos son de tipos diferentes, JavaScript normalmente intenta convertirlos para poder compararlos.
"5" == 5 // true

**En muchas comparaciones, esa conversión termina convirtiendo los valores a números.

**Los operadores === (igualdad estricta) y 
!== (desigualdad estricta) son la excepción:
No convierten tipos.
Comparan valor y tipo al mismo tiempo.

**Los operadores == y != sí realizan conversión de tipos antes de comparar.
*/

5 == "5"      // true
1 == true     // true
0 == false    // true
null == undefined // true
10 == 10      // true

5 === "5"     // false
1 === true    // false
0 === false   // false
10 === 10     // true
"hola" === "hola" // true

5 !== "5"     // true
1 !== true    // true
0 !== false   // true
10 !== 10     // false
"hola" !== "hola" // false

10 >= 5       // true
10 >= 10      // true
5 >= 10       // false
"a" >= "a"    // true
20 >= "15"    // true
"9" > "10" // true
console.log("9" > "1") // true

5 <= 10       // true
10 <= 10      // true
20 <= 10      // false
"a" <= "a"    // true
"15" <= 20    // true