const fs = require("node:fs/promises");

(async () => {
  const watchers = fs.watch("./");
  for await (const event of watchers) {
    console.log(event);
  }
})();
