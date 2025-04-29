const EventEmitter = require("./events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on("foo", () => {
  console.log("Event Occured");
});

myEmitter.on("foo", () => {
  console.log("Event Occured");
});

myEmitter.on("foo", (x) => {
  console.log("Event Occured");
  console.log(x);
});

myEmitter.once("bar", () => {
  console.log("Bar event");
});

myEmitter.emit("foo");
myEmitter.emit("foo", "Ijaz saab");

// bar event will only runs once
myEmitter.emit("bar");
myEmitter.emit("bar");
myEmitter.emit("bar");
myEmitter.emit("bar");
myEmitter.emit("bar");
myEmitter.emit("bar");
