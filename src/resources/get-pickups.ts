// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as RepeatPickupAPI from './repeat-pickup';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetPickups extends APIResource {
  /**
   * Get list of repeat pickups for a customer
   */
  create(body: GetPickupCreateParams, options?: RequestOptions): APIPromise<GetPickupCreateResponse> {
    return this._client.post('/api/getPickups', { body, ...options });
  }
}

export interface GetPickupCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<RepeatPickupAPI.RepeatPickup>;
}

export interface GetPickupCreateParams {
  api_token: string;

  customerID: string;
}

export declare namespace GetPickups {
  export {
    type GetPickupCreateResponse as GetPickupCreateResponse,
    type GetPickupCreateParams as GetPickupCreateParams,
  };
}
