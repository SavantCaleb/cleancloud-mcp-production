// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class DeletePickup extends APIResource {
  /**
   * Delete a repeat pickup scheduler
   */
  create(
    body: DeletePickupCreateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/deletePickup', { body, ...options });
  }
}

export interface DeletePickupCreateParams {
  api_token: string;

  customerID: string;

  pickupID: string;
}

export declare namespace DeletePickup {
  export { type DeletePickupCreateParams as DeletePickupCreateParams };
}
