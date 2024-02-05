import { helper } from "./helper";

export default function handler(req, res) {
  console.log("Current time: ",throwErrorExample());

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

  function throwErrorExample() {
    throw new Error('This is a custom runtime error!');
}