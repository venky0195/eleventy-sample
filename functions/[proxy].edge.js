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

    const shouldCompress = compressibleTypes.some(type =>
        contentType.includes(type)
    );

    if (shouldCompress) {
        const newHeaders = new Headers(response.headers);

        // Remove content-encoding if already present
        newHeaders.delete("Content-Encoding");

        // Ensure CDN can vary based on encoding support
        newHeaders.set("Vary", "Accept-Encoding");

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }

    return response;
}
