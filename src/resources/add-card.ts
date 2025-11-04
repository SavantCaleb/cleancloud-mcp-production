// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddCard extends APIResource {
  /**
   * Add a credit card to customer account
   */
  create(body: AddCardCreateParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/addCard', { body, ...options });
  }
}

export interface AddCardCreateParams {
  api_token: string;

  customerID: string;

  /**
   * 1=Stripe, 2=Stripe setup intent, 3=Clearent, 6=Amazon
   */
  type: 1 | 2 | 3 | 6;

  /**
   * Payment method ID or token
   */
  paymentMethodID?: string;
}

export declare namespace AddCard {
  export { type AddCardCreateParams as AddCardCreateParams };
}
