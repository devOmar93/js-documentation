/* 
** En JavaScript, las expresiones regulares también son objetos.
** Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas.
*/

/* 1.  Utilizando una expresión regular literal, que consiste en un patrón encerrado entre barras diagonales
Se compila cuando se carga el script.
Es la opción más común cuando el patrón no va a cambiar.
*/
const re = /ab+c/;
console.log(re.test("abc"));

/* 2.  llamando a la función constructora del RegExp objeto, como sigue:
Se compila en tiempo de ejecución.
Se usa cuando el patrón es dinámico o proviene de una variable o del usuario.
*/
const num = "ab+c"
const re = new RegExp(num);

const nombreBuscado = prompt("Nombre:");
const re = new RegExp(nombreBuscado);

//0 o mas veces el elemento anterior
/ab*c/ 
const re = /ab*c/ ;
console.log(re.test("ac"));

// los parentesis permiten recordar lo encontrado para usarlo despues
/(abc)/

//encontrar un *
const re = /a\*b/ ;
console.log(re.test("a*b"));

//obtener coincidencias
console.log("hola abc abc abc".match(/abc/))

//reemplazar
console.log("hola abc".replace(/abc/, "xy*"))

//obtener coincidencias globales
console.log("hola abc abc abc".match(/abc/g))

//obtener coincidencias globales con exec
const re = /abc/g;
console.log(re.exec("hola abc abc abc"))
console.log(re.exec("hola abc abc abc"))

//ignorar mayusculas
console.log("hola Abc aBc abC".match(/abc/i))


//Los mas comunes:
/* 
.* *cualquier carácter
*   0 o más
+  *1 o más
*   0 o 1
\d dígito
\w letra, númer* o _
*s espacio
^  inicio
$  final*() grupo
[* conjunto de caracteres 
*/