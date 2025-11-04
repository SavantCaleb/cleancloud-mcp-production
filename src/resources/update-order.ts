// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UpdateOrder extends APIResource {
  /**
   * Update an existing order. Only submit parameters you wish to update.
   */
  update(body: UpdateOrderUpdateParams, options?: RequestOptions): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/updateOrder', { body, ...options });
  }
}

export interface UpdateOrderUpdateParams {
  api_token: string;

  orderID: string;

  creditUsed?: number;

  customerID?: string;

  delivery?: 0 | 1;

  deliveryDate?: number;

  deliveryEnd?: string;

  deliveryFee?: number;

  deliveryReschedule?: 1 | 2;

  deliveryStart?: string;

  discount?: number;

  discountPercent?: number;

  finalTotal?: number;

  minimumAdjust?: number;

  notifyMethod?: 1 | 2 | 3 | 4;

  orderNotes?: string;

  paid?: 0 | 1;

  paymentType?: 0 | 1 | 2 | 3;

  pickupDate?: number;

  pickupEnd?: string;

  pickupReschedule?: 1 | 2;

  pickupStart?: string;

  priceListID?: string;

  status?: 0 | 1 | 2 | 4 | 5;

  tax?: number;

  tax2?: number;

  tax3?: number;

  tip?: number;

  tipPercent?: number;
}

export declare namespace UpdateOrder {
  export { type UpdateOrderUpdateParams as UpdateOrderUpdateParams };
}
