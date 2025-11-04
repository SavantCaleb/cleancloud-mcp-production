// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddOrderAPI from './add-order';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetProducts extends APIResource {
  /**
   * Retrieve all active products
   */
  retrieve(body: GetProductRetrieveParams, options?: RequestOptions): APIPromise<GetProductRetrieveResponse> {
    return this._client.post('/api/getProducts', { body, ...options });
  }
}

export interface GetProductRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<AddOrderAPI.Product>;
}

export interface GetProductRetrieveParams {
  api_token: string;

  /**
   * Products as they appear in store POS
   */
  inStore?: 0 | 1;

  priceListID?: string;

  sendParents?: 0 | 1;

  sendUpcharges?: 0 | 1;
}

export declare namespace GetProducts {
  export {
    type GetProductRetrieveResponse as GetProductRetrieveResponse,
    type GetProductRetrieveParams as GetProductRetrieveParams,
  };
}
