// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetPriceLists extends APIResource {
  /**
   * Retrieve all active price lists
   */
  create(body: GetPriceListCreateParams, options?: RequestOptions): APIPromise<GetPriceListCreateResponse> {
    return this._client.post('/api/getPriceLists', { body, ...options });
  }
}

export interface GetPriceListCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetPriceListCreateResponse.Data>;
}

export namespace GetPriceListCreateResponse {
  export interface Data {
    /**
     * Price list ID
     */
    id?: string;

    /**
     * Whether price list is active
     */
    active?: boolean;

    /**
     * Price list name
     */
    name?: string;
  }
}

export interface GetPriceListCreateParams {
  api_token: string;
}

export declare namespace GetPriceLists {
  export {
    type GetPriceListCreateResponse as GetPriceListCreateResponse,
    type GetPriceListCreateParams as GetPriceListCreateParams,
  };
}
