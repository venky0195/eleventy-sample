export default async function handler(req, res) {
    try {
        let requestHeaders = Object.fromEntries(req.headers);
        console.log("req headers from cloud fn-->", requestHeaders);

  
  res.status(200).json({
    message: "helloworld!"
  });
    } catch (error) {
        res.status(200).json({
            message: "something went wrong",
            error
        })
    }
    
}