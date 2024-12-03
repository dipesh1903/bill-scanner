import {onCall} from "firebase-functions/v2/https";
import vision from "@google-cloud/vision";
import { logger } from "firebase-functions";
import { Storage } from "@google-cloud/storage";

const storage = new Storage();
const bucketName = 'scan-bill-easy.firebasestorage.app';
export const helloWorld = onCall(async (request, response) => {
  storage.getBuckets
  const image = request.data.image;
  const client = new vision.ImageAnnotatorClient()
  const req = {
    requests:[
      {
        image:{
          content: image
        },
        features:[
          {
            type: "TEXT_DETECTION",
          }
        ]
      }
    ]
  }
  try {
    const res = await client.batchAnnotateImages(req)
    return {
      res,
    };
  } catch (error) {
    logger.log('cloud vision api failed', error);
    return {
      error: error
    };
  }
});

export const uploadFile = onCall((request, response) => {
  const files = request.data.files
  Promise.all(files.map(function(file) {
    const fileRef = ref(storage, `${STORAGE_DIRECTORY}/${file.name}`)
    return uploadBytes(fileRef, file)
  })).then(res => {
    return ({
      result: res
    })
  })
})

export const listFile = onCall(async (request, response) => {
  const [files] = await storage.bucket(bucketName).getFiles({
    prefix: 'bills/'
  })
  return ({
    result: files
  })
  files.forEach(file => {
    console.log(file.name);
  });
})
