const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i];
  if (food.isVegan == false) {
    food.name = fruits[i];
    food.isVegan = true;
  }
}
console.log(foodSchedule);


