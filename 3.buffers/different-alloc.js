const { Buffer } = require("node:buffer");

/**
 *
 * When the node process runs the node already allocates 4 kibibytes of memory
 * and when we use allocUnsafe node will use that memory but the memory that
 * we want to allocate should be within the limit of Buffer.poolSize otherwise
 * it won't allocate memory to our buffer from node pool are so to say
 */

/**
 * Buffer.alloc allocates the memory and filled with value that we gave in second param of alloc
 * but if we don't give anu value then it will filled all the bits to zero
 */

const buffer = Buffer.alloc(10000, 0);

/**
 * Buffer.allocUnsafe is just alocates some piece of memory and that's it and The
 * reason why Buffer.allocUnsafe is unsafe because it allocates the memory that
 * may contain some data
 */

const unsafeBuffer = Buffer.allocUnsafe(10000);
for (let i = 0; i < buffer.length; i++) {
  if (buffer[i] !== 0) {
    console.log(`Element at position ${i} has value: ${buffer[i].toString(2)}`);
  }
}

console.log(Buffer.poolSize >>> 1);

/**
 * We can also create buffer this way
 */

const allocUnsafeBufferSlow = Buffer.allocUnsafeSlow(300);
