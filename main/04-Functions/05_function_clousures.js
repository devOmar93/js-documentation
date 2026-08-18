/** Cierres (clousures) de funciones **/

/**
    Un cierre es cualquier fragmento de código fuente (generalmente, una función) que hace referencia
    a algunas variables, y el cierre "recuerda" estas variables incluso cuando el ámbito en el que se
    declararon ha finalizado.

    Los cierres suelen ilustrarse con funciones anidadas para mostrar que recuerdan variables más allá
    del ciclo de vida de su ámbito padre; pero, de hecho, las funciones anidadas son innecesarias.
    Técnicamente hablando, todas las funciones en JavaScript forman cierres; algunas simplemente no
    capturan nada, y los cierres ni siquiera tienen que ser funciones.
    Los ingredientes clave para un cierre útil son los siguientes:

        - Un ámbito padre que define variables o funciones. Debe tener un ciclo de vida definido,
          lo que significa que su ejecución debe finalizar en algún momento. Cualquier ámbito que
          no sea el ámbito global cumple este requisito; esto incluye bloques, funciones, módulos, etc.

        - Un ámbito interno definido dentro del ámbito principal, que hace referencia a algunas variables
          o funciones definidas en el ámbito principal.

        - El ámbito interno logra sobrevivir más allá de la vida útil del ámbito principal. Por ejemplo,
          se guarda en una variable definida fuera del ámbito principal, o se devuelve desde el ámbito
          principal (si este es una función).

        - De esta forma, cuando se llama a la función fuera del ámbito principal, se puede seguir
          accediendo a las variables o funciones que se definieron en dicho ámbito, incluso después de
          que este haya finalizado su ejecución.
**/

// *** Ejemplo incremetar contador *** //
function crearContador() {
  let contador = 0; // Tiene que seguir existiendo ¿Cómo lo hago? Lo guardo en memoria

  // Función declarada
  function incrementar() {
    contador = contador + 10;
    return contador;
  }

  return incrementar;
  /*
  // Función expresada
  return function () {
    contador++;
    return contador;
  };*/
}

const incrementar = crearContador();

console.log(incrementar()); // 1
console.log(incrementar()); // 2
console.log(incrementar()); // 3

// *** Ejemplo simular funcionalidad de una clase con funciones *** //
const createPet = function (name) {
  let sex;

  const pet = {
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");

console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver

// *** Ejemplo actualizar lista de estados *** //
function state() {
  let listEstate = ["ACTIVO", "INACTIVO"];
  function updateState(newState) {
    listEstate.push(newState);
    return listEstate;
  }
  return updateState;
}

const actionState = state();

console.log(actionState("PENDIENTE"));
console.log(actionState("ANULADO"));
