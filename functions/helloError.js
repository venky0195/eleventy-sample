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
  // Add some console logs before throwing the error
  console.log('Before throwing error in throwErrorExample function');
  console.debug('Additional information or debugging logs...');
  
  // This line will throw a runtime error
  throw new Error('Simulating a runtime error in throwErrorExample function');
}