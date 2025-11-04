// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class LoginCustomer extends APIResource {
  /**
   * Verify customer credentials and retrieve customer ID
   */
  login(body: LoginCustomerLoginParams, options?: RequestOptions): APIPromise<LoginCustomerLoginResponse> {
    return this._client.post('/api/loginCustomer', { body, ...options });
  }
}

export interface LoginCustomerLoginResponse extends UpdateCustomerAPI.APIResponse {
  data?: LoginCustomerLoginResponse.Data;
}

export namespace LoginCustomerLoginResponse {
  export interface Data {
    customerID?: string;
  }
}

export interface LoginCustomerLoginParams {
  api_token: string;

  customerEmail: string;

  customerPassword: string;
}

export declare namespace LoginCustomer {
  export {
    type LoginCustomerLoginResponse as LoginCustomerLoginResponse,
    type LoginCustomerLoginParams as LoginCustomerLoginParams,
  };
}
