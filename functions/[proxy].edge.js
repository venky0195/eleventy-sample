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
        newHeaders.delete("etag"); // Prevent fixed-size bypass
  
      // Optional: reinforce cache policy
      if (!newHeaders.has("Cache-Control")) {
        newHeaders.set("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=2592000");
      }
  
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
  