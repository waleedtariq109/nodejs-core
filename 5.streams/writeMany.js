// const fs = require("node:fs/promises");

// const writeManyHandler = async () => {
//   console.time("WriteMany");
//   const fileHandler = await fs.open("./text.txt", "w");
//   for (let i = 0; i < 1000000; i++) {
//     await fileHandler.write(`${i} `);
//   }
//   fileHandler.close();
//   console.timeEnd("WriteMany");
// };

// writeManyHandler();

const fs = require("node:fs");

const writeManyHandler = () => {
  console.time("WriteMany");
  fs.open("./test.txt", "w", (error, fileDescriptor) => {
    for (let i = 0; i < 1000000; i++) {
      const buffer = Buffer.from(` ${i} `, "utf-8");
      fs.writeSync(fileDescriptor, buffer);
    }
  });
  console.timeEnd("WriteMany");
};

writeManyHandler();
