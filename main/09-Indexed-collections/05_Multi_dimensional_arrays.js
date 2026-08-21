/** Arrays multidimensionales **/

/**
    Los ar  rays pueden anidarse, lo que significa que un array puede contener
    otro array como elemento. Aprovechando esta característica de los arrays
    de JavaScript, se pueden crear arrays multidimensionales.
**/

// *** Creación de un array bidimensional de 4x4 *** //
const twoDimensionalArray = new Array(4);
for (let i = 0; i < 4; i++) {
  twoDimensionalArray[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    twoDimensionalArray[i][j] = `(${i}, ${j})`;
  }
}
console.log("Array bidimencional:", twoDimensionalArray);

// Mostrar la primera fila del array bidimencional (se mostrará en un array unidimencioanl)
console.log("Primera fila:", twoDimensionalArray[0]);

// Mostrar la primera columna del array bidimencional (se mostrará en un nuevo array)
let columArray = [];
twoDimensionalArray.forEach((item) => {
  columArray.push(item[0]);
});
console.log("Primera columna:", columArray);

// Mostrar la traza del array bidimencional (matriz cuadrada)
let trazaArray = [];
twoDimensionalArray.forEach((item, i) => {
  trazaArray.push(item[i]);
});
console.log("Traza de la matriz:", trazaArray);
