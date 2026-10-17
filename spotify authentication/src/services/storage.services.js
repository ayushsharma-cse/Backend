const { ImageKit } = require("@imagekit/nodejs");

const client = new ImageKit({
  privateKey: process.env.IMAGE_KIT_KEY,
});

async function uploadFile(file) {
  const result = await client.files.upload({
    file: Buffer.isBuffer(file) ? file.toString("base64") : file,
    fileName: "music_" + Date.now(),
    folder: "backend/music",
  });

  return result;
}

module.exports = uploadFile;
