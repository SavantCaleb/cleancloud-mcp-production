// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource updateCustomer', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.updateCustomer.update({
      api_token: 'api_token',
      customerID: 'customerID',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.updateCustomer.update({
      api_token: 'api_token',
      customerID: 'customerID',
      birthdayDay: 1,
      birthdayMonth: 1,
      colorsDryerHeat: 0,
      colorsWashTemp: 0,
      customerAddress: 'customerAddress',
      customerAddressInstructions: 'customerAddressInstructions',
      customerEmail: 'customerEmail',
      customerLat: 0,
      customerLng: 0,
      customerName: 'customerName',
      customerNotes: 'customerNotes',
      customerPassword: 'customerPassword',
      customerRoute: 'customerRoute',
      customerTel: 'customerTel',
      detergentScent: 0,
      detergentType: 0,
      evoToken: 'evoToken',
      fabricSoftenerType: 0,
      findRoute: 0,
      makeLatLng: 0,
      shirtPreference: 0,
      starchPreference: 0,
      stripe: 'stripe',
      trouserPreference: 0,
      whitesDryerHeat: 0,
      whitesWashTemp: 0,
    });
  });
});
