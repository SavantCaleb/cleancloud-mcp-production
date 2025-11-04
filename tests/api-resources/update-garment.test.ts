// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource updateGarment', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.updateGarment.update({ api_token: 'api_token', barcodeID: 'barcodeID' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.updateGarment.update({
      api_token: 'api_token',
      barcodeID: 'barcodeID',
      color1: 'color1',
      color2: 'color2',
      conveyorLocation: 'conveyorLocation',
      customStatus: 0,
      extraNotes: 'extraNotes',
      orderID: 'orderID',
    });
  });
});
