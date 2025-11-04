// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteSubscription extends APIResource {
  /**
   * Delete subscription from customer account
   */
  delete(
    body: DeleteSubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/deleteSubscription', { body, ...options });
  }
}

export interface DeleteSubscriptionDeleteParams {
  api_token: string;

  customerID: string;
}

export declare namespace DeleteSubscription {
  export { type DeleteSubscriptionDeleteParams as DeleteSubscriptionDeleteParams };
}
