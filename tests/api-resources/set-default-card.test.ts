// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource setDefaultCard', () => {
  // Prism tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.setDefaultCard.set({
      api_token: 'api_token',
      cardID: 'cardID',
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
  test.skip('set: required and optional params', async () => {
    const response = await client.setDefaultCard.set({
      api_token: 'api_token',
      cardID: 'cardID',
      customerID: 'customerID',
      type: 3,
    });
  });
});
