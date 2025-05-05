const fs = require("node:fs/promises");
const path = require("node:path");
const commands = require("./commands");

const fileWatcher = async () => {
  const watcher = fs.watch("./commands.txt");
  const commandFileHandler = await fs.open("./commands.txt", "r");

  const { CREATE_FILE, DELETE_FILE, RENAME_FILE, UPDATE_FILE } = commands;

  const getFilePath = (fileContent, command) => {
    const parts = fileContent
      .slice(command.length + 1)
      .trim()
      .split(" ");
    return parts[0];
  };

  const createFile = async (filePath) => {
    const absolutePath = path.join(__dirname, filePath);
    try {
      const existingFileHandle = await fs.open(absolutePath, "r");
      existingFileHandle?.close();
      console.log(`The file at ${absolutePath} are already exists`);
    } catch {
      const newFileHandle = await fs.open(absolutePath, "w");
      console.log("A new file was created successfully");
      newFileHandle.close();
    }
  };

  const deleteFile = async (filePath) => {};

  const renameFile = async (filePath) => {};

  const updateFile = async (filePath, fileContent) => {};

  commandFileHandler.on("change", async () => {
    /**
     * Each letter in our file occupy 1 byte or 8 bits
     */
    const fileStats = await commandFileHandler.stat();
    const buffer = Buffer.alloc(fileStats.size); // Allocate a buffer equal to the file size (in bytes)

    const length = buffer.byteLength; // Number of bytes to read into the buffer
    const offset = 0; // Start writing into the buffer at index 0
    const position = 0; // Start reading from the beginning of the file (byte 0)

    // Reading the file from start to end
    await commandFileHandler.read(buffer, offset, length, position);
    // Decode the buffer with toString() - The default encoding of toString is utf-8
    const command = buffer.toString("utf-8");

    if (command.includes(CREATE_FILE)) {
      const filepath = getFilePath(command, CREATE_FILE);
      createFile(filepath);
    }
    if (command.includes(DELETE_FILE)) {
      const filePath = getFilePath(command, DELETE_FILE);
      deleteFile(filePath);
    }
    if (command.includes(RENAME_FILE)) {
      const filePath = getFilePath(command, RENAME_FILE);
      renameFile(filePath);
    }
    if (command.includes(UPDATE_FILE)) {
      console.log("UPDATE");

      const filePath = getFilePath(command, UPDATE_FILE);
      console.log(filePath, "path");

      updateFile(filePath, command);
    }
  });

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
};

fileWatcher();
