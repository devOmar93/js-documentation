/* 
son literales de cadena que permiten expresiones incrustadas. 
Se pueden usar cadenas de varias líneas y funciones de interpolación de cadenas.
*/

/* 
Los literales de plantilla se encierran entre acentos graves ( `) en lugar de comillas dobles o simples. 
Los literales de plantilla pueden contener marcadores de posición. 
Estos se indican con el signo de dólar y llaves ( ${expression}).
*/

/* 
Multilíneas
Cualquier carácter de nueva línea insertado en el código fuente forma parte de la plantilla literal.
*/
//sin literals
console.log(
  "string text line 1\n\
string text line 2",
);
//con literals
console.log(`string text line 1
string text line 2`);

/* 
Expresiones incrustadas
Para insertar expresiones dentro de cadenas normales, se utiliza la siguiente sintaxis:
*/
//sin literals
const five = 5;
const ten = 10;
console.log(
  "Fifteen is " + (five + ten) + " and not " + (2 * five + ten) + ".",
);

//con literals
const five1 = 5;
const ten1 = 10;
console.log(`Fifteen is ${five1 + ten1} and not ${2 * five1 + ten1}.`);