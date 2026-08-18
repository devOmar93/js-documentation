/** Funciones anidadas múltiples **/

/**
    Las funciones pueden anidarse varias veces. Por ejemplo:

        - Una función (A) contiene una función (B), que a su vez contiene una función (C).

        - Aquí se incluyen tanto funciones B como C cierres de formulario. Por lo tanto, B
          se puede acceder a A y C se puede acceder a B.

        - Además, puesto que C puede acceder a B que puede acceder a A, C también puede acceder a A.

    Por lo tanto, los cierres pueden contener múltiples ámbitos; contienen recursivamente el ámbito
    de las funciones que los contienen. Esto se denomina encadenamiento de ámbitos.
**/

// *** Ejemplo *** //
function A(x) {
  const nameA = 'Omar A';
  function B(y) {
    const nameB = 'Omar B'
    function C(z) {
      console.log(x + y + z);
      console.log('nameA:', nameA);
      console.log('nameB:', nameB);
    }
    C(3);
  }
  B(2);
}
A(1); // Logs 6 (which is 1 + 2 + 3)
