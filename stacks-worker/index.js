const Router = require('./router');

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

/**
 * Attempt to route the incoming request.
 * @param {Request} request The request to handle.
 * @returns A Response object.
 */
async function handleRequest(request) {
  const r = new Router();
  r.get('/api/v1/instrument/.*', request => handleInstrumentRequest(request));
  return await r.route(request);
}

/**
 * Attempt to fetch instrument data for the incoming request.
 * @param {Request} request The request to handle.
 * @returns A Response object.
 */
async function handleInstrumentRequest(request) {
  const { origin, pathname } = new URL(request.url);
  const instrumentId = /[^/]*$/.exec(pathname)[0];

  // Fetch instrument data from MSN
  const blob = await fetchInstrumentData(instrumentId);

  return new Response(blob, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
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
