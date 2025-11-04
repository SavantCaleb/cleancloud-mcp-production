// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cleancloud from 'cleancloud';

const client = new Cleancloud({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource addOrder', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.addOrder.create({
      api_token: 'api_token',
      customerID: 'customerID',
      finalTotal: 0,
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
    const response = await client.addOrder.create({
      api_token: 'api_token',
      customerID: 'customerID',
      finalTotal: 0,
      creditUsed: 0,
      delivery: 0,
      deliveryDate: 0,
      deliveryEnd: 'deliveryEnd',
      deliveryFee: 0,
      deliveryStart: 'deliveryStart',
      discount: 0,
      discountPercent: 0,
      express: 0,
      lockerLocationID: 'lockerLocationID',
      lockerNumber: 'lockerNumber',
      lockerOrder: 0,
      minimumAdjust: 0,
      notifyMethod: 1,
      orderNotes: 'orderNotes',
      paid: 0,
      paymentType: 0,
      pickupDate: 0,
      pickupEnd: 'pickupEnd',
      pickupStart: 'pickupStart',
      priceListID: 'priceListID',
      products: [{ id: 'id', name: 'name', pieces: 0, price: 0, quantity: 0 }],
      sendEmail: 0,
      staffVerify: 0,
      status: 0,
      storeDropOffDate: 0,
      storeOrder: 0,
      storeReadyByDate: 0,
      storeReadyByTime: 'storeReadyByTime',
      tax: 0,
      tax2: 0,
      tax3: 0,
      tip: 0,
      tipPercent: 0,
    });
  });
});
