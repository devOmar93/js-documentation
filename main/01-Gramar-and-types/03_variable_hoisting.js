/** Variable hoisting **/

/**
    Las funciones declaradas y las variables declaradas con var se elevan (hoisting), es decir
    se declaran primero (como si estuvieran escritas en la primera linea de todo el código).

    Para el caso de "var" se le asgina el valor por defecto (undefined)
    Para las funciones declaradas se elevan por completo: nombre y cuerpo ({})

    temporal dead zone: Sucede para el caso de let y const, cuando son llamadas antes de ser
    declaradas y resulta un "error de referencia".

**/

// *** Ejemplo hoisting para var *** //
console.log("name:", name);
var name = "Omar";

// *** Ejemplo hoisting para funciones declaradas *** //
show();
function show() {
  const name = "Juan";
  console.log("hola", name);
}

// *** Ejemplo temporal dead zone *** //
console.log("hola", name);
if (true) {
  const name = "Juan";
}
