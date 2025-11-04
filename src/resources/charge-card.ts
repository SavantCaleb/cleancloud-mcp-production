// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ChargeCard extends APIResource {
  /**
   * Charge a saved credit card for an order
   */
  charge(body: ChargeCardChargeParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/chargeCard', { body, ...options });
  }
}

export interface ChargeCardChargeParams {
  api_token: string;

  customerID: string;

  orderID: string;

  /**
   * 1=Stripe, 2=EVO, 3=Clearent, 4=Checkout.com, 5=CleanCloud Pay, 6=Amazon
   */
  type: 1 | 2 | 3 | 4 | 5 | 6;
}

export declare namespace ChargeCard {
  export { type ChargeCardChargeParams as ChargeCardChargeParams };
}
