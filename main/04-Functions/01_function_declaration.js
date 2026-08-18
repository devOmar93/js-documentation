/** Funciones declaradas **/

/**
    Una definición de función (también llamada declaración de función o instrucción de función )
    consta de la function palabra clave, seguida de:

        - El nombre de la función.
        - Una lista de parámetros para la función, encerrados entre paréntesis y separados por comas.
        - Las instrucciones JavaScript que definen la función, encerradas entre llaves, {}

    Bonus: Cuando se pasa un objeto o array como parámetro, si la función cambia las propiedades de este,
    ese cambio es visible fuera de la función.
**/

// *** Ejemplos *** //

//Funcion sin paramétro
function show() {
  console.log("Mostrar prueba...");
}
show();

//Funcion con paramétro
function square(number) {
  return number * number;
}
console.log(square(5));

//Función cambia propiedades del objeto
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log("make initial:", myCar.make); // "Honda"
myFunc(myCar);
console.log("make last:", myCar.make); // "Toyota"

//Función cambia propiedades del array
function myFunc(theArr) {
  theArr[0] = 30;
}
const arr = [45];

console.log("initial:", arr[0]); // 45
myFunc(arr);
console.log("last:", arr[0]); // 30
