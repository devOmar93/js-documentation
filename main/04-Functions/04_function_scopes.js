/** Ámbitos (scopes) de funciones **/

/**
    Las funciones delimitan el ámbito de las variables; esto significa que las variables
    definidas dentro de una función no pueden ser accedidas desde fuera de ella.
    El ámbito de la función hereda de todos los ámbitos superiores.

    Por ejemplo, una función definida en el ámbito global puede acceder a todas las variables
    definidas en dicho ámbito. Una función definida dentro de otra función también puede acceder
    a todas las variables definidas en su función padre, así como a cualquier otra variable
    a la que tenga acceso la función padre. Por otro lado, la función padre (y cualquier otro ámbito padre)
    no tiene acceso a las variables y funciones definidas dentro de la función interna. Esto proporciona
    una especie de encapsulación para las variables dentro de la función interna.
**/

// *** Ejemplos *** //

// Accediendo variables global en local
const num1 = 20;
const num2 = 3;

function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// Función anidada
const name = "Chamakh";
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    const num3 = 5;
    return `${name} scored ${num1 + num2 + num3}`;
  }
  // console.log('num3', num3); //Error de referencia de num3
  return add();
}

console.log(getScore());
