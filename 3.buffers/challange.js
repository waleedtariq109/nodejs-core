const { Buffer } = require("node:buffer");

// 0100 1000 0110 1001 0010 0001

const data = [0b01001000, 0b01101001, 0b00100001];

const memoryContainer = Buffer.alloc(data.length);

for (let i = 0; i <= memoryContainer.length; ++i) {
  memoryContainer[i] = data[i];
}

console.log(memoryContainer.toString("ascii"));

const buff = Buffer.from(data);
console.log(buff.toString("ascii"));
