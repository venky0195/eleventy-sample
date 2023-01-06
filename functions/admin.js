
exports.handler = (event, context, callback) => {
console.log("This is admin handler");
  const response = {
    statusCode: 200,
    headers: {
      'Cache-Control': 'no-cache' // Disable caching of this response
    },
    body: 'Admin access only'
  }

  return callback(null, response)
}
