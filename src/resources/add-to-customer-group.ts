// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AddToCustomerGroup extends APIResource {
  /**
   * Assign a customer to a customer group
   */
  add(
    body: AddToCustomerGroupAddParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/addToCustomerGroup', { body, ...options });
  }
}

export interface AddToCustomerGroupAddParams {
  api_token: string;

  customerID: string;

  groupID: string;
}

export declare namespace AddToCustomerGroup {
  export { type AddToCustomerGroupAddParams as AddToCustomerGroupAddParams };
}
