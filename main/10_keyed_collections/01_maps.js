/* 
Un objeto Map es un mapa de clave/valor simple 
y puedes iterar sobre sus elementos en el orden en que fueron insertados.
*/

let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
console.log(sayings)

sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false - sirve para verificar si una clave existe dentro del mapa
sayings.delete("dog");
console.log(sayings)

console.log(sayings.has("dog")); // false

for (let [key, value] of sayings) {
  console.log(key + " goes " + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
console.log(sayings)
sayings.size; // 0

/* VENTAJAS SOBRE LOS OBJETOS */
// 1. En Object las claves son strings o symbols; en Map pueden ser cualquier valor
const obj = {};

obj[123] = "número";
obj[true] = "booleano";

console.log(obj);
//---------------------------------------
const mapa = new Map();

mapa.set(123, "número");
mapa.set(true, "booleano");

console.log(mapa.get(123));  // número
console.log(mapa.get(true)); // booleano

//---------------------------------------
const usuario = { nombre: "Juan" };

const map = new Map();
mapa.set(usuario, "administrador");

console.log(map.get(usuario));

//2. Map tiene size
const maps = new Map();

maps.set("a", 1);
maps.set("b", 2);
maps.set("c", 3);

console.log(maps.size);
//----------------------------------
const obj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(Object.keys(obj).length);

//3. Iteración en orden de inserción - Se recorren en el mismo orden en que fueron agregados.
const mapp = new Map();

mapp.set("primero", 1);
mapp.set("segundo", 2);
mapp.set("tercero", 3);

for (const [clave, valor] of mapp) {
  console.log(clave, valor);
}

//4. Object tiene propiedades heredadas del prototipo - Object.prototype.
// En map solo existen las claves que se agreguen.
const obj = {};

console.log("toString" in obj);

/* CONSEJOS */
//1. Usa Map cuando las claves se conocen recién en ejecución.
const usuarios = new Map();

usuarios.set("juan", 100);
usuarios.set("ana", 200);
usuarios.set("pedro", 300);

//2. Usa Map cuando necesites claves primitivas reales
const mappp = new Map();

mappp.set(1, "número");
mappp.set("1", "texto");
mappp.set(true, "booleano");

console.log(mappp.get(1));    // número
console.log(mappp.get("1"));  // texto
console.log(mappp.get(true)); // booleano

//Usa Object cuando representes una entidad con propiedades fijas
const persona = {
  nombre: "Juan",
  edad: 30,

  saludar() {
    console.log("Hola");
  }
};

persona.saludar();


/* WEAKMAP */
//WeakMap es una versión especial de Map que guarda pares clave → valor, pero con reglas distintas.
//Las claves solo pueden ser objetos como : {} ,[] ,function(){}, new Date()
//los valores pueden ser de cualquier tipo
const wm = new WeakMap();
const user = {};
wm.set(user, "Juan");

const wmap = new WeakMap();
wmap.set("nombre", "Juan"); // Error
wmap.set(123, "Juan");      // Error
wmap.set(true, "Juan");     // Error

//Las claves se guardan "débilmente"
//Map: Aunque elimines la variable, el objeto sigue existiendo porque Map mantiene una referencia fuerte
let users = { nombre: "Juan" };
const mapss = new Map();
mapss.set(users, "admin");
users = null;
console.log(mapss)

//WeakMap: no cuenta como una referencia fuerte
let usr = { nombre: "Juan" };
const wmm = new WeakMap();
wmm.set(usr, "admin");
usr = null;
console.log(wmm.get(usr));

//Que es Garbage Collection (GC) / Recolección de basura
//Es el mecanismo de JavaScript que libera memoria de objetos que ya no pueden ser usados