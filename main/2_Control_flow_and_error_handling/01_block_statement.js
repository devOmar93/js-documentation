/* 
** La instrucción más básica es una instrucción de bloque , que se utiliza para agrupar instrucciones
** El bloque está delimitado por un par de llaves
** Las sentencias de bloque se utilizan comúnmente con sentencias de control de flujo 
( if, for, while).
*/

/* 
block statement es cualquier sección de código encerrada entre {} que agrupa instrucciones 
y define un alcance para variables declaradas con let y const
*/

{
  let x = 10;
  console.log(x);
}

{
  const x = 20;
  console.log(x);
}

/*
Nota: var Las variables declaradas no tienen ámbito de bloque, sino que tienen 
ámbito de la función o script que las contiene, y los efectos de su configuración 
persisten más allá del propio bloque.
*/
var x = 1;
{
  var x = 2;
}
console.log(x);