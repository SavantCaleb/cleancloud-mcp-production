// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UpdateCustomer extends APIResource {
  /**
   * Updates customer account information. Only submit parameters you wish to update.
   */
  update(body: UpdateCustomerUpdateParams, options?: RequestOptions): APIPromise<APIResponse> {
    return this._client.post('/api/updateCustomer', { body, ...options });
  }
}

export interface APIResponse {
  /**
   * Response data
   */
  data?: unknown;

  /**
   * Response message
   */
  message?: string;

  /**
   * Whether the request was successful
   */
  success?: boolean;
}

export interface UpdateCustomerUpdateParams {
  /**
   * Your secret API token
   */
  api_token: string;

  /**
   * ID of the customer
   */
  customerID: string;

  birthdayDay?: number;

  birthdayMonth?: number;

  colorsDryerHeat?: 0 | 1 | 2;

  colorsWashTemp?: 0 | 1 | 2;

  customerAddress?: string;

  customerAddressInstructions?: string;

  customerEmail?: string;

  customerLat?: number;

  customerLng?: number;

  customerName?: string;

  customerNotes?: string;

  customerPassword?: string;

  customerRoute?: string;

  customerTel?: string;

  detergentScent?: 0 | 1 | 2 | 3 | 4 | 5;

  detergentType?: 0 | 1 | 2;

  evoToken?: string;

  fabricSoftenerType?: 0 | 1 | 2 | 3;

  findRoute?: 0 | 1;

  makeLatLng?: 0 | 1;

  shirtPreference?: 0 | 1 | 2;

  starchPreference?: 0 | 1 | 2 | 3 | 4;

  stripe?: string;

  trouserPreference?: 0 | 1 | 2 | 3;

  whitesDryerHeat?: 0 | 1 | 2;

  whitesWashTemp?: 0 | 1 | 2;
}

export declare namespace UpdateCustomer {
  export { type APIResponse as APIResponse, type UpdateCustomerUpdateParams as UpdateCustomerUpdateParams };
}
