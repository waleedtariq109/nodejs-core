function* countToTen() {
  let i = 0;
  while (i <= 10) {
    yield i;
    ++i;
  }
}

const countToTenObject = countToTen();

for (const count of countToTenObject) {
  console.log(count);
}

console.log();
console.log();

//////////////////////////////////////////

function* randomNumber() {
  let number = 0;
  while (true) {
    number = Math.trunc(Math.random() * 20);
    yield number;
  }
}

const randomNumberObject = randomNumber();

let count = 0;
while (count < 10) {
  const generatedRandomNumber = randomNumberObject.next();
  console.log(generatedRandomNumber.value);
  count++;
}

console.log();
console.log();

////////////////////////////////////////

function* randomAmountFromRange(amount, min, max) {
  for (let i = 0; i < amount; i++) {
    yield Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

const amountRangeObject = randomAmountFromRange(3, 10, 20);

for (const amount of amountRangeObject) {
  console.log(amount);
}

console.log();
console.log();

///////////////////////////////////////

function* getRandomNumber() {
  for (let i = 0; i < 5; i++) {
    yield Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
}

const groceries = ["Avacado", "Cookie", "Milk", "Soup", "Soda"];
const length = groceries.length;

function* groceryList() {
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.trunc(Math.random() * groceries.length);
    yield groceries.splice(randomIndex, 1)[0];
  }
}

const getRandomNumberObject = getRandomNumber();
const groceryListObject = groceryList();

for (let i = 0; i < length; i++) {
  const randomNumber = getRandomNumberObject.next().value;
  const groceryItem = groceryListObject.next().value;
  console.log(`${randomNumber} ${groceryItem}`);
}
