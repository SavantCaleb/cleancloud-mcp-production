// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SetDefaultCard extends APIResource {
  /**
   * Set the default credit card for a customer
   */
  set(body: SetDefaultCardSetParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/setDefaultCard', { body, ...options });
  }
}

export interface SetDefaultCardSetParams {
  api_token: string;

  cardID: string;

  customerID: string;

  /**
   * 3=Clearent, 5=CleanCloud Pay, 6=Amazon
   */
  type: 3 | 5 | 6;
}

export declare namespace SetDefaultCard {
  export { type SetDefaultCardSetParams as SetDefaultCardSetParams };
}
