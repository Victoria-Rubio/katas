//Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];
function sum(arrays) {
  let suma = 0;
  for (let i = 0; i < arrays.length; i++) {
    const product = arrays[i];
    suma += product.sellCount
  }
  return suma
}

console.log(sum(products))
