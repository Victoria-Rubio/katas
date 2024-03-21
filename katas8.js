// Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

function findLongestWord(param) {
  let longest = param[0];

  for (let i = 1; i < param.length; i++) {

    if (param[i].length > longest.length) {
      longest = param[i];
    }

  }
  return longest;
}
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
let longestWord = findLongestWord(avengers)
console.log("la palabra más larga es:", longestWord);

const AttackOnTitanCharacters = ["Eren", "Mikasa", "Armin", "Jean", "Sasha", "Levi", "Hange"]
let longestCharacters = findLongestWord(AttackOnTitanCharacters)
console.log("la palabra más larga es:", longestCharacters);




