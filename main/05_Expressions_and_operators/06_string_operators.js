/* El operador + sirve para concatenar (unir) cadenas de texto. */
console.log("Hola" + " Mundo")

/* El operador += agrega texto a una cadena existente y guarda el resultado en la misma variable. */
let texto = "Hola";
texto += " Mundo"
console.log(texto);

//ERROR
let texto_hola = "Hola";
texto_hola =+ "Mundo"
console.log(texto_hola);