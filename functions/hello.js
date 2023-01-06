
exports.handler = (event, context, callback) => {
console.log("Hello from /hello serverless fn");
  const response = {
    statusCode: 200,
    headers: {
      'Cache-Control': 'no-cache' // Disable caching of this response
    },
    body: ''
  }

  return callback(null, response)
}
