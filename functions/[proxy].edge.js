import etag from "etag";

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

    const newHeaders = new Headers(response.headers);

    if (isCompressible) {
        //create etag and set header here
        newHeaders.set("ETag", createETag(response.body));
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}

function createETag(body, encoding = "utf8") {
    const buf = !Buffer.isBuffer(body) ? Buffer.from(body, encoding) : body;
    return etag(buf, { weak: true });
  }