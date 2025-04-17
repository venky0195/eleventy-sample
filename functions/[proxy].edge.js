export default async function handler(request, context) {
    const response = await fetch(request);
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

    if (!isCompressible) return response;

    const headers = new Headers(response.headers);

    const etag = headers.get("ETag");
    if (etag && !etag.startsWith("W/")) {
        headers.set("ETag", `W/${etag}`);
    }

    return new Response(bodyBuffer, {
        status: response.status,
        statusText: response.statusText,
        headers,
    });
}
