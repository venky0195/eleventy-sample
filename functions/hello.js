export default async function handler(req, res) {
    try {
        const requestHeaders = req.headers;
        console.log("req headers from cloud fn-->", requestHeaders);

        res.status(200).json({
            message: "helloworld!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: JSON.stringify(error)
        });
    }
}
