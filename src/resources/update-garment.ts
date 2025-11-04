// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UpdateGarment extends APIResource {
  /**
   * Update details about an existing garment
   */
  update(
    body: UpdateGarmentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UpdateCustomerAPI.APIResponse> {
    return this._client.post('/api/updateGarment', { body, ...options });
  }
}

export interface UpdateGarmentUpdateParams {
  api_token: string;

  barcodeID: string;

  color1?: string;

  color2?: string;

  conveyorLocation?: string;

  customStatus?: number;

  extraNotes?: string;

  /**
   * Send if barcodeID is not unique
   */
  orderID?: string;
}

export declare namespace UpdateGarment {
  export { type UpdateGarmentUpdateParams as UpdateGarmentUpdateParams };
}
