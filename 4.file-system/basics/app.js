/**
 * In Nodejs we have 3 different ways for doing the same thing.
 * Promise API
 * Callback API
 * Synchronous API
 */

const fsPromise = require("node:fs/promises");

// ***** Promise API ***** //
async function readFileThroughPromiseAPI() {
  try {
    await fsPromise.copyFile("./text.txt", "copied-promise.txt");
  } catch (error) {
    console.log(error);
  }
}

readFileThroughPromiseAPI();

// ***** Callback API ***** //

const fs = require("node:fs");
fs.copyFile("./text.txt", "copied-callback.txt", (error) => {
  if (error) console.log(error);
});

// ***** Synchronous API ***** //

fs.copyFileSync("./text.txt", "copied-sync.txt");
