import { DefaultAzureCredential } from "@azure/identity";
import { BlobServiceClient } from "@azure/storage-blob";
const CONTAINER_NAME = "mcaupyshop";

let blobServiceClient = new BlobServiceClient(
  process.env.ST_ACCOUNT_NAME,
  new DefaultAzureCredential()
);

let containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

const getImageFromBlobName = async (blobName) => {
  var blobBufferResponse = await downloadBlob(blobName);
  const image = Buffer.from(blobBufferResponse).toString("base64");
  return image;
};

const downloadBlob = async (blobName) => {
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);
  const downloadBlockBlobResponse = await blockBlobClient.downloadToBuffer(0);
  return downloadBlockBlobResponse;
};

export { downloadBlob, getImageFromBlobName };
