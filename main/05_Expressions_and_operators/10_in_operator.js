/* 
El in operador devuelve verdadero true si 
la propiedad especificada está en el objeto especificado. La sintaxis es:
*/

propNameOrNumber in objectName

const persona = {
  nombre: "Juan",
  edad: 20
};

console.log("nombre" in persona); // true
console.log("edad" in persona);   // true
console.log("pais" in persona);   // false