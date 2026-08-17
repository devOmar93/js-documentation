/** Expresiones de función **/

/**
    Las funciones también pueden crearse mediante una expresión de función.
    Dicha función puede ser anónima; no tiene por qué tener un nombre.

    Sin embargo, se puede proporcionar un nombre a una expresión de función.
    Proporcionar un nombre permite que la función se refiera a sí misma y también facilita
    su identificación en los rastreos de pila del depurador.
**/

// *** Ejemplo anónima *** //
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

// *** Ejemplo con nombre *** //
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6