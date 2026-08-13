/* 
Una whileinstrucción ejecuta sus instrucciones mientras una condición específica se evalúe como verdadera true.
**Primero se evalúa la condición.
**Si la condición es true, se ejecuta el código dentro del bucle.
**Al terminar, se vuelve a evaluar la condición.
**El proceso se repite mientras la condición sea true.
**Cuando la condición es false, el bucle termina.
*/

while (condition)
  statement

/* ejemplo 1 */
let i = 1;

while (i <= 3) {
  console.log(i);
  i++;
}

/* ejemplo 2 */
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

/* 
Evite los bucles infinitos. Asegúrese de que la condición dentro de un bucle se cumpla 
eventualmente false; de ​​lo contrario, ¡el bucle nunca terminará! 
Las instrucciones en el siguiente whilebucle se ejecutan indefinidamente porque 
la condición nunca se cumple false: 
*/
// Infinite loops are bad!
while (true) {
  console.log("Hello, world!");
}