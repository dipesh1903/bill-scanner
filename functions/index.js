import {onCall} from "firebase-functions/v2/https";
import vision from "@google-cloud/vision";
import { logger } from "firebase-functions";

export const helloWorld = onCall(async (request, response) => {
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
