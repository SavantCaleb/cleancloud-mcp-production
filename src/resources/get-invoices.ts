// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetInvoices extends APIResource {
  /**
   * Retrieve invoices with optional filters
   */
  retrieve(body: GetInvoiceRetrieveParams, options?: RequestOptions): APIPromise<GetInvoiceRetrieveResponse> {
    return this._client.post('/api/getInvoices', { body, ...options });
  }
}

export interface GetInvoiceRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetInvoiceRetrieveResponse.Data>;
}

export namespace GetInvoiceRetrieveResponse {
  export interface Data {
    /**
     * Invoice ID
     */
    id?: string;

    /**
     * Invoice amount
     */
    amount?: number;

    /**
     * Business account ID
     */
    businessID?: string;

    /**
     * Customer ID
     */
    customerID?: string;

    /**
     * Invoice date
     */
    date?: string;
  }
}

export interface GetInvoiceRetrieveParams {
  api_token: string;

  businessID?: string;

  customerID?: string;

  dateFrom?: string;

  dateTo?: string;
}

export declare namespace GetInvoices {
  export {
    type GetInvoiceRetrieveResponse as GetInvoiceRetrieveResponse,
    type GetInvoiceRetrieveParams as GetInvoiceRetrieveParams,
  };
}
