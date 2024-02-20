
export default function handler(req, res) {
  console.log(process.env);
  console.log(process.env.CFX_LOG_SOURCE_TOKEN,"process.env.CFX_LOG_SOURCE_TOKEN")

  res
      .status(200)
      .json({
        query: req.query,
        method: req.method,
        body: req.body,
        headers: req.headers,
        url: req.url,
        randomNumber: Math.floor((Math.random()*100) + 1),
      })
  }