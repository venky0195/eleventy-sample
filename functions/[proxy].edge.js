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

    const newHeaders = new Headers(response.headers);

    if (shouldCompress) {
        newHeaders.delete("Content-Encoding");
        newHeaders.set("Vary", "Accept-Encoding");

        if (
            contentType.includes("text/html") &&
            !newHeaders.get("Cache-Control")?.includes("s-maxage")
        ) {
            newHeaders.set(
                "Cache-Control",
                "public, s-maxage=86400, stale-while-revalidate=2592000"
            );
        }

        // Log to console (visible in Launch logs tab)
        console.log("Edge Function Compression Debug:", {
            url: request.url,
            contentType,
            acceptEncoding: request.headers.get("accept-encoding"),
            cacheControl: newHeaders.get("Cache-Control")
        });

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    }

    return response;
}
