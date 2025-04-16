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
        const bodyBuffer = await response.arrayBuffer();
        const bodyUint8 = new Uint8Array(bodyBuffer);

        // Compute SHA-1 hash
        const hashBuffer = await crypto.subtle.digest("SHA-1", bodyBuffer);
        const hashHex = Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, "0"))
            .join("");

        const weakETag = `W/"${bodyUint8.length.toString(16)}-${hashHex}"`;

        newHeaders.set("ETag", weakETag);
    }

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
    });
}
