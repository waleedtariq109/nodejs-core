function adder(x) {
  return function (y) {
    return x + y;
  };
}

const addBy5 = adder(5);

console.log(addBy5(10));

function main() {
  const name = "Waleed Tariq";
  return function () {
    console.log(name);
  };
}

const fn = main();

fn();
fn();
fn();
fn();
fn();
