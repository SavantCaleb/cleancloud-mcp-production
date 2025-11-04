// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UpdateRepeatPickup extends APIResource {
  /**
   * Update an existing repeat pickup scheduler
   */
  update(
    body: UpdateRepeatPickupUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/updateRepeatPickup', { body, ...options });
  }
}

export interface UpdateRepeatPickupUpdateParams {
  api_token: string;

  customerID: string;

  duration: number;

  frequency: 1 | 2 | 3 | 4;

  pickupDate: number;

  pickupEnd: string;

  pickupID: string;

  pickupStart: string;

  deliveryDays?: number;

  deliveryEnd?: string;

  deliveryStart?: string;

  schedulerConfirmDays?: number;

  schedulerType?: 0 | 1;

  tip?: number;

  tipPercent?: number;
}

export declare namespace UpdateRepeatPickup {
  export { type UpdateRepeatPickupUpdateParams as UpdateRepeatPickupUpdateParams };
}
