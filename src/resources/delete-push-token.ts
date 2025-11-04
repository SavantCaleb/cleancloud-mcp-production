// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeletePushToken extends APIResource {
  /**
   * Delete Firebase push notification token
   */
  create(
    body: DeletePushTokenCreateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/deletePushToken', { body, ...options });
  }
}

export interface DeletePushTokenCreateParams {
  api_token: string;

  customerID: string;

  pushToken: string;
}

export declare namespace DeletePushToken {
  export { type DeletePushTokenCreateParams as DeletePushTokenCreateParams };
}
