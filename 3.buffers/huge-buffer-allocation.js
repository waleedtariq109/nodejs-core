const { Buffer } = require("node:buffer");

const hugeBuffer = Buffer.alloc(1e9);

// This will probably crash you OS
setInterval(() => {
  for (let i = 0; i < hugeBuffer.length; ++i) {
    hugeBuffer.fill(0x22);
  }
}, 5000);
