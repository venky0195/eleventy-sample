export default async function handler(request, context) {
    //print the request headers loop through the headers and print the key and value
    for (const [key, value] of request.headers.entries()) {
        console.log("Request Headers")
        console.log(`${key}: ${value}`);
    }

    const response = await fetch(request);
    console.log("🙋🏻 from edge fn")
   
    //print the response headers loop through the headers and print the key and value
    for (const [key, value] of response.headers.entries()) {
        console.log("Response Headers")
        console.log(`${key}: ${value}`);
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}
