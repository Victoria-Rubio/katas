// Contador de repeticiones: Crea una función que nos devuelva 
// el número de veces que se repite cada una de las palabras 
// que lo conforma. Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
//bucle for
// function repeatCounter(array) {
//   let contador = {};
//   for (let i = 0; i < array.length; i++) {
//     const palabra = array[i];
//     if (contador[palabra] === undefined) {
//       contador[palabra] = 1;
//     } else {
//       contador[palabra]++;
//     }
//   }
//   return contador;
// }

// 

//!ahora con for of

function repeatCounter(array) {
  let contador = {};
  for (const palabra of array) {
    if (contador[palabra] === undefined) {
      contador[palabra] = 1;
    } else {
      contador[palabra]++;
    }
  }
  return contador;
}
console.log(repeatCounter(counterWords));