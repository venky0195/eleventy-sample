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
        // newHeaders.delete("content-md5");
        // newHeaders.delete("Last-Modified");
        // newHeaders.delete("Access-Control-Expose-Headers");
        // newHeaders.delete("access-control-allow-origin");
        // newHeaders.delete("X-Ms-Request-Id");
        // newHeaders.delete("X-Ms-Version");
        // newHeaders.delete("X-Envoy-Upstream-Service-Time");
        // newHeaders.delete("etag");
        newHeaders.set("etag", "0x8DD7CC777E51F4F");
        console.log("🔧 Compressible response detected:", {
            url: request.url,
            contentType,
        });
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}
