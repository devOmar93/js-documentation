/* 
El operador coma evalúa varias expresiones de izquierda a derecha.
Devuelve únicamente el resultado de la última expresión.
Se usa principalmente en los bucles for para ejecutar varias operaciones en una misma sección.
*/

const resultado = (1 + 2, 3 + 4);
console.log(resultado);

for (let i = 0, j = 9; i <= j; i++, j--) {
    console.log(i, j);
}

/* Declarar dos variables: i y j.
Actualizar dos variables en cada iteración: i++ y j--. */