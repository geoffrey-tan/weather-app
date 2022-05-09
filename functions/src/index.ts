/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable require-jsdoc */
import * as functions from "firebase-functions";
const fetch = require("node-fetch");

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

function getForecast(
    request: functions.https.Request, response: functions.Response<any>,
) {
  // const location = request.params.location || "Amsterdam";
  const location = "Amsterdam";
  const url = `${BASE_URL}?APPID=${process.env.APPID}&q=${location}`;

  fetch(url)
  // @ts-ignore
      .then((resp) => {
        if (resp.status !== 200) {
          throw new Error(resp.statusText);
        }
        return resp.json();
      })
      // @ts-ignore
      .then((data) => {
        // setTimeout(() => {
        //   resp.json(data);
        // }, FORECAST_DELAY);
        response.json(data);
      })
      // @ts-ignore
      .catch((err) => {
        console.error("API Error:", err.message);
        // resp.json(generateFakeForecast(location));
      });
}

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", { structuredData: true });
  // response.send("Hello from Firebase!");
  getForecast(request, response);
});
