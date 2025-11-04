// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddSubscriptionAPI from './add-subscription';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetSubscription extends APIResource {
  /**
   * Get subscription information for a customer
   */
  retrieve(
    body: GetSubscriptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetSubscriptionRetrieveResponse> {
    return this._client.post('/api/getSubscription', { body, ...options });
  }
}

export interface GetSubscriptionRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: AddSubscriptionAPI.Subscription;
}

export interface GetSubscriptionRetrieveParams {
  api_token: string;

  customerID: string;
}

export declare namespace GetSubscription {
  export {
    type GetSubscriptionRetrieveResponse as GetSubscriptionRetrieveResponse,
    type GetSubscriptionRetrieveParams as GetSubscriptionRetrieveParams,
  };
}
