/**** DECLARACIÓN DE VARIABLES E INICIALIZACIÓN ****/

/** En una instrucción como let x = 42, la parte "let x" se llama declaración
    y la otra parte "= 42" se llama inicializador. La declaración permite acceder
    a la variable más adelante en el código sin lanzar una excepción ReferenceError,
    mientras que el inicializador asigna un valor a la variable. En las declaraciones
    var y let, el inicializador es opcional. Si una variable se declara sin un inicializador,
    se le asigna el valor undefined. **/

/** JavaScript tiene tres tipos de declaraciones de variables. **/

/* Declara una variable, inicializándola opcionalmente con un valor. */
var

/* Declara una variable local con ámbito de bloque, inicializándola opcionalmente con un valor. */
let

/* Declara una constante con nombre, de ámbito de bloque y de solo lectura.
   La inicialización es obligatario */
const

// *** Ejemplos de declaraciones de variables sin inicializarlas *** //
var personName;
let surname;

console.log('personName:', personName);
console.log('surname:', surname);

// *** Ejemplos de declaraciones de variables e inicializadass *** //
var age = 20;
let nationality = 'Peruano';
const address = 'Calle Entelgy piso 14';

console.log('age:', age);
console.log('nationality:', nationality);
console.log('address:', address);


// Bonus: Puedes declarar variables para extraer valores
// usando la sintaxis de desestructuración.

// Ejemplo:

// Creamos un objeto llamado "persona" para realizar el ejemplo
const persona = {
    personName: 'Omar',
    surname: 'Condori',
    phoneNumber: '987897899'
}

const { phoneNumber } = persona;
console.log('phoneNumber:', phoneNumber);
