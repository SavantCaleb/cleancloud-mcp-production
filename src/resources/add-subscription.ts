// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddSubscription extends APIResource {
  /**
   * Subscribe customer to a regular subscription
   */
  create(
    body: AddSubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AddSubscriptionCreateResponse> {
    return this._client.post('/api/addSubscription', { body, ...options });
  }
}

export interface Subscription {
  /**
   * Whether subscription is active
   */
  active?: boolean;

  /**
   * Next billing date
   */
  nextBilling?: string;

  /**
   * Subscription plan ID
   */
  subscriptionID?: string;
}

export interface AddSubscriptionCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Subscription;
}

export interface AddSubscriptionCreateParams {
  api_token: string;

  customerID: string;

  /**
   * Plan ID (e.g., plan_JNIndsfsdfvc)
   */
  subscriptionID: string;

  /**
   * Set to 1 if 3D Secure was successful
   */
  subscriptionConfirmed?: 0 | 1;
}

export declare namespace AddSubscription {
  export {
    type Subscription as Subscription,
    type AddSubscriptionCreateResponse as AddSubscriptionCreateResponse,
    type AddSubscriptionCreateParams as AddSubscriptionCreateParams,
  };
}
