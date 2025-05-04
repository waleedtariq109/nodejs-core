const mySymbol = Symbol();
const namedSymbol = Symbol("Hello");

console.log(mySymbol);
console.log(namedSymbol);

console.log(typeof mySymbol);
console.log(typeof namedSymbol);

// Symbols are always unique even if they have same description

console.log(Symbol() === mySymbol);
console.log(Symbol() === Symbol());
console.log(Symbol("Hello") === namedSymbol);

/**
 * To access description we need to access the description property
 * on a symbol
 */

const symbolWithDescription = Symbol("This is Symbol");
const symbolWithoutDescription = Symbol();

console.log(symbolWithDescription.description);
console.log(symbolWithoutDescription.description);
