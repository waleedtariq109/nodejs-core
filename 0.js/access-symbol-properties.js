const personObject = {
  name: "Waleed Tariq",
  city: "Lahore",
  age: 23,
  [Symbol("admin")]: true,
  [Symbol("admin2")]: true,
};

for (const key in personObject) {
  console.log(key);
}

const personObjectSymbols = Object.getOwnPropertySymbols(personObject);
console.log(personObjectSymbols);

for (const symbol of personObjectSymbols) {
  console.log(symbol.description);
}
