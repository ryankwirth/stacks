addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Attempt to fetch chart information for the given instrument ID.
 * @param {Request} request The request to handle.
 * @returns A Response object.
 */
async function handleRequest(request) {
  const { origin, searchParams } = new URL(request.url);
  const instrumentId = searchParams.get('instrumentId');

  // Fetch instrument data from MSN
  const blob = await fetchInstrumentData(instrumentId);

  // Return the data and set the CORS header
  return new Response(blob, {
    headers: {
      'Content-Type': blob.type,
      'Access-Control-Allow-Origin': origin,
    },
  });
}

/**
 * Fetch data for the given instrument ID
 * @param {string} instrumentId The ID of the instrument to look up.
 * @returns A Blob object..
 */
async function fetchInstrumentData(instrumentId) {
  const params = new URLSearchParams({
    apikey: '0QfOX3Vn51YCzitbLaRkTTBadtWpgTN8NZLW0C1SEM',
    ids: instrumentId,
    wrapodata: false,
    type: 'All',
  });

  const url = new URL('https://assets.msn.com/service/Finance/Charts');
  url.search = params.toString();

  const response = await fetch(url);
  return await response.blob();
}
