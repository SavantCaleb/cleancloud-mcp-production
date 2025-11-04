// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource updateOrder', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.updateOrder.update({ api_token: 'api_token', orderID: 'orderID' });
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
    const response = await client.updateOrder.update({
      api_token: 'api_token',
      orderID: 'orderID',
      creditUsed: 0,
      customerID: 'customerID',
      delivery: 0,
      deliveryDate: 0,
      deliveryEnd: 'deliveryEnd',
      deliveryFee: 0,
      deliveryReschedule: 1,
      deliveryStart: 'deliveryStart',
      discount: 0,
      discountPercent: 0,
      finalTotal: 0,
      minimumAdjust: 0,
      notifyMethod: 1,
      orderNotes: 'orderNotes',
      paid: 0,
      paymentType: 0,
      pickupDate: 0,
      pickupEnd: 'pickupEnd',
      pickupReschedule: 1,
      pickupStart: 'pickupStart',
      priceListID: 'priceListID',
      status: 0,
      tax: 0,
      tax2: 0,
      tax3: 0,
      tip: 0,
      tipPercent: 0,
    });
  });
});
