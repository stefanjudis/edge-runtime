module.exports =
  typeof EdgeRuntime === 'string' ? edge() : require('@edge-runtime/primitives')

function edge() {
  return {
    AbortController,
    AbortSignal,
    Blob,
    Cache,
    CacheStorage,
    Crypto,
    CryptoKey,
    Event,
    EventTarget,
    FetchEvent,
    File,
    FormData,
    Headers,
    PromiseRejectionEvent,
    ReadableStream,
    ReadableStreamBYOBReader,
    ReadableStreamDefaultReader,
    Request,
    Response,
    SubtleCrypto,
    TextDecoder,
    TextEncoder,
    TransformStream,
    URL,
    URLPattern,
    URLSearchParams,
    WritableStream,
    WritableStreamDefaultWriter,
    atob,
    btoa,
    caches,
    console,
    crypto,
    fetch,
    structuredClone,
  }
}
