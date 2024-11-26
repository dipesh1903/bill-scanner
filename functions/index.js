/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onCall} from "firebase-functions/v2/https";
import vision from "@google-cloud/vision";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

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
  const res = await client.batchAnnotateImages(req)
  return {
    res
  };
});
