// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetInventory extends APIResource {
  /**
   * Get current inventory levels
   */
  fetch(body: GetInventoryFetchParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/getInventory', { body, ...options });
  }
}

export interface GetInventoryFetchParams {
  api_token: string;
}

export declare namespace GetInventory {
  export { type GetInventoryFetchParams as GetInventoryFetchParams };
}
