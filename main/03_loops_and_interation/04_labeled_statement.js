/* 
Una declaración etiquetada permite asignar un nombre (etiqueta) 
a una instrucción o bloque de código para poder referirse a él 
posteriormente mediante break o continue.
*/

etiqueta:
    sentencia

/*
**etiqueta puede ser cualquier identificador válido de JavaScript (excepto palabras reservadas).
**sentencia puede ser cualquier instrucción o bloque de código.
*/

/* permite
**Salir de un bucle específico usando break etiqueta.
**Continuar la ejecución de un bucle específico usando continue etiqueta.
*/

/* continue solo funciona con bucles (for, while, do...while) */

externo:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break externo;
    }
    console.log(i, j);
  }
}

externo:
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue externo;
    }
    console.log(i, j);
  }
}

/* bloque */
bloque: {
  console.log("Inicio");

  if (true) {
    break bloque;
  }

  console.log("Nunca se ejecuta");
}

console.log("Fin");