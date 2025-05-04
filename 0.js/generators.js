const counter = function* () {
  yield 1;
  yield 2;
  yield 3;
};

// Construct a generator object
const counterGenerator = counter();

/**
 * We cannot directly is use counter in the for of loop because
 * we have construct the generator object first.
 *
 * If we directly want to use counter in for of loop then we have
 * to call the counter in the for of loop to construct the generator
 * object
 */

for (const count of counterGenerator) {
  console.log(count);
}

/**
 * If we don't use for of loop then we have to manually setup
 * everything like calling the next method and stoping the loop
 * etc.
 */

let counterObject = counterGenerator.next();

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator.next();
}

console.log();
console.log();

/**
 * If we add return keyword in a generator function then this
 * will stops the iteration or sets the value of done as true
 */

function* returnGenerator() {
  yield 1;
  yield 2;
  return "Hello";
  yield 3;
}

const returnGeneratorObject = returnGenerator();

for (const item of returnGeneratorObject) {
  console.log(item);
}

console.log(returnGeneratorObject.next());
console.log();

/**
 * Infinite loop in generator
 */

function* generateIDs() {
  let id = 0;
  while (true) {
    yield id;
    ++id;
  }
}

const idGenerator = generateIDs();

let count = 0;
while (count < 5) {
  console.log(idGenerator.next());
  count++;
}

/**
 * yield delegation
 */

function* yieldDelegation() {
  yield 1;
  yield* [2, 3, 4];
  yield 5;
  yield 6;
}

const delegateYield = yieldDelegation();

for (const value of delegateYield) {
  console.log(value);
}

console.log("ALL DONE");
