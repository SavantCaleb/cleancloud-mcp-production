// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PasswordCustomer extends APIResource {
  /**
   * Initiate a password reset for a customer
   */
  reset(
    body: PasswordCustomerResetParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/passwordCustomer', { body, ...options });
  }
}

export interface PasswordCustomerResetParams {
  api_token: string;

  customerEmail: string;
}

export declare namespace PasswordCustomer {
  export { type PasswordCustomerResetParams as PasswordCustomerResetParams };
}
