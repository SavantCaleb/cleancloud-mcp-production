// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddCustomerAPI from './add-customer';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetCustomer extends APIResource {
  /**
   * Retrieve information about a customer or customers within a date range
   */
  retrieve(
    body: GetCustomerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<GetCustomerRetrieveResponse> {
    return this._client.post('/api/getCustomer', { body, ...options });
  }
}

export interface GetCustomerRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: AddCustomerAPI.Customer | Array<AddCustomerAPI.Customer>;
}

export interface GetCustomerRetrieveParams {
  api_token: string;

  /**
   * ID of the customer
   */
  customerID?: string;

  /**
   * Beginning date (yyyy-mm-dd)
   */
  dateFrom?: string;

  /**
   * End date (yyyy-mm-dd)
   */
  dateTo?: string;

  /**
   * Exclude deactivated customers
   */
  excludeDeactivated?: 0 | 1;
}

export declare namespace GetCustomer {
  export {
    type GetCustomerRetrieveResponse as GetCustomerRetrieveResponse,
    type GetCustomerRetrieveParams as GetCustomerRetrieveParams,
  };
}
