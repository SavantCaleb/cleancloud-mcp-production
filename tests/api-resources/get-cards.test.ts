// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource getCards', () => {
  // Prism tests are disabled
  test.skip('fetchAll: only required params', async () => {
    const responsePromise = client.getCards.fetchAll({
      api_token: 'api_token',
      customerID: 'customerID',
      type: 3,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('fetchAll: required and optional params', async () => {
    const response = await client.getCards.fetchAll({
      api_token: 'api_token',
      customerID: 'customerID',
      type: 3,
    });
  });
});
