//Buscador de nombres: Crea una función que reciba por parámetro un array y el 
//valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, 
//en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. 

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(param, valor) {
  for (let i = 0; i < param.length; i++) {
    const element = param[i];
    if (element === valor) {
      return { encontrado: true, posicion: i };
    }
  } return { encontrado: false };
}
console.log(finderName(nameFinder, "Jessica"))

