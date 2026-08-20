/* 
this
Hace referencia al objeto que está ejecutando el método.
*/

const persona_ana = {
  nombre: "Ana",
  saludar() {
    return this.nombre;
  }
};

console.log(persona_ana.saludar())

/* 
Operador de agrupación ()
Permite controlar el orden de evaluación de las expresiones.
*/

1 + 2 * 3;    // 7
(1 + 2) * 3;  // 9

/* 
Acceso a propiedades
Permite obtener propiedades de objetos.
*/
persona.nombre;
persona["nombre"];

/* 
Encadenamiento opcional ?. Optional Chaining Operator
Evita errores cuando un valor puede ser null o undefined.
*/
const usuario = null;
const nombre = usuario?.nombre;
console.log(nombre);

/* 
new
Crea una nueva instancia de un objeto. 
*/

const persona = new Persona();

/* 
super
Se usa en clases para acceder a la clase padre.
super permite llamar métodos o constructores del padre.
*/

class Animal {
  hablar() {
    console.log("Sonido");
  }
}

class Perro extends Animal {
  hablar() {
    super.hablar();
    console.log("Guau");
  }
}

const perro = new Perro();
perro.hablar();