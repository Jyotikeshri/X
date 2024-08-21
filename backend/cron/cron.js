import cron from "cron";
import http from "http"; // Changed from https to http

const URL = "http://localhost:8000"; // Keep using http

const job = new cron.CronJob("*/14 * * * *", function () {
  http // Changed from https to http
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request", e);
    });
});

export default job;
