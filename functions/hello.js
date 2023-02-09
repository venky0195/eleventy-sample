export default function handler(req, res) {

  console.log("from cloudfunction " + Date.now());
  if (req.method === "GET") {
    res
      .status(200)
      .json({ method: "GET", route: "id", params: req.params })
  }

  if (req.method === "POST") {
    res
      .status(200)
      .json({ method: "POST", route: "id", params: req.params })
  }
}
