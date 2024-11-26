import {onCall} from "firebase-functions/v2/https";
import vision from "@google-cloud/vision";

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
  const res = client.batchAnnotateImages(req)
  return {
    res
  };
});
