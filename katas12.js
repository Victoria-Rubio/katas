const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  for (let i = 0; i < param.length; i++) {
    let element = param[i];
    for (let j = i + 1; j < param.length; j++) {
      let element2 = param[j];
      if (element === element2) {
        param.splice(j, 1);

      }
    }


  } return param
}
console.log(removeDuplicates(duplicates))

// let studentList = [
//   {
//     name: 'JdelaCruz',
//     codeList: ['Js', 'React']
//   },
//   {
//     name: 'EdDarko',
//     codeList: ['Js', 'Node']
//   }
// ]
// for (let i = 0; i < studentList.length; i++) {
//   for (let j = 0; j < studentList[i].codeList.length; j++) {

//     console.log(studentList[i].name + 'Works: ' + studentList[i].codeList[j])
//   }
// }

