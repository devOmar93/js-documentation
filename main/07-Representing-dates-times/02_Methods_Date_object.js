/** Métodos del objeto Fecha **/

/**
    Los Datemétodos de objeto para manejar fechas y horas se dividen en estas categorías generales:

        - Métodos "set", para establecer valores de fecha y hora en Date objetos.
        - Métodos "get", para obtener valores de fecha y hora de Date los objetos.
        - Métodos "to", para devolver valores de cadena desde Date objetos.
        - Métodos parse y UTC para analizar Date cadenas de texto.

    Con los métodos "get" y "set" se pueden obtener y establecer segundos, minutos, horas, día del mes,
    día de la semana, meses y años por separado. Existe un getDaymétodo que devuelve el día de la semana,
    pero no hay un método correspondiente setDay, ya que el día de la semana se establece automáticamente.
    Estos métodos utilizan números enteros para representar estos valores de la siguiente manera:

        - Segundos y minutos: de 0 a 59
        - Horas: 0 a 23
        - Día: 0 (domingo) a 6 (sábado)
        - Fecha: del 1 al 31 (día del mes)
        - Meses: del 0 (enero) al 11 (diciembre)
        - Año: años desde 1900

**/

// *** Ejemplo muestra el número de días que quedan en el año actual *** //
const today = new Date();
const endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Set day and month

endYear.setFullYear(today.getFullYear()); // Set year to this year

const msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
let daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;

daysLeft = Math.round(daysLeft); // Returns days left in the year
console.log(daysLeft);

// *** Ejemplola la función JSClock() devuelve la hora en formato de reloj digital. *** //
function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
console.log(JSClock());
