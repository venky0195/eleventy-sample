export default async function handler(request, context) {
    try {
        //print the request headers loop through the headers and print the key and value

        let requestHeaders = Object.fromEntries(request.headers);
        console.log("req headers from edge fn-->", requestHeaders)

        const response = await fetch(request);

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
        });
    } catch (error) {
        console.log('🚀 ~ handler ~ error:', error)

    }

}
