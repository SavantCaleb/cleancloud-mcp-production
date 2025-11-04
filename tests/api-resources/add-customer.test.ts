// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addCustomer', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.addCustomer.create({
      api_token: 'api_token',
      customerEmail: 'customerEmail',
      customerName: 'customerName',
      customerTel: 'customerTel',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.addCustomer.create({
      api_token: 'api_token',
      customerEmail: 'customerEmail',
      customerName: 'customerName',
      customerTel: 'customerTel',
      birthdayDay: 1,
      birthdayMonth: 1,
      colorsDryerHeat: 0,
      colorsWashTemp: 0,
      customerAddress: 'customerAddress',
      customerAddressInstructions: 'customerAddressInstructions',
      customerGender: 0,
      customerLat: 0,
      customerLng: 0,
      customerNotes: 'customerNotes',
      customerPassword: 'customerPassword',
      customerRoute: 'customerRoute',
      detergentScent: 0,
      detergentType: 0,
      evoToken: 'evoToken',
      fabricSoftenerType: 0,
      findRoute: 0,
      makeLatLng: 0,
      marketingOptIn: 0,
      noEmailRequired: 0,
      promoCode: 'promoCode',
      shirtPreference: 0,
      starchPreference: 0,
      stripe: 'stripe',
      trouserPreference: 0,
      whitesDryerHeat: 0,
      whitesWashTemp: 0,
    });
  });
});
