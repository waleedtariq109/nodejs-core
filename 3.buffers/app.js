const { Buffer } = require("node:buffer");

const memoryContainer = Buffer.alloc(4); // 4 byte/32 bits

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x3a;
memoryContainer[2] = 0x62;
memoryContainer[3] = 0xff;

console.log(memoryContainer);
console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);
