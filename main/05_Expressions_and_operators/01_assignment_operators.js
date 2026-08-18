/* 
expresiones en JavaScript son fragmentos de código que producen un valor, ya sea realizando 
una acción como asignar datos a una variable o evaluando 
operaciones mediante distintos operadores como asignación, aritméticos, lógicos y de comparación.
*/

const x = (1 + 2 )* 3;
const y = 2 * 3 + 1;
console.log(x, y)

/* 
** PRECEDENCIA DE OPERADORES
Algunos operadores se evalúan antes que otros. Por ejemplo, * tiene mayor precedencia que +, por lo que en 
3 + 2 * 2 primero se calcula 2 * 2. Los paréntesis () permiten cambiar ese orden.
** OPERADORES BINARIOS
Necesitan dos operandos y se colocan entre ellos (forma infija) COMO 3 + 4
** OPERADORES UNARIOS
Necesitan un solo operando. Pueden ir antes (prefijo) o después (postfijo) del operando
++x // prefijo
x++ // postfijo
!x // prefijo
typeof x // prefijo
*/

let x = 5;

console.log(x++);
console.log(x);

let x = 5;

console.log(++x);
console.log(x);

/* 
Un operador de asignación asigna un valor a su operando 
izquierdo en función del valor de su operando derecho
*/

/* 
El operador de asignación simple es igual ( =), que asigna el valor de 
su operando derecho a su operando izquierdo. Es decir, 
x = f() es una expresión de asignación que asigna el valor de f() a x
*/

/* Nombre	        operador de taquigrafía	    Significado
Asignación	            x = f()	                x = f()
Tarea de suma	        x += f()	            x = x + f()
Tarea de resta	        x -= f()	            x = x - f()
Tarea de multiplicación	x *= f()	            x = x * f()
Asignación de división	x /= f()	            x = x / f()
Asignación restante	    x %= f()	            x = x % f()
Tarea de exponenciación	x **= f()	            x = x ** f() */

/* ASIGNACION DE PROPIEDADES
** Si una expresión se evalúa como un objeto , entonces el lado izquierdo 
de una expresión de asignación puede realizar asignaciones a propiedades 
de esa expresión. Por ejemplo: objeto.propiedad = valor;
*/
const obj = {};

obj.x = 3;
console.log(obj.x);
console.log(obj);

obj['y'] = 4;
console.log(obj);
/* ************** */

const val = 0;
val.x = 3;

console.log(val.x); // Prints undefined.
console.log(val); // Prints 0.


/* DESTRUCTURACION 
permite extraer datos de matrices u objetos utilizando una sintaxis que refleja 
la construcción de literales de matrices y objetos.
*/

/* Ejemplo sin destructurar */
const foo = ["one", "two", "three"];

const one = foo[0];
const two = foo[1];
const three = foo[2];

/* Ejemplo con destructuracion */
const [one, two, three] = foo;

/* EVALUACION Y ANIDAMIENTO 
En general, las asignaciones se utilizan dentro de una declaración de variable 
(es decir, con const, let, o var) o como instrucciones independientes.
*/

/* Si una expresión devuelve un valor y nadie lo usa, se dice que ese valor se descarta. */
let x = f();
x = g();

/******************************** */
y = x = f()
//es equivalente a 
console.log(y = (x = 2))
console.log(x)
/* porque el operador de asignación = es asociativo por la derecha . 
Sin embargo, se evalúa de izquierda a derecha */

/* Evite las cadenas de asignación */
/* Encadenar asignaciones o anidarlas en otras expresiones puede 
generar un comportamiento inesperado. 
Por este motivo, se desaconseja encadenar asignaciones en la misma instrucción */

const z = y = x = f();