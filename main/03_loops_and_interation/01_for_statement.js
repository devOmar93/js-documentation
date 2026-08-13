/* 
Existen muchos tipos diferentes de bucles, pero todos hacen esencialmente lo mismo: 
repiten una acción un número determinado de veces. (¡Tenga en cuenta que ese número podría ser cero!). 
un bucle puede estar programado para repetirse, pero si la condición inicial ya es falsa, no entra ni una sola vez.
*/

let i = 1;

while (i < 1) {
  console.log("Hola");
  i++;
}

/* 
Un for bucle se repite hasta que una condición específica se evalúa como falsa.
Inicialización: se ejecuta una sola vez al comenzar.
Condición: se evalúa antes de cada vuelta.
Si es true, continúa.
Si es false, el bucle termina.
Instrucciones: se ejecuta el código dentro del for.
Actualización: se actualiza el contador (por ejemplo, i++).
Se vuelve al paso 2.
*/
for (initialization; condition; afterthought)
  statement

