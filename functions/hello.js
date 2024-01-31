import { helper, getCurrentTime } from "./helper";

export default function handler(req, res) {
  console.log("Current time: ",getCurrentTime());

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