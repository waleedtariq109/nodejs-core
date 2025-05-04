// async function* asyncGenerator() {
//   yield new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
//   yield new Promise((resolve, _) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 2000);
//   });
//   yield 1;
// }

// const promiseObject = asyncGenerator();

// // IIFE

// async function resolvedPromise() {
//   // Method 1
//   // for (const promise of promiseObject) {
//   //   const result = await promise;
//   //   console.log(result);
//   // }

//   // Method 2
//   // for (const promise of promiseObject) {
//   //   promise.then((res) => console.log(res));
//   // }

//   // Method 3
//   for await (const promise of promiseObject) {
//     console.log(promise);
//   }
// }

// resolvedPromise();

////////////////////////////////////////

const asyncGenerator1 = function* () {
  let i = 0;
  while (true) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(i);
      }, 1000);
    });
    i++;
  }
};

const asyncGeneratorObject = asyncGenerator1();

const asyncGeneratorExecutor = async () => {
  for await (const value of asyncGeneratorObject) {
    console.log(value);
  }
};

asyncGeneratorExecutor();

const object = {
  name: "Waleed",
};

const object2 = {
  name: "Tariq",
};

console.log(`${object.name} ${object2.name}`);

function fullname(obj1, obj2) {
  return obj1.name + " " + obj2.name;
}

console.log(fullname(object, object2));
