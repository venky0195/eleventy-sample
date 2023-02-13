export default function handler(req, res) {


  if (req.method === "GET") {
      console.log("processing user........");
    res
      .status(200)
      .json({ method: "GET", route: "id", params: req.params })
  }
}
