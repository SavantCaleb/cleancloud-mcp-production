// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource loginCustomer', () => {
  // Prism tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.loginCustomer.login({
      api_token: 'api_token',
      customerEmail: 'customerEmail',
      customerPassword: 'customerPassword',
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
  test.skip('login: required and optional params', async () => {
    const response = await client.loginCustomer.login({
      api_token: 'api_token',
      customerEmail: 'customerEmail',
      customerPassword: 'customerPassword',
    });
  });
});
