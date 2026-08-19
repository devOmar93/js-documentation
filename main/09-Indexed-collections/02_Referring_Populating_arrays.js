/** Haciendo referencia a los elementos de un array **/

/**
    Dado que los elementos también son propiedades, puedes acceder a ellos
    mediante accesores de propiedades.
**/

// *** Ejemplo *** //
const myArray = ["Wind", "Rain", "Fire"];
const arr = ["one", "two", "three"];
console.log(arr[2]); // three
console.log(arr["length"]); // 3

/** Rellenar un array **/

// Puedes rellenar un array asignando valores a sus elementos.
// *** Ejemplo *** //
const emp = [];
emp[0] = "Casey Jones";
emp[1] = "Phil Lesh";
emp[2] = "August West";
console.log(emp);

// *** Ejemplo utilizando un bucle *** //
const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = i;
}
console.log(numbers);

/** Comprensión de la longitud de un array **/

//  La length propiedad es especial. Su valor siempre es un entero positivo mayor
//  que el índice del último elemento, si existe. (En el ejemplo siguiente, 'Dusty'
//  está indexado en 30, por lo que cats.length devuelve 30 + 1).
const cats = [];
cats[30] = "Dusty";
console.log(cats.length); // 31