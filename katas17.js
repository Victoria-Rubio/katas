const alien = {
  name: 'Wormuck',
  race: 'Cucusumusu',
  planet: 'Eden',
  weight: '259kg'
}
//el forin que me recomienda visual
// for (const key in alien) {
//   if (Object.hasOwnProperty.call(alien, key)) {
//     const element = alien[key];
//     console.log(`${key}:${element}`)
//   }
// }

//si se hiciera con un for "normal":
// for (let i = 0; i < Object.keys(alien).length; i++) {
//   const key = Object.keys(alien)[i];
//   console.log(`${key}:${alien[key]}`)
// }
//el forin de clases y que veo más "limpio":
for (let key in alien) {
  console.log(`${key}:${alien[key]}`)
}