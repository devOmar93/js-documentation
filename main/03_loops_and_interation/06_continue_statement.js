/* 
La continue instrucción se puede utilizar para reiniciar una instrucción while, do-while, for, o label
Saltar el resto del código de la iteración actual y pasar inmediatamente a la siguiente iteración del bucle.
*/

/* Con break termina el bucle */
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

/* Con continue omite ese paso y sigue con el siguiente bucle */
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

/* Mostrar solo numeros impares */
for (let i = 1; i <= 10; i++) {

  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

/* continue con etiqueta */
externo:
for (let i = 1; i <= 3; i++) {

  for (let j = 1; j <= 3; j++) {

    if (j === 2) {
      continue externo;
    }

    console.log(i, j);
  }
}
