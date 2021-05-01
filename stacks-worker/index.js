addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Attempt to fetch chart information for the given instrument ID.
 * @param {Request} request The request to handle.
 * @returns A Response object.
 */
async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const instrumentId = searchParams.get('instrumentId');
  return await fetchInstrumentData(instrumentId);
}

/**
 * Fetch data for the given instrument ID
 * @param {string} instrumentId The ID of the instrument to look up.
 * @returns A Response object.
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

  return await fetch(url);
}
