// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetPayments extends APIResource {
  /**
   * Retrieve payment history
   */
  retrieve(body: GetPaymentRetrieveParams, options?: RequestOptions): APIPromise<GetPaymentRetrieveResponse> {
    return this._client.post('/api/getPayments', { body, ...options });
  }
}

export interface GetPaymentRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetPaymentRetrieveResponse.Data>;
}

export namespace GetPaymentRetrieveResponse {
  export interface Data {
    /**
     * Payment ID
     */
    id?: string;

    /**
     * Payment amount
     */
    amount?: number;

    /**
     * Customer ID
     */
    customerID?: string;

    /**
     * Payment date
     */
    date?: string;

    /**
     * Payment method
     */
    method?: string;
  }
}

export interface GetPaymentRetrieveParams {
  api_token: string;

  customerID?: string;

  dateFrom?: string;

  dateTo?: string;
}

export declare namespace GetPayments {
  export {
    type GetPaymentRetrieveResponse as GetPaymentRetrieveResponse,
    type GetPaymentRetrieveParams as GetPaymentRetrieveParams,
  };
}
