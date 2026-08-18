/* 
&& devuelve el primer valor falsy o el último valor si todos son truthy.
|| devuelve el primer valor truthy.
?? devuelve el primer valor que no sea null ni undefined. // Operador de coalescencia nula (Nullish Coalescing)
! sí devuelve siempre un booleano (true o false).
*/

console.log("Cat" && "Dog")
console.log(false || "Cat")
console.log(null ?? "Default")
console.log(!"Cat")

/* 
Cortocircuito (Short-circuit)
JavaScript evalúa de izquierda a derecha y puede detenerse antes de 
evaluar el resto:
*/
console.log(false && funcion())
console.log(true || funcion())
console.log(5 ?? funcion())