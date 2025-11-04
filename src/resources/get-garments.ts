// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as UpdateCustomerAPI from './update-customer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GetGarments extends APIResource {
  /**
   * Retrieve information about a specific garment
   */
  retrieve(body: GetGarmentRetrieveParams, options?: RequestOptions): APIPromise<GetGarmentRetrieveResponse> {
    return this._client.post('/api/getGarment', { body, ...options });
  }

  /**
   * Retrieve information about all garments in an order
   */
  retrieveAll(
    body: GetGarmentRetrieveAllParams,
    options?: RequestOptions,
  ): APIPromise<GetGarmentRetrieveAllResponse> {
    return this._client.post('/api/getGarments', { body, ...options });
  }
}

export interface Garment {
  /**
   * Garment ID
   */
  id?: string;

  /**
   * Barcode ID of the garment
   */
  barcodeID?: string;

  /**
   * Primary color ID
   */
  color1?: string;

  /**
   * Secondary color ID
   */
  color2?: string;

  /**
   * Location on conveyor
   */
  conveyorLocation?: string;

  /**
   * Custom status tracking
   */
  customStatus?: number;

  /**
   * Additional notes
   */
  extraNotes?: string;

  /**
   * Order ID
   */
  orderID?: string;
}

export interface GetGarmentRetrieveResponse extends UpdateCustomerAPI.APIResponse {
  data?: Garment;
}

export interface GetGarmentRetrieveAllResponse extends UpdateCustomerAPI.APIResponse {
  data?: Array<Garment>;
}

export interface GetGarmentRetrieveParams {
  api_token: string;

  barcodeID: string;

  orderID: string;
}

export interface GetGarmentRetrieveAllParams {
  api_token: string;

  orderID: string;
}

export declare namespace GetGarments {
  export {
    type Garment as Garment,
    type GetGarmentRetrieveResponse as GetGarmentRetrieveResponse,
    type GetGarmentRetrieveAllResponse as GetGarmentRetrieveAllResponse,
    type GetGarmentRetrieveParams as GetGarmentRetrieveParams,
    type GetGarmentRetrieveAllParams as GetGarmentRetrieveAllParams,
  };
}
