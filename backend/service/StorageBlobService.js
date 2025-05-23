import fs from "fs/promises";
import path from "path";
import mime from "mime-types"; // You might need to install this: npm install mime-types

const UPLOAD_DIR = path.join(process.cwd(), "uploads");

// Ensure the upload directory exists
const ensureUploadDir = async () => {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating upload directory:", error);
  }
};

// Initialize directory
ensureUploadDir();

// Store a file and return the path
const storeFile = async (fileData, fileName) => {
  const filePath = path.join(UPLOAD_DIR, fileName);
  await fs.writeFile(filePath, fileData);
  return filePath;
};

// Read a file by name
const readFile = async (fileName) => {
  const filePath = path.join(UPLOAD_DIR, fileName);
  return await fs.readFile(filePath);
};

// Delete a file
const deleteFile = async (fileName) => {
  const filePath = path.join(UPLOAD_DIR, fileName);
  return await fs.unlink(filePath);
};

const readImageAsBase64 = async (imagePath) => {
  try {
    const imageBuffer = await fs.readFile(imagePath);
    const mimeType = mime.lookup(imagePath) || "image/jpeg";

    // Convert to base64 and include MIME type information
    return imageBuffer.toString("base64");
  } catch (error) {
    console.error("Error reading image:", error);
    throw error;
  }
};

export { storeFile, readFile, deleteFile, readImageAsBase64 };
