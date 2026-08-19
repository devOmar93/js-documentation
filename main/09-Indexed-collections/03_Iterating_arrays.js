/** Iterar sobre arrays **/

/**
    Una operación común consiste en iterar sobre los valores de un array, procesando cada
    uno de ellos de alguna manera.
**/

// *** Ejemplo con un for clásico *** //
const colors = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// *** Ejemplo con forEach *** //
// La función que se le pasa forEachse ejecuta una vez por cada elemento del array, utilizando
// dicho elemento como argumento. Los valores no asignados no se iteran en un forEach bucle.
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
