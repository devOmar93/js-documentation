/** Objeto de fecha **/

/**
    JavaScript no tiene un tipo de dato de fecha. Sin embargo, puedes usar el Dateobjeto
    y sus métodos para trabajar con fechas y horas en tus aplicaciones. El Dateobjeto tiene
    una gran cantidad de métodos para establecer, obtener y manipular fechas. No tiene propiedades.

    JavaScript maneja las fechas de forma similar a Java. Ambos lenguajes comparten muchos métodos
    de fecha y las almacenan como el número de milisegundos transcurridos desde la medianoche
    del 1 de enero de 1970 (UTC), donde una marca de tiempo Unix representa el número de segundos
    transcurridos desde ese mismo instante. El instante de la medianoche del 1 de enero de 1970 (UTC)
    se denomina época.
**/

// *** Estructura de la creación de un Date object *** //
const dateObjectName = new Date([parameters]);

/**
    donde dateObjectNamees el nombre del Dateobjeto que se está creando; puede ser un objeto nuevo
    o una propiedad de un objeto existente.

    Si se llama Date sin la new palabra clave, se devuelve una cadena que representa la fecha y hora actuales.

    En la sintaxis anterior, el elemento parameters puede ser cualquiera de los siguientes: **/

// Nada: crea la fecha y hora de hoy. Por ejemplo, today = new Date();.
const today = new Date();
console.log(today);

// Una cadena que representa una fecha, en muchos formatos diferentes. Los formatos exactos
// admitidos varían según el motor, pero el siguiente formato siempre es compatible:
// YYYY-MM-DDTHH:mm:ss.sssZ. Si omite las horas, los minutos o los segundos, el valor
// se establecerá en cero.
const xmas95 = new Date("1995-12-25");
console.log(xmas95);

// Un conjunto de valores enteros para el año, el mes y el día.
const xmas26 = new Date(2026, 0, 23);
console.log(xmas26);

// Un conjunto de valores enteros para el año, el mes, el día, la hora, el minuto y los segundos.
xmas26 = new Date(2026, 11, 25, 9, 30, 0);
console.log(xmas26);


