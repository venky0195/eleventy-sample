export default async function handler(request, context) {
    //print the request headers loop through the headers and print the key and value
    
    let requestHeaders = Object.fromEntries(request.headers);
    console.log("req headers",requestHeaders)

    const response = await fetch(request);
    console.log("🙋🏻 from edge fn")
   
    //print the response headers loop through the headers and print the key and value
   let responseHeaders = Object.fromEntries(response.headers);
    console.log("resp headers",responseHeaders)

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}
