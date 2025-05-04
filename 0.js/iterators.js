const personObject = {
  name: "Waleed Tariq",
  city: "Lahore",
  age: 23,
  __admin__: true,
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (const item of personObject) {
  console.log(item);
}
