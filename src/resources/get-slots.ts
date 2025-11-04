// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetSlots extends APIResource {
  /**
   * Get available pickup and delivery time slots for a specific day
   */
  create(body: GetSlotCreateParams, options?: RequestOptions): APIPromise<GetSlotCreateResponse> {
    return this._client.post('/api/getSlots', { body, ...options });
  }
}

export interface GetSlotCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<GetSlotCreateResponse.Data>;
}

export namespace GetSlotCreateResponse {
  export interface Data {
    /**
     * Whether slot is available
     */
    available?: boolean;

    /**
     * Remaining slots available
     */
    remaining?: number;

    /**
     * Time slot (e.g., "10am-11am")
     */
    time?: string;
  }
}

export interface GetSlotCreateParams {
  api_token: string;

  /**
   * Unix timestamp at 12pm UTC
   */
  day: number;

  routeID: string;
}

export declare namespace GetSlots {
  export {
    type GetSlotCreateResponse as GetSlotCreateResponse,
    type GetSlotCreateParams as GetSlotCreateParams,
  };
}
