/* 
La instrucción break se utiliza para interrumpir la ejecución de un bucle 
(for, while, do...while) o de una estructura switch antes de que termine de forma natural.
** Finaliza el bucle o switch más interno.
** Finaliza una instrucción etiquetada específica.
*/

//Caso 1: break sin etiqueta
//Cuando se encuentra un valor, condición o evento específico, se sale inmediatamente del bucle.
const usuarios = ["Ana", "Luis", "Pedro"];
for (let i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i]);
  if (usuarios[i] === "Luis") {
    console.log("Usuario encontrado");
    break;
  }
}

//Evita que la ejecución continúe en los siguientes casos (fall-through).
const opcion = 2;
switch (opcion) {
  case 1:
    console.log("Opción 1");
    break;

  case 2:
    console.log("Opción 2");
    break;

  default:
    console.log("Otra opción");
}

//Sin break
const opcion1 = 2;
switch (opcion1) {
  case 2:
    console.log("Opción 2");

  case 3:
    console.log("Opción 3");
}

//break con etiqueta: Permite salir de bucles anidados en un solo paso.
let x = 0;
let z = 0;

labelCancelLoops: while (true) {
  console.log("Outer loop:", x);

  x++;
  z = 1;

  while (true) {
    console.log("Inner loop:", z);
    z++;

    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}