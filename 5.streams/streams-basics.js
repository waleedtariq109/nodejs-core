const fs = require("node:fs/promises");

/**
 * Execution Time: 760ms
 * CPU usage: 100% (one core)
 * Memory: 180MB
 */

const handler = async () => {
  console.time("Streams");

  const fileHandler = await fs.open("./test.txt", "w");
  const stream = fileHandler.createWriteStream();
  for (let i = 0; i < 1000000; i++) {
    const buff = Buffer.from(` ${i} `, "utf-8");
    stream.write(buff);
  }
  fileHandler.close();

  console.timeEnd("Streams");
};

handler();
