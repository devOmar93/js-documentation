/* SET */
//Los objetos Set son colecciones de valores. Puedes iterar sus elementos en el orden en que se insertaron. 
//Un valor en un Set solo puede aparecer una vez; es único en la colección del Set
//Set no permite duplicados
//Array permite duplicados

let mySet = new Set();
mySet.add(1);
mySet.add("algún texto");
mySet.add("foo");

console.log(mySet)

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "algún texto"

//ARRAY VS SET
//Elimina elementos en array es lento
const arr = ["Juan", "Ana", "Pedro"];
arr.splice(arr.indexOf("Ana"), 1);
console.log(arr)

const set = new Set(["Juan", "Ana", "Pedro"]);
set.delete("Ana");
console.log(set);

//Buscar NAN
const ar = [NaN];
console.log(ar.indexOf(NaN));

const sets = new Set([NaN]);
console.log(sets.has(NaN));

/* WEAKSET */
//WeakSet solo permite objetos.
const s = new Set();
s.add(1);
s.add("hola");
s.add({});

const ws = new WeakSet();
ws.add(1);
ws.add("hola");
ws.add(true);

//En WeakSet las referencias son débiles, candidato para GC
let usr = {
    nombre: "Juan"
};
const wst = new WeakSet();
wst.add(usr);
usr = null;
console.log(wst.has(usr))


// PARA SET Y MAP
//SameValueZero es el algoritmo que usan internamente Set y Map para decidir si dos valores son iguales.
//Casi igual a ===, pero tratando a NaN como igual a NaN.
//NaN y NaN => iguales
//+0 y -0 => iguales
console.log(NaN === NaN);

const set_map = new Set();
set_map.add(NaN);
console.log(set_map.has(NaN));

console.log(+0 === -0);