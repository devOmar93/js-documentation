/* 
**throw se usa para lanzar una excepción (error).
**try...catch se usa para capturar y manejar esa excepción.
**Puedes lanzar casi cualquier valor: números, cadenas, objetos, etc.
**Lo recomendado es lanzar objetos de tipo Error (o derivados), porque 
contienen información útil como el mensaje y el stack trace.
*/

try {
  throw new Error("Algo salió mal");
} catch (error) {
  console.log(error.message);
}

/* 
** try - Contiene el código que puede producir un error.
** throw - Sirve para lanzar una excepción manualmente.
** catch - Captura el error si ocurre dentro del try.
e contiene el error.
Solo existe dentro del bloque catch.
** finally
Se ejecuta siempre:
Haya error o no.
Haya catch o no.
** Uso principal de finally - Liberar recursos
** finally tiene prioridad sobre return
*/

/* 
throw → lanza un error.
try → ejecuta código que puede fallar.
catch → captura el error.
finally → se ejecuta siempre.
*/
try {
  console.log("A");
} catch (e) {
  console.log("B");
} finally {
  console.log("C");
}
/* ---------------------- */
openFile();

try {
  writeFile();
} catch (e) {
  console.error(e);
} finally {
  closeFile();
}
/* ---------------------- 
El return del finally sobrescribe al del try.
--------------------------
*/
function f() {
  try {
    return true;
  } finally {
    return false;
  }
}

console.log(f());

/* finally también puede cancelar un throw */
function f() {
  try {
    throw new Error("Error");
  } finally {
    return false;
  }
}

/* Propiedades útiles de un error 
name → tipo de error.
message → mensaje del error.
*/
try {
  throw new Error("Usuario no encontrado");
} catch (e) {
  console.log(e.name);
  console.log(e.message);
}

/* ¿Se ejecuta la línea después del throw? */
try {
  console.log("A");
  throw new Error("Error");
  console.log("B");
} catch (e) {
  console.log("C");
}

/* 
los objetos Error tienen propiedades como:
JavaScript
e.name
e.message
*/
throw "Mi error";
throw new Error("Mi error");

/* Error propagado a un catch externo 
si un error no se maneja dentro, sigue buscando un catch más externo.

Si un try bloque interno no tiene un catch bloque correspondiente:
** debe contener un finally bloque, y
** Se comprueba si hay una coincidencia con el bloque try...catch
de la instrucción que lo contiene.catch
*/
try {
  try {
    throw new Error("boom");
  } finally {
    console.log("interno");
  }
} catch (e) {
  console.log("externo");
}
