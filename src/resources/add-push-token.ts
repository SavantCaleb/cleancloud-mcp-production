// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddPushToken extends APIResource {
  /**
   * Add Firebase push notification token
   */
  create(
    body: AddPushTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/addPushToken', { body, ...options });
  }
}

export interface AddPushTokenCreateParams {
  api_token: string;

  /**
   * App bundle ID (e.g., com.company.app)
   */
  bundleID: string;

  customerID: string;

  /**
   * 0=Android, 1=iOS
   */
  platform: 0 | 1;

  pushToken: string;
}

export declare namespace AddPushToken {
  export { type AddPushTokenCreateParams as AddPushTokenCreateParams };
}
