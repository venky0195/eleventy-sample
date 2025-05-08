export default async function handler(request, context) {
    const response = await fetch(request);
    console.log("🙋🏻 from edge fn")
    const contentType = response.headers.get("Content-Type") || "";
    const compressibleTypes = [
        "text/html",
        "text/css",
        "application/javascript",
        "application/json",
        "image/svg+xml"
    ];

    const isCompressible = compressibleTypes.some(type =>
        contentType.includes(type)
    );

    const newHeaders = new Headers(response.headers);

    if (isCompressible) {
        const etag = newHeaders.get("ETag");
        if (etag && !etag.startsWith("W/")) {
            newHeaders.set("ETag", `W/${etag}`);
        }
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}
