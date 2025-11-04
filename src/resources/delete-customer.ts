// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeleteCustomer extends APIResource {
  /**
   * Deletes an existing customer account
   */
  delete(
    body: DeleteCustomerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/deleteCustomer', { body, ...options });
  }
}

export interface DeleteCustomerDeleteParams {
  api_token: string;

  customerID: string;
}

export declare namespace DeleteCustomer {
  export { type DeleteCustomerDeleteParams as DeleteCustomerDeleteParams };
}
