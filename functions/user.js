
exports.handler = (event, context, callback) => {
console.log("Hello from /user serverless fn");
  const response = {
    statusCode: 200,
    headers: {
      'Cache-Control': 'no-cache' // Disable caching of this response
    },
    body: 'This is a user'
  }

  return callback(null, response)
}
