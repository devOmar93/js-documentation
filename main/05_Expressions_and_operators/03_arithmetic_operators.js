/* 
**Los operadores aritméticos trabajan principalmente 
con números y devuelven un resultado numérico.

**Los operadores básicos son:
+  // suma
-  // resta
*  // multiplicación
/  // división
*/

//La división produce números decimales cuando es necesario:
console.log(1 / 2)
console.log(1 / 0)

//Operador resto (%)
//Devuelve el residuo de una división
console.log(12 % 5)
console.log(10 % 3)

//Operador incremento (++)
//Suma 1 a una variable.
let x = 3;
++x;

let y = 3;
y++;

//Operador decremento (--)
//Resta 1 a una variable.
let z = 3;
--z;

let a = 3;
a--;

//Negación unaria (-)
//Cambia el signo del número.
let b = 3;
console.log(-b)
console.log(-(-5))

//Unario más (+)
//Convierte un valor a número
console.log(+"3")
console.log(+true)
console.log(+"abc")

//Exponenciación (**)
//Eleva una base a una potencia.
console.log(2 ** 3)
console.log(10 ** -1)
