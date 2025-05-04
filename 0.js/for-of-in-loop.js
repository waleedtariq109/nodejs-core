/**
 *
 * In JavaScript we have for of and for in loop and there is one key difference in both of them
 *
 * If we want to iterate over object we can use for in loop
 * because for in loop iterate over keys of a object so we
 * can use these keys to iterate over an object.
 *
 * The for of loop usually use to iterate over iterable objects like
 * arrays, strings, maps etc
 *
 */

const obj = {
  name: "Waleed Tariq",
  age: 23,
  city: "Lahore",
};

for (const key in obj) {
  console.log(key);
}

const arr = ["Waleed", 23, "Lahore"];

console.log(arr.entries());

for (const [index, value] of arr.entries()) {
  console.log(`Value at index ${index} is: ${value}`);
}
