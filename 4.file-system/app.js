const fs = require("node:fs/promises");
const path = require("node:path");
const commands = require("./commands");

const fileWatcher = async () => {
  const watcher = fs.watch("./commands.txt");
  const commandFileHandler = await fs.open("./commands.txt", "r");

  const { CREATE_FILE, DELETE_FILE, RENAME_FILE, UPDATE_FILE } = commands;

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

  const deleteFile = async (filePath) => {
    try {
      const absolutePath = path.join(__dirname, filePath);
      await fs.unlink(absolutePath);
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log(
          `The file you are trying to delete are not exist since no need to perform delete operation`
        );
      } else {
        console.log("Something went wrong");
        console.log(error);
      }
    }
  };

  let addedContent;
  const updateFile = async (filePath, content) => {
    try {
      if (addedContent === content) return;

      const absolutePath = path.join(__dirname, filePath);
      const fileHandle = await fs.open(absolutePath, "r+");
      fileHandle.write(content);
      addedContent = content;
      fileHandle.close();
      console.log(`File updated successfully`);
    } catch (error) {
      console.log(`
        The file you are trying to update is not exist.
        Use this to create a file: 'wt create -f <filename>'
      `);
    }
  };

  const renameFile = async (oldFilePath, newfilePath) => {
    try {
      const oldAbsolutePath = path.join(__dirname, oldFilePath);
      const newAbsolutePath = path.join(__dirname, newfilePath);
      await fs.rename(oldAbsolutePath, newAbsolutePath);
      console.log(`File renamed successfully.`);
    } catch (error) {
      if (error.code === "ENOENT") {
        console.log(`
          The file you are trying to rename is not exist.
          Use this to create a file: 'wt create -f <filename>'
        `);
      } else {
        console.log("Something went wrong");
        console.log(error);
      }
    }
  };

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
      const filepath = command.substring(CREATE_FILE.length + 1);
      createFile(filepath);
    }
    if (command.includes(DELETE_FILE)) {
      const filePath = command.substring(CREATE_FILE.length + 1);
      deleteFile(filePath);
    }
    if (command.includes(RENAME_FILE)) {
      const _idx = command.indexOf(" to ");
      const oldFilePath = command.substring(CREATE_FILE.length + 1, _idx);
      const newfilePath = command.substring(_idx + 4);
      renameFile(oldFilePath, newfilePath);
    }

    if (command.includes(UPDATE_FILE)) {
      const _idx = command.indexOf(" this content ");
      const filePath = command.substring(CREATE_FILE.length + 1, _idx);
      const content = command.substring(_idx + 14);

      updateFile(filePath, content);
    }
  });

  for await (const event of watcher) {
    if (event.eventType === "change") {
      commandFileHandler.emit("change");
    }
  }
};

fileWatcher();
