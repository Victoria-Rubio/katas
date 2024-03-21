// Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan 
// la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
function include(arrays) {
  for (let i = 0; i < arrays.length; i++) {
    const array = arrays[i];
    if (array.includes('Camiseta') + array) {
      return array

    }
  }
}
console.log(include(products))