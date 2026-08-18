/** Funciones flecha **/

/**
    Una expresión de función flecha tiene una sintaxis más corta en comparación con las expresiones
    de función y no tiene sus propios this, arguments, super, ni new.target. Las funciones flecha
    siempre son anónimas.

    Dos aspectos importantes:

        - Funciones más cortas: En algunos patrones funcionales, las funciones más cortas son bienvenidas.

        - Sin this: Hasta la llegada de las funciones flecha, cada nueva función definía su propio
          this valor (un nuevo objeto en el caso de un constructor, indefinido en las llamadas a funciones
          en modo estricto, el objeto base si la función se llamaba como un "método de objeto", etc.).
          Esto resultó ser poco práctico en un estilo de programación orientado a objetos.
**/

// *** Ejemplo función más corta *** //
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

// *** Ejemplo del this en la función flecha *** //
// Una función flecha no tiene su propio this; this se utiliza el valor del contexto de ejecución
// que la contiene. Por lo tanto, en el siguiente código, el thisdentro de la función que se pasa
// a setIntervaltiene el mismo valor que thisen la función que la contiene:
function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log('age:', this.age); // `this` properly refers to the person object
  }, 1000);
}

const p = new Person();


// Ejemplo del this propio de una función
const persona = {
  nombre: "Juan",

  saludar: function () {
    console.log(this.nombre);

    setTimeout(function () {
      console.log(this.nombre);
    }, 1000);
  }
};

persona.saludar();

// Ejemplo del this heredado de una función flecha
const persona = {
  nombre: "Juan",

  saludar: function () {
    console.log(this.nombre);

    setTimeout(() => {
      console.log(this.nombre);
    }, 1000);
  }
};

persona.saludar();