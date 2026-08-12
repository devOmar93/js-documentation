/* 
** Una instrucción condicional es un conjunto de 
comandos que se ejecutan si se cumple una condición específica. 
JavaScript admite dos instrucciones condicionales: if...else y switch
*/

/* 
Utilice la ifinstrucción para ejecutar una instrucción si se cumple una condición lógica true. 
Utilice la elsecláusula opcional para ejecutar una instrucción si la condición es false 
*/

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
/* --------------------------------- */
let edad = 16;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
/* --------------------------------- */
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
/* --------------------------------- */
let edad = 20;

let mensaje = edad >= 18
  ? "Mayor de edad"
  : "Menor de edad";

console.log(mensaje);

/* Buenas prácticas */
/* 
** En general, es una buena práctica utilizar siempre sentencias de bloque, 
especialmente al anidar if sentencias. Significa que es recomendable poner siempre 
las llaves {}, incluso cuando el bloque contiene una sola instrucción.
** Es una buena práctica no tener if...else una asignación x = y como condición
*/

/* 
==   // Igual valor
===  // Igual valor y tipo
!=   // Diferente valor
!==  // Diferente valor o tipo
>    // Mayor que
<    // Menor que
>=   // Mayor o igual que
<=   // Menor o igual que
*/

let uno = 1;
let dos = "1";

if(uno !== dos){
  console.log("ingrese")
}

/* falsy values / valores falsos */
/* 
false
undefined
null
0
NaN
la cadena vacía ("") 
*/
console.log(Boolean(""))

const b = new Boolean(false);
if (b) {
  console.log("true" ,b)// this condition evaluates to true
}
if (b == true) {
  console.log(b)// this condition evaluates to false
}


/*
Para ==, JavaScript sigue aproximadamente estas reglas:

Si ambos tipos son iguales → compara directamente.
Si uno es null y otro undefined → true.
Si uno es boolean:
Convierte el boolean a número.
true → 1
false → 0
Si uno es string y otro number:
Convierte el string a number.
Si uno es objeto y el otro es primitivo:
Convierte el objeto a primitivo.
Intenta valueOf().
Si sigue siendo objeto, intenta toString().
Una vez obtenidos los primitivos:
Aplica nuevamente las reglas anteriores hasta llegar a tipos comparables.
*/
const b = new Boolean(false);
console.log(b.valueOf());

const c = {
  name: "Omar",
  edad: 40,
}
/* 
{ name: 'Omar', edad: 40 }
[object Object] 
*/
console.log(c.valueOf());
console.log(c.toString());

console.log(null==undefined);

/* 
Una switch instrucción permite que un programa evalúe una expresión e
intente hacer coincidir el valor de la expresión con una case etiqueta. 
Si se encuentra una coincidencia, el programa ejecuta la instrucción asociada.
*/

/* 
** break hace que el programa salga del switch cuando encuentra un case coincidente.
** Si no usas break, la ejecución continúa en los siguientes case, aunque no coincidan.
** A esto se le llama fall-through.
*/

switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  default:
    statementsDefault;
}