const baboon = Symbol("Monkey");
const gorilla = Symbol("Monkey");

console.log(typeof baboon);
console.log(typeof gorilla);

console.log(baboon.description);
console.log(gorilla.description);

console.log(baboon === gorilla); // false
console.log(baboon.description === gorilla.description); // true

////////////////////////////////////////

const movie = {
  name: "Blade Runner",
  director: "Ridley Scott",
  year: 1982,
  rating: 89,
  genre: "Science Fiction",
};

movie[Symbol("budget")] = 30;
movie[Symbol("boxOffice")] = 98;

for (const [key, value] of Object.entries(movie)) {
  console.log(`${key} => ${value}`);
}

const movieObjectSymbols = Object.getOwnPropertySymbols(movie);
console.log(movieObjectSymbols);

//////////////////////////////////////////////

console.log();
console.log();

const book = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

book[Symbol.iterator] = function* () {
  const entries = Object.entries(this);
  for (const entry of entries) {
    yield entry;
  }
};

for (const [key] of book) {
  console.log(book[key]);
}

console.log();
console.log();

const anotherBook = {
  name: "1984",
  author: "George Orwell",
  year: 1949,
  rating: 4.6,
  genre: "Science Fiction",
  movie: true,
};

anotherBook[Symbol.asyncIterator] = async function* () {
  const entries = Object.entries(anotherBook);
  for (const entry of entries) {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(entry);
      }, 1000);
    });
  }
};

(async () => {
  for await (const entry of anotherBook) {
    console.log(entry);
  }
})();
