/** Estructuras y tipos de datos **/

/**
    Tipos de datos:

    * Siete tipos de datos que son primitivos:

        - Booleano  : truey false.
        - null      : Una palabra clave especial que denota un valor nulo.
                      (Debido a que JavaScript distingue entre mayúsculas y minúsculas,
                      nullno es lo mismo que Null, NULL, ni ninguna otra variante).
        - indefinido: Una propiedad de nivel superior cuyo valor no está definido.
        - Número    : Un número entero o de punto flotante. Por ejemplo: 42o 3.14159.
        - BigInt    : Un entero con precisión arbitraria. Por ejemplo: 9007199254740992n.
        - Cadena    : Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Howdy".
        - Símbolo   : Un tipo de dato cuyas instancias son únicas e inmutables.

    * y objeto.

    Las funciones son otro elemento fundamental del lenguaje. Si bien técnicamente
    las funciones son un tipo de objeto, se puede pensar en los objetos como contenedores
    con nombre para valores, y en las funciones como procedimientos que el script puede ejecutar.

**/

// *** Ejemplos de tipos de datos *** //

//Booleano
const state = true;

//null
const datoNull = null;

//indefinido
const datoUndefined = undefined;

//Número
const datoNumber = 20;

//Booleano
const state = true;

//Cadena
const datoString = "Hola mundo";

//Objeto
const datoObjet = {
  age: "30",
  name: "Omar",
};

/** Conversión de tipo de datos **/

/**
    JavaScript es un lenguaje de tipado dinámico. Esto significa que no es necesario
    especificar el tipo de dato de una variable al declararla. Además, los tipos de datos
    se convierten automáticamente según sea necesario durante la ejecución del script.

**/

// *** Ejemplos de conversión dinámica de los tipos de datos *** //
let answer = 42;
console.log("answer inicio:", answer);

answer = "Thanks for all the fish!";
console.log("answer fin:", answer);

/** Números y el operador '+' **/

/**
    En expresiones que involucran valores numéricos y de cadena con el +operador,
    JavaScript convierte los valores numéricos en cadenas.
**/

// *** Ejemplos *** //
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
let numero = "37" - 7;
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);

// observación: Con todos los demás operadores, JavaScript no convierte valores numéricos a cadenas.
// *** Ejemplos *** //
let subtraction = "37" - 7; // 30
let multiplication = "37" * 7; // 259

console.log("subtraction", subtraction);
console.log("multiplication", multiplication);

/** Convertir cadenas de texto en números **/

/**
    En el caso de que un valor que representa un número se encuentre en memoria
    como una cadena de texto, existen métodos para su conversión.

        - parseInt()  : Solo devuelve números enteros, por lo que su utilidad disminuye
                        para los números decimales.
        - parseFloat(): Analiza un argumento de tipo cadena y devuelve un número de coma flotante.
        - Number()    : El Number constructor contiene constantes y métodos para trabajar con números.
                        Los valores de otros tipos se pueden convertir a números mediante
                        la Number() función correspondiente.
**/

// *** Ejemplos *** //

//parseInt
let resultado = "200.20";
resultado = parseInt(resultado); // 200
console.log("resultado", resultado);

//parseFloat
let resultado = "200.256";
resultado = parseFloat(resultado); // 200.256
console.log("resultado", resultado);

//Number
let resultado = "200.255611";
resultado = Number(resultado); // 200.255611
console.log("resultado", resultado);
