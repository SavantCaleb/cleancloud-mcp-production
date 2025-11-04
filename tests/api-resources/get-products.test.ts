// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource getProducts', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.getProducts.retrieve({ api_token: 'api_token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.getProducts.retrieve({
      api_token: 'api_token',
      inStore: 0,
      priceListID: 'priceListID',
      sendParents: 0,
      sendUpcharges: 0,
    });
  });
});
