// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AddOrderAPI from './add-order';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetOrders extends APIResource {
  /**
   * Retrieve order details with various filters
   */
  retrieve(body: GetOrderRetrieveParams, options?: RequestOptions): APIPromise<GetOrderRetrieveResponse> {
    return this._client.post('/api/getOrders', { body, ...options });
  }
}

export interface GetOrderRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<AddOrderAPI.Order>;
}

export interface GetOrderRetrieveParams {
  api_token: string;

  completed?: 0 | 1;

  customerID?: string;

  dateFrom?: string;

  dateTo?: string;

  orderID?: string;

  paid?: 0 | 1;

  routeID?: string;

  /**
   * Include detailed product information
   */
  sendProductDetails?: 0 | 1;

  status?: 0 | 1 | 2 | 4 | 5;

  /**
   * Filter orders updated in last X seconds
   */
  updatedSecondsAgoFrom?: number;
}

export declare namespace GetOrders {
  export {
    type GetOrderRetrieveResponse as GetOrderRetrieveResponse,
    type GetOrderRetrieveParams as GetOrderRetrieveParams,
  };
}
