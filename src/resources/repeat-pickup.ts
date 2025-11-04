// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class RepeatPickupResource extends APIResource {
  /**
   * Create a repeat pickup scheduler
   */
  create(body: RepeatPickupCreateParams, options?: RequestOptions): APIPromise<RepeatPickupCreateResponse> {
    return this._client.post('/api/repeatPickup', { body, ...options });
  }
}

export interface RepeatPickup {
  /**
   * Repeat pickup ID
   */
  id?: string;

  /**
   * Customer ID
   */
  customerID?: string;

  /**
   * Days after pickup for delivery
   */
  deliveryDays?: number;

  /**
   * End time for delivery
   */
  deliveryEnd?: string;

  /**
   * Start time for delivery
   */
  deliveryStart?: string;

  /**
   * 0=Until cancelled, 1-20=number of orders
   */
  duration?: number;

  /**
   * 1=Every week, 2=Every 2 weeks, 3=Every 3 weeks, 4=Every 4 weeks
   */
  frequency?: 1 | 2 | 3 | 4;

  /**
   * Number of orders already created
   */
  ordersCreatedSoFar?: number;

  /**
   * Unix timestamp of first pickup date
   */
  pickupDate?: number;

  /**
   * End time for pickup
   */
  pickupEnd?: string;

  /**
   * Start time for pickup
   */
  pickupStart?: string;

  /**
   * Days in advance to send confirm SMS
   */
  schedulerConfirmDays?: number;

  /**
   * 0 = regular, 1 = requires SMS confirmation
   */
  schedulerType?: 0 | 1;

  /**
   * Tip amount for each order
   */
  tip?: number;

  /**
   * Tip percentage
   */
  tipPercent?: number;
}

export interface RepeatPickupCreateResponse extends UpdateCustomerAPI.APIResponse {
  data?: RepeatPickup;
}

export interface RepeatPickupCreateParams {
  api_token: string;

  customerID: string;

  duration: number;

  frequency: 1 | 2 | 3 | 4;

  pickupDate: number;

  pickupEnd: string;

  pickupStart: string;

  deleteOld?: 0 | 1;

  deliveryDays?: number;

  deliveryEnd?: string;

  deliveryStart?: string;

  ordersCreatedSoFar?: number;

  schedulerConfirmDays?: number;

  schedulerType?: 0 | 1;

  tip?: number;

  tipPercent?: number;
}

export declare namespace RepeatPickupResource {
  export {
    type RepeatPickup as RepeatPickup,
    type RepeatPickupCreateResponse as RepeatPickupCreateResponse,
    type RepeatPickupCreateParams as RepeatPickupCreateParams,
  };
}
