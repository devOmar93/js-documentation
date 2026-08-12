/** Variable Scope **/

/**
    Una variable puede pertenecer a uno de los siguientes ámbitos :

    - Ámbito global: El ámbito predeterminado para todo el código que se ejecuta en modo script.
    - Ámbito del módulo: El ámbito del código que se ejecuta en modo módulo.
    - Ámbito de la función: El ámbito creado con una función.

    Además, las variables declaradas con let o const pueden pertenecer a un ámbito adicional:

        - Ámbito de bloque: El ámbito creado con un par de llaves (un bloque ).

    Cuando se declara una variable fuera de una función, se denomina variable global,
    ya que está disponible para cualquier otro código en el documento actual.
    Cuando se declara una variable dentro de una función, se denomina variable local,
    ya que solo está disponible dentro de esa función.

    Las declaraciones let y const también pueden limitarse al bloque de instrucciones
    en el que se declaran.

    Las variables creadas con var no tienen ámbito de bloque, sino que son locales a la función
    (o ámbito global) dentro de la cual reside el bloque.

**/

// *** Ejemplo de ambito global *** //
var age = 20;
let name = "Omar";
const surname = "Perez";

// Funciona dentro del bloque
if (name) {
  console.log("age:", age);
  console.log("name:", name);
  console.log("surname:", surname);
}

// Funciona dentro de una función
function show() {
  console.log("age:", age);
  console.log("name:", name);
  console.log("surname:", surname);
}
show();

// *** Ejemplo de ambito local *** //
function showData() {
  var age = 20;
  let name = "Omar";
  const surname = "Perez";
  console.log("age:", age);
  console.log("name:", name);
  console.log("surname:", surname);
}

showData();
/**
    Las líneas siguientes mostrarán un error de referencia, dado que esas variables
    estan declaradas de forma local (dentro de la función); por ende, al querer mostrarlas
    lanzará un error de referencia.
**/
console.log("age:", age);
console.log("name:", name);
console.log("surname:", surname);

// *** Ejemplo de ambito bloque (solo funciona para let y const) *** //
if (true) {
  let name = "Omar";
  const surname = "Canales";
  console.log("name:", name);
  console.log("surname:", surname);
}
/**
    Las líneas siguientes mostrarán un error de referencia, dado que esas variables
    estan declaradas en bloque (entre llaves {}); por ende, al querer mostrarlas
    lanzará un error de referencia.
**/
console.log("name:", name);
console.log("surname:", surname);

// *** Ejemplo de declaración global de una variable var dentro de un bloque *** //

// La variable name funciona fuera del bloque
if (true) {
  var name = "Omar";
  console.log("name:", name);
}
console.log('name:', name);