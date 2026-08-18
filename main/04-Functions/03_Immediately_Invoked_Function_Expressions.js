/** Expresiones de función invocadas inmediatamente (IIFE) **/

/**
    Este tipo de función es un patrón de código que llama directamente a una
    función definida como una expresión. También se le conoce como una
    función anónima autoejecutable

    En lugar de guardar la función en una variable, la función se invoca inmediatamente.
    Esto es casi equivalente a simplemente escribir el cuerpo de la función, pero tiene
    algunas ventajas únicas:

        - Esto crea un ámbito adicional de variables, lo que ayuda a limitar las variables
          al lugar donde resultan útiles.

        - Ahora se trata de una expresión en lugar de una secuencia de instrucciones.
          Esto permite escribir lógica de cálculo compleja al inicializar variables.
**/

// *** Ejemplo sin parámetro *** //
(function () {
  // Do something
  console.log("Ingresé!!!");
})();

// *** Ejemplo con parámetro *** //
(function (name) {
  // Do something
  console.log("Hola!!! Soy", name);
})("Omar");

// *** Ejemplos mediante una expresión de función  *** //
const value = (function () {
  // Do something
  console.log("Holaaa");
})();

const config = (function () {
  const apiUrl = "https://api.test.com";
  const version = "1.0";

  return {
    apiUrl,
    version,
  };
})();

console.log(config);
