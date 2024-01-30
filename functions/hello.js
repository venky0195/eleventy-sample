import { helper } from "./helper";

export default function handler(req, res) {
  console.log("Console log from function hello!!");
  console.log("process.env.CFX_LOG_TARGET_FEATURE_TOGGLE_ENABLED->",process.env.CFX_LOG_TARGET_FEATURE_TOGGLE_ENABLED);
  console.log("process.env.CFX_TELEMETRY_SERVICE_ENDPOINT->",process.env.CFX_TELEMETRY_SERVICE_ENDPOINT);
  console.log("process.env.CFX_LOG_SOURCE_TOKEN->",process.env.CFX_LOG_SOURCE_TOKEN);

  res
      .status(200)
      .json({
        query: req.query,
        method: req.method,
        body: req.body,
        headers: req.headers,
        url: req.url,
        randomNumber: Math.floor((Math.random()*100) + 1),
        helperText: helper()
      })
  }