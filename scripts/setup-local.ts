import path from "path";
import fs from "fs";

main();

const log = console.log;

function main() {
  try {
    const filePath = path.resolve("../.env.local");

    const fileContent = `
    
  `;

    fs.writeFileSync(filePath, fileContent);

    log("Successfully created .env");
  } catch (error) {
    if (error && typeof error === "object" && "message" in error) {
      log("Encountered an error creating the .env file: ", error.message);
    } else {
      log("Encountered an error creating the .env file");
    }
  }
}
