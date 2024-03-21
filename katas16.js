// Probando For...of: Usa un bucle forof para recorrer todos 
// los destinos del array. Imprime en un console.log sus valores.

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const place of placesToTravel) {
  console.log(place)
}
//"normal" sería así, el bucle forof resume esto:
// for (let i = 0; i < placesToTravel.length; i++) {
//   const place = placesToTravel[i];
//   console.log(place)
// }